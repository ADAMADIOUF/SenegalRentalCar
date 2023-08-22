import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import  store  from './store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Home from './components/Home'
import DetailsPage from './components/DetailsPage'
import SingleDetail from './pages/SingleDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import Favorites from './components/Favorites'
import HowItsWork from './components/HowItsWork'
import ProductList from './pages/ProductList'
import PrivateRoute from './components/PrivateRoute'
import ProductEdit from './pages/ProductEdit'
import Toyota from './components/Toyata'
import CarSeller from './pages/CarSeller'
import SingleCarSeller from './pages/SingleCarSeller'
import CarLocation from './pages/CarLocation'
import Contact from './components/Contact'
import ReciteDeVoyage from './components/ReciteDeVoyage'
import PrintempsTardifSurLaRouteSeaToSky from './components/PrintempsTardifSurLaRouteSeaToSky'
import Jeep from './components/Jeep'
import Tesla from './components/Tesla'
import Subaru from './components/Subaru'
import Porsche from './components/Porsche'
import Bmw from './components/Bmw'
import Nissan from './components/Nissan'
import Lamborghini from './components/Lamborghini'
import Ford from './components/Ford'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='/details' element={<DetailsPage />} />
      <Route path='/details/:id' element={<SingleDetail />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/howitswork' element={<HowItsWork />} />
      <Route path='/contact' element={<Contact />} />

      <Route path='/toyota' element={<Toyota />} />

      <Route path='/jeep' element={<Jeep />} />
      <Route path='/tesla' element={<Tesla />} />
      <Route path='/subaru' element={<Subaru />} />
      <Route path='/porsche' element={<Porsche />} />
      <Route path='/bmw' element={<Bmw />} />
      <Route path='/nissan' element={<Nissan />} />
      <Route path='/lamborghini' element={<Lamborghini />} />
      <Route path='/ford' element={<Ford />} />

      <Route path='/seller' element={<CarSeller />} />
      <Route path='/travel' element={<ReciteDeVoyage />} />
      <Route path='/weather' element={<PrintempsTardifSurLaRouteSeaToSky />} />

      <Route path='/location' element={<CarLocation />} />

      <Route path='/seller/:id' element={<SingleCarSeller />} />

      <Route path='' element={<PrivateRoute />}>
        <Route path='/admin/productlist' element={<ProductList />} />
        <Route path='/admin/product/:id/edit' element={<ProductEdit />} />
      </Route>
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
