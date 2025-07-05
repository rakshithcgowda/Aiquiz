import React, { useContext } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { AuthContext } from './context/Auth';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="dashboard container my-4">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3">
            <div className="card shadow border-0 mb-4">
              <div className="card-body">
                <h5 className="card-title mb-3">Sidebar</h5>
                {/* Button-style links */}
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-light text-start"
                    onClick={() => navigate('/dashboard/overview')}
                  >
                    Dashboard
                  </button>
                  <button
                    className="btn btn-light text-start"
                    onClick={() => navigate('/dashboard/profile')}
                  >
                    Services
                  </button>
                  <button
                    className="btn btn-light text-start"
                    onClick={() => navigate('/dashboard/settings')}
                  >
                    Project
                  </button>
                  <button
                    className="btn btn-light text-start"
                    onClick={() => {
                      logout();
                      navigate('/');
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-9">
            <div className="card shadow border-0">
              <div className="card-header">
                <h4>Dashboard</h4>
              </div>
              <div className="card-body">
                <p>
                  Welcome to your dashboard! Here you can view your statistics, manage your account settings, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Dashboard;
