import React from 'react'
import { render } from 'react-dom'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import  store  from './store/store'
import App from "./containers/App";

const persistor = persistStore(store, null, () => {
  store.getState();
});



render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>,
    document.getElementById("app")
  );
  
