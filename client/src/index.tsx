import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';  // Import Provider from react-redux
import App from './components/App';
import { store } from './app/store';  // Import your Redux store here
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your application in the Redux Provider */}
    <BrowserRouter basename="/portfolio">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
