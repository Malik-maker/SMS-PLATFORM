import React, { useState } from "react";
import "./AdminDashboard.css"; // Import the CSS file

const TopUp = () => {
  const [network, setNetwork] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ network, phoneNumber, amount });
    alert(`Top-Up Submitted: \nNetwork: ${network} \nPhone Number: ${phoneNumber} \nAmount: ${amount}`);
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Top Up Your Account</h3>
      
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="card p-4 shadow">
            {/* Preferred Network */}
            <div className="mb-3">
              <label htmlFor="network" className="form-label">Choose Preferred Network</label>
              <select 
                id="network" 
                className="form-select" 
                value={network} 
                onChange={(e) => setNetwork(e.target.value)} 
                required
              >
                <option value="">-- Select Network --</option>
                <option value="MTN">MTN</option>
                <option value="Vodafone">Vodafone</option>
                <option value="AirtelTigo">AirtelTigo</option>
              </select>
            </div>

            {/* Phone Number */}
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input 
                type="tel" 
                id="phoneNumber" 
                className="form-control" 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)} 
                placeholder="Enter Phone Number" 
                required 
              />
            </div>

            {/* Amount */}
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">Amount</label>
              <input 
                type="number" 
                id="amount" 
                className="form-control" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                placeholder="Enter Amount" 
                required 
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn btn-success w-100">Top Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TopUp;

 