import React from 'react';
import './FundingPage.scss';

const FundingPage = () => {
  const governmentContributions = [
    { organization: 'Government Organization 1', amount: 10000, date: '2022-01-01' },
    { organization: 'Government Organization 2', amount: 5000, date: '2022-02-15' },
    { organization: 'Government Organization 3', amount: 20000, date: '2022-03-20' },
  ];

  const voluntaryDonations = [
    { donor: 'John Doe', amount: 10, date: '2022-01-05' },
    { donor: 'Jane Doe', amount: 20, date: '2022-02-10' },
    { donor: 'Bob Smith', amount: 50, date: '2022-03-25' },
  ];

  const handleDonation = (amount) => {
    // Handle donation logic here
    console.log(`Donation of ${amount} received!`);
  };

  return (
    <div className="funding-page">
      <h1>Funding Page</h1>
      <div className="government-contributions">
        <h2>Government Contributions</h2>
        <ul>
          {governmentContributions.map((contribution, index) => (
            <li key={index}>
              {contribution.organization}: ${contribution.amount} (made on {contribution.date})
            </li>
          ))}
        </ul>
        <p>Total Government Contributions: ${governmentContributions.reduce((acc, curr) => acc + curr.amount, 0)}</p>
      </div>
      <div className="voluntary-donations">
        <h2>Voluntary Donations</h2>
        <ul>
          {voluntaryDonations.map((donation, index) => (
            <li key={index}>
              {donation.donor}: ${donation.amount} (made on {donation.date})
            </li>
          ))}
        </ul>
        <p>Total Voluntary Donations: ${voluntaryDonations.reduce((acc, curr) => acc + curr.amount, 0)}</p>
      </div>
      <div className="donation-tool">
        <h2>Make a Donation</h2>
        <form>
          <label>
            Donation Amount:
            <input type="number" />
          </label>
          <button onClick={() => handleDonation(10)}>Donate $10</button>
          <button onClick={() => handleDonation(20)}>Donate $20</button>
          <button onClick={() => handleDonation(50)}>Donate $50</button>
        </form>
      </div>
      <div className="side-buttons">
        <button className="shg-button">SHG</button>
        <button className="trainer-details-button">Trainer Details</button>
        <button className="funding-button">Funding</button>
      </div>
    </div>
  );
};

export default FundingPage;