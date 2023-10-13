import React from 'react';
import './Board.css';
import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const Board = () => {
  return (
    <div className="board">
      <div className="logo">LOGO</div>
      <div className='board1'>Board.</div>
      <div className="icons">
      <GitHub style={{ marginRight: '10px' }}/>
      <Twitter style={{ marginRight: '10px' }}/>
      <LinkedIn style={{ marginRight: '10px' }}/>
      <Instagram style={{ marginRight: '10px' }}/>
      </div>
    </div>
  );
};

export default Board;