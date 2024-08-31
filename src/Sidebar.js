import React from 'react';
import './side.css'
import '@fortawesome/fontawesome-free/css/all.min.css';



const Sidebar = () => {
    return (
    <div className="sidebar">
        <button className="sidebar-item">
            <i className="fas fa-dashboard" /> Dashboard
          </button>
          <button className="sidebar-item">
            <i className="fas fa-box" /> Inventory
          </button>
          <button className="sidebar-item">
            <i className="fas fa-shopping-cart" /> Order
          </button>
          <button className="sidebar-item">
            <i className="fas fa-undo" /> Returns
          </button>
          <button className="sidebar-item">
            <i className="fas fa-users" /> Customers
          </button>
          <button className="sidebar-item">
            <i className="fas fa-truck" /> Shipping
          </button>
          <button className="sidebar-item">
            <i className="fas fa-tv" /> Channel
          </button>
          <button className="sidebar-item">
            <i className="fas fa-plug" /> Integrations
          </button>
          <button className="sidebar-item">
            <i className="fas fa-calculator" /> Calculators
          </button>
          <button className="sidebar-item">
            <i className="fas fa-file-alt" /> Reports
          </button>
          <button className="sidebar-item">
            <i className="fas fa-user" /> Account
          </button>
        </div>
      );
};

export default Sidebar;