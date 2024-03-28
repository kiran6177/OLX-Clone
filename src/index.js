import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context, { FirebaseContext } from './store/FirebaseContext';
import {firebase,firestore,db,storage} from '../src/Firebase/config'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase,firestore,db,storage}}>
      <Context>
        <App />
      </Context>
    </FirebaseContext.Provider>
  </React.StrictMode>
);

