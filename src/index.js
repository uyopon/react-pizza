import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import store from './redux/store'; // store - объект c методами redux'a
import { Provider } from 'react-redux'; ////Provider нужен чтобы прокидывать данные из редакса не использя пропсы





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <BrowserRouter>
    {/* провидер нужен чтобы у всего app былдоступ к объекту store  */}
      <Provider store = {store}> 
        <App/>
      </Provider>  

    </BrowserRouter>
  </React.StrictMode>


);


reportWebVitals();


{/* <React.StrictMode>
    <App />
  </React.StrictMode> */}
