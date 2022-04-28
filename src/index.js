import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from 'react-moralis';

const serverUrl = "https://uhdt4xjlrlhj.usemoralis.com:2053/server";
const appId ="CHviwUXlZR3hfV4gL6frNFqZMOySKfvHt6ZpOhov";

ReactDOM.render(
    <React.StrictMode>
      <MoralisProvider serverUrl={serverUrl} appId={appId}>
        <App />
      </MoralisProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
