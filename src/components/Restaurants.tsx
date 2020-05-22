import React from 'react';
import './Restaurants.css';

interface ContainerProps {
  name: string;
  street: String;
}

const Restaurants: React.FC<ContainerProps> = ({ name, street }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>{street} <br/> 70327 Stuttgart Deutschland</p>
      //TODO: Link, Maps...
    </div>
  );
};

export default Restaurants;
