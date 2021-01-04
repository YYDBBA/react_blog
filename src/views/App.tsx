import React from 'react';
import './../styles/App.css';
import { NavLink } from 'react-router-dom'
import { Button } from 'antd'

const App: React.FC = () => {
  return (
    <div className="App">
      <NavLink to='/home'>
        <Button type='primary'>home</Button>
      </NavLink>
      <NavLink to='/set'>
        <Button>set</Button>
      </NavLink>
    </div>
  );
}

export default App;
