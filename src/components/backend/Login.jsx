// src/components/admin/AdminPortal.jsx
import React, { useContext, useEffect, useState } from 'react'
import { Tab, Tabs, Table, Form, Button, Col, Row, Spinner, ProgressBar } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { AuthContext } from '../backend/context/Auth'
import axios from 'axios'
import { Pie, Bar } from 'react-chartjs-2'
import 'chart.js/auto'
import Footer from '../common/Footer'
import Header from '../common/Header'

export default function AdminPortal() {
  const { token } = useContext(AuthContext)
  const [key, setKey] = useState('users')

  // ----- Shared Loading & Data States -----
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [subsUsers, setSubsUsers] = useState([])
  const [subscriptions, setSubscriptions] = useState({})
  const [contentFiles, setContentFiles] = useState([])
  const [featureUsage, setFeatureUsage] = useState([])
  const [userActivity, setUserActivity] = useState([])

  // ----- Form States -----
  const [newUser, setNewUser] = useState({ username: '', password: '', role: 'user', location_id: '' })
  const [uploadFile, setUploadFile] = useState(null)
  const [uploadDesc, setUploadDesc] = useState('')
  const [contentType, setContentType] = useState('Document')
  const [uploading, setUploading] = useState(false)

  // Axios instance
  const api = axios.create({
    baseURL: '/api/admin',
    headers: { Authorization: `Bearer ${token}` },
  })

  // Single effect: fires only when `key` (active tab) changes
  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        if (key === 'users') {
          const { data } = await api.get('/users')
          const list = Array.isArray(data) ? data : Array.isArray(data.users) ? data.users : []
          setUsers(list)
        } else if (key === 'subscriptions') {
          const [{ data: u }, { data: s }] = await Promise.all([
            api.get('/users'),
            api.get('/subscriptions'),
          ])
          const names = Array.isArray(u) ? u.map(x => x.username) : Array.isArray(u.users) ? u.users.map(x => x.username) : []
          setSubsUsers(names)
          const map = {}
          ;(Array.isArray(s) ? s : []).forEach(x => { map[x.username] = x })
          setSubscriptions(map)
        } else if (key === 'content') {
          const { data } = await api.get('/content')
          setContentFiles(Array.isArray(data) ? data : data.files || [])
        } else if (key === 'analytics') {
          const [{ data: usage }, { data: activity }] = await Promise.all([
            api.get('/analytics/feature-usage'),
            api.get('/analytics/user-activity'),
          ])
          setFeatureUsage(Array.isArray(usage) ? usage : usage.data || [])
          setUserActivity(Array.isArray(activity) ? activity : activity.data || [])
        }
      } catch {
        toast.error('Failed to load data')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [key])

  // Handlers
  const handleCreateUser = async e => {
    e.preventDefault()
    try {
      await api.post('/users', newUser)
      toast.success('User created')
      setNewUser({ username: '', password: '', role: 'user', location_id: '' })
      // reload users tab if active
      if (key === 'users') setKey('') && setKey('users')
    } catch {
      toast.error('Failed to create user')
    }
  }

  const handleSubUpdate = async (username, field, value) => {
    try {
      await api.put(`/subscriptions/${username}`, { [field]: value })
      toast.success('Subscription updated')
      setSubscriptions(prev => ({
        ...prev,
        [username]: { ...prev[username], [field]: value },
      }))
    } catch {
      toast.error('Failed to update subscription')
    }
  }

  const handleUpload = async e => {
    e.preventDefault()
    if (!uploadFile) return toast.warn('Select a file first')
    setUploading(true)
    try {
      const form = new FormData()
      form.append('file', uploadFile)
      form.append('description', uploadDesc)
      form.append('type', contentType.toLowerCase())
      await api.post('/content', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      toast.success('Uploaded')
      setUploadFile(null)
      setUploadDesc('')
      // reload content tab if active
      if (key === 'content') setKey('') && setKey('content')
    } catch {
      toast.error('Upload failed')
    } finally {
      setUploading(false)
    }
  }

  return (
    <>
    <Header />
    <Tabs id="admin-portal-tabs" activeKey={key} onSelect={k => setKey(k)} className="mb-3">
      {/* Users */}
      <Tab eventKey="users" title="User Management">
        {loading && key === 'users' ? (
          <Spinner animation="border" />
        ) : (
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Role</th>
                  <th>Location ID</th>
                  <th>Last Login</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(users) && users.length > 0 ? (
                  users.map(u => (
                    <tr key={u.username}>
                      <td>{u.username}</td>
                      <td>{u.role}</td>
                      <td>{u.location_id || '–'}</td>
                      <td>{u.last_login || '–'}</td>
                      <td>{u.created_at || '–'}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center">
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>

            <h5>Create New User</h5>
            <Form onSubmit={handleCreateUser}>
              <Row>
                <Col md={3}>
                  <Form.Control
                    placeholder="Username"
                    value={newUser.username}
                    onChange={e => setNewUser({ ...newUser, username: e.target.value })}
                    required
                  />
                </Col>
                <Col md={3}>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={newUser.password}
                    onChange={e => setNewUser({ ...newUser, password: e.target.value })}
                    required
                  />
                </Col>
                <Col md={2}>
                  <Form.Select
                    value={newUser.role}
                    onChange={e => setNewUser({ ...newUser, role: e.target.value })}
                  >
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                  </Form.Select>
                </Col>
                <Col md={2}>
                  <Form.Control
                    placeholder="Location ID"
                    value={newUser.location_id}
                    onChange={e => setNewUser({ ...newUser, location_id: e.target.value })}
                  />
                </Col>
                <Col md={2}>
                  <Button type="submit">Add User</Button>
                </Col>
              </Row>
            </Form>
          </>
        )}
      </Tab>

      {/* Subscriptions */}
      <Tab eventKey="subscriptions" title="Subscription Management">
        {loading && key === 'subscriptions' ? (
          <Spinner animation="border" />
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Username</th>
                <th>Lease Analysis</th>
                <th>Deal Structuring</th>
                <th>Offer Generator</th>
              </tr>
            </thead>
            <tbody>
              {subsUsers.map(username => {
                const s = subscriptions[username] || {}
                return (
                  <tr key={username}>
                    <td>{username}</td>
                    {['lease_analysis','deal_structuring','offer_generator'].map(f => (
                      <td key={f}>
                        <Form.Check
                          type="switch"
                          id={`${username}-${f}`}
                          checked={!!s[f]}
                          onChange={e => handleSubUpdate(username, f, e.target.checked)}
                        />
                      </td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </Table>
        )}
      </Tab>

      {/* Content */}
      <Tab eventKey="content" title="Content Management">
        <Form onSubmit={handleUpload} className="mb-4">
          <Row className="align-items-center">
            <Col md={2}>
              <Form.Select
                value={contentType}
                onChange={e => setContentType(e.target.value)}
              >
                <option>Document</option>
                <option>Video</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Control
                type="file"
                onChange={e => setUploadFile(e.target.files[0])}
                accept={contentType==='Document'?'.pdf,.docx,.txt':'.mp4,.mov'}
                required
              />
            </Col>
            <Col md={4}>
              <Form.Control
                placeholder="Description"
                value={uploadDesc}
                onChange={e => setUploadDesc(e.target.value)}
              />
            </Col>
            <Col md={3}>
              <Button type="submit" disabled={uploading}>
                {uploading ? <Spinner size="sm" animation="border" /> : 'Upload'}
              </Button>
            </Col>
          </Row>
        </Form>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Filename</th><th>Type</th><th>Description</th>
              <th>Uploaded By</th><th>Timestamp</th><th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(contentFiles) && contentFiles.length > 0 ? (
              contentFiles.map(f => (
                <tr key={f.filename}>
                  <td>{f.filename}</td>
                  <td>{f.type}</td>
                  <td>{f.description}</td>
                  <td>{f.uploaded_by}</td>
                  <td>{f.timestamp}</td>
                  <td>
                    <Button
                      size="sm"
                      onClick={() => window.open(`/api/admin/content/${f.filename}`, '_blank')}
                    >
                      Download
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center">No content found</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Tab>

      {/* Analytics */}
      <Tab eventKey="analytics" title="Usage Analytics">
        {loading && key === 'analytics' ? (
          <ProgressBar animated now={100} />
        ) : (
          <>
            <h5>Feature Usage Distribution</h5>
            <Pie
              data={{
                labels: featureUsage.map(u => u.feature),
                datasets: [{ data: featureUsage.map(u => u.count) }]
              }}
            />
            <h5 className="mt-4">Top Users by Activity</h5>
            <Bar
              data={{
                labels: userActivity.map(a => a.username),
                datasets: [{ label: 'Interactions', data: userActivity.map(a => a.interactions) }]
              }}
            />
          </>
        )}
      </Tab>
    </Tabs>
    
    </>
  )
}
