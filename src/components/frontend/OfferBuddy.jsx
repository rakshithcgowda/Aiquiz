import React, { useState } from 'react';
import axios from 'axios';

const OfferBuddy = () => {
  const [offerData, setOfferData] = useState({
    vendor: { name: '', situation: '', condition: '', challenges: '', family_member: '', family_situation: '' },
    local_knowledge: { experience: '', comparables: [{ address: '', status: 'Sold', price: 0 }], avg_sale_price: 0, required_profit: 0, profit_reason: '' },
    costs: { Deposit: 0, Finance: 0, Solicitors: 0 },
    negative_points: '',
    offers: [{ amount: 0, description: '' }],
    social_proof: '',
    proof_of_funds: '',
    creativity: 0.3,
    detail_level: 'Standard',
  });
  const [offer, setOffer] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOfferData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://127.0.0.0:8000/api/offer-generator', offerData);
      setOffer(response.data.offer);
    } catch (error) {
      console.error('Error:', error);
      setOffer('Failed to generate offer');
    }
  };

  return (
    <div className="auction-section">
      <h2>Offer Buddy</h2>
      <div>
        <label>Vendor Name:</label>
        <input name="vendor.name" value={offerData.vendor.name} onChange={handleInputChange} />
        <label>Vendor Situation:</label>
        <textarea name="vendor.situation" value={offerData.vendor.situation} onChange={handleInputChange} />
        <label>Property Condition:</label>
        <textarea name="vendor.condition" value={offerData.vendor.condition} onChange={handleInputChange} />
        <label>Local Experience:</label>
        <textarea name="local_knowledge.experience" value={offerData.local_knowledge.experience} onChange={handleInputChange} />
        <label>Average Sale Price (£):</label>
        <input type="number" name="local_knowledge.avg_sale_price" value={offerData.local_knowledge.avg_sale_price} onChange={handleInputChange} />
        <label>Required Profit (£):</label>
        <input type="number" name="local_knowledge.required_profit" value={offerData.local_knowledge.required_profit} onChange={handleInputChange} />
        <label>Deposit (£):</label>
        <input type="number" name="costs.Deposit" value={offerData.costs.Deposit} onChange={handleInputChange} />
        <button onClick={handleSubmit}>Generate Offer</button>
      </div>
      {offer && (
        <div>
          <h3>Offer</h3>
          <p>{offer}</p>
        </div>
      )}
    </div>
  );
};

export default OfferBuddy;