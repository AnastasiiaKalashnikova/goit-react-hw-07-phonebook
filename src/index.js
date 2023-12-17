import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from 'components/GlobalStyle';
import { App } from 'components/App/App';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from '../src/redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={'LOADING...'} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    ,
    <GlobalStyle />
  </React.StrictMode>
);
