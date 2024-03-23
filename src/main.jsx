import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { reduxStore } from './store/store.js';
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EventForm from './components/eventForm/eventForm.jsx';
import EventListings from './components/eventListings/eventListings.jsx';

const router = createBrowserRouter([  
  {
    path: "/",
    element: <App />,
  },
  {
   path:"/eventform",
   element: <EventForm />,
},
{
  path:"eventlistings",
  element:<EventListings />
}
])

let persistor=persistStore(reduxStore);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={reduxStore}>
    <PersistGate persistor={persistor}>
    <RouterProvider router={router} />
 </PersistGate>
    </Provider>,
)