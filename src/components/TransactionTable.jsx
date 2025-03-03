import React from "react";
import "./styles.css";

const transactions = [
  { card: "*1234", type: "Credit", brand: "MasterCard", date: "Jan 24, 2024", time: "10:00 am", status: "Verified", amount: 2890.0 },
  { card: "*5678", type: "Debit", brand: "Visa", date: "Jan 20, 2024", time: "11:00 am", status: "Rejected", amount: -49.0 },
  { card: "*9874", type: "Debit", brand: "RuPay", date: "Jan 19, 2024", time: "2:00 pm", status: "Pending", amount: -80.0 },
  { card: "*5612", type: "Debit", brand: "Visa", date: "Jan 18, 2024", time: "11:00 am", status: "Verified", amount: -30.0 },
  { card: "*0125", type: "Credit", brand: "MasterCard", date: "Jan 17, 2024", time: "10:00 am", status: "Verified", amount: 1500.0 },
  { card: "*5824", type: "Debit", brand: "RuPay", date: "Jan 14, 2024", time: "9:00 am", status: "Rejected", amount: -200.0 },
];

const cardLogos = {
  Visa: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
  MasterCard: "https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg",
  RuPay: "https://tse2.mm.bing.net/th?id=OIP.sI126IDs2wPf35h_r_JIfgHaB8&pid=Api&P=0&h=180",
};

const getBrandIcon = (brand) => {
  return <img src={cardLogos[brand]} alt={brand} className="card-logo" />;
};

const getStatusClass = (status) => {
  switch (status) {
    case "Verified":
      return "status-verified";
    case "Rejected":
      return "status-rejected";
    case "Pending":
      return "status-pending";
    default:
      return "";
  }
};

const TransactionTable = () => {
  return (
    <div className="transaction-container">
      <h2 className="title">Recent Transactions</h2>
      <p className="subtitle">Transactions overview</p>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Card</th>
            <th>Date</th>
            <th>Status</th>
            <th>Amount (Rs.)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn, index) => (
            <tr key={index}>
              <td>
                <div className="card-details">
                  {getBrandIcon(txn.brand)}
                  <div className="card-info">
                    <span className="card-number">{txn.card}</span>
                    <span className="card-type">{txn.type}</span>
                  </div>
                </div>
              </td>
              <td>
                <p>{txn.date}</p>
                <p className="time">{txn.time}</p>
              </td>
              <td>
                <span className={`status-label ${getStatusClass(txn.status)}`}>
                  {txn.status}
                </span>
              </td>
              <td className={`amount ${txn.amount > 0 ? "positive" : "negative"}`}>
                {txn.amount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
