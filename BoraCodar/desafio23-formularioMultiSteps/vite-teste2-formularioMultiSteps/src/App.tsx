import React from 'react';
import * as ReactDOM from "react-dom/client";
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';
import { Link } from 'react-router-dom';
import { AppRouter } from './router';
import './global.css'
import styles from './App.module.css';



function App() {
  const mainDefaultStyles = {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  };
  return (
    <div style={mainDefaultStyles}>
      <AppRouter  />
    </div>
  )
}

export default App
