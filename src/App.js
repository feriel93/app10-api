import React, { useState , useEffect } from "react";
import axios from 'axios';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
     <UserList/>
    </div>
  );
}

export default App;
