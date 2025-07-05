import React, { useState } from 'react';
import axios from 'axios';

const AuctionBuddy = () => {
  const [dealData, setDealData] = useState({
    buyer_deposit: 'Moderate',
    buyer_credit: 'Average',
    buyer_experience: 'No creative strategy done yet',
    buyer_risk: 'Medium – balanced',
    buyer_goal: 'Hold long-term (rental/residence)',
    buyer_timeline: '1-2 years',
    property_type: 'Residential',
    market_price: 0,
    offer_price: 0,
    property_condition: '',
    market_condition: 'Moderate (some interest)',
    seller_motivation: '',
  });
  const [strategies, setStrategies] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDealData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://127.0.0.0:8000/api/deal-structuring', dealData);
      setStrategies(response.data.strategies);
    } catch (error) {
      console.error('Error:', error);
      setStrategies('Failed to generate strategies');
    }
  };

  return (
    <div className="auction-section">
      <h2>Auction Buddy</h2>
      <div>
        <label>Buyer Deposit:</label>
        <select name="buyer_deposit" value={dealData.buyer_deposit} onChange={handleInputChange}>
          <option>Low/Zero</option>
          <option>Moderate</option>
          <option>High</option>
        </select>
        <label>Buyer Credit:</label>
        <select name="buyer_credit" value={dealData.buyer_credit} onChange={handleInputChange}>
          <option>Excellent</option>
          <option>Average</option>
          <option>Poor</option>
          <option>None</option>
        </select>
        <label>Property Price (£):</label>
        <input type="number" name="market_price" value={dealData.market_price} onChange={handleInputChange} />
        <label>Offer Price (£):</label>
        <input type="number" name="offer_price" value={dealData.offer_price} onChange={handleInputChange} />
        <label>Property Condition:</label>
        <textarea name="property_condition" value={dealData.property_condition} onChange={handleInputChange} />
        <label>Seller Motivation:</label>
        <textarea name="seller_motivation" value={dealData.seller_motivation} onChange={handleInputChange} />
        <button onClick={handleSubmit}>Generate Strategies</button>
      </div>
      {strategies && (
        <div>
          <h3>Strategies</h3>
          <p>{strategies}</p>
        </div>
      )}
    </div>
  );
};

export default AuctionBuddy;