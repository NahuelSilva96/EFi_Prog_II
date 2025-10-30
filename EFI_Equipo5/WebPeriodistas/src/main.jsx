import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/main.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';  
import 'primeicons/primeicons.css';
import './styles/navbar.css';

import { BrowserRouter as Router } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);
