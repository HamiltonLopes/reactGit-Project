import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rotas from './Rotas';
import reportWebVitals from './reportWebVitals';
import Repositories from './Repositories';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Rotas />
);

reportWebVitals();
