import React from 'react';
import './CardLayout.css'; 

const CardLayout = ({ title, content }) => {
  return (
    <div className="card">
      <div className="card-top"></div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CardLayout;
