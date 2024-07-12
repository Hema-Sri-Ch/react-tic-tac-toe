import React from 'react';
import '../styles/Square.css';

export default function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}
