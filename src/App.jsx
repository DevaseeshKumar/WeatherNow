import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import NotFoundPage from './pages/NotFoundPage'
import AboutPage from './pages/AboutPage'
import ViewWeatherPage from './pages/ViewWeatherPage'
import ForecastPage from './pages/ForecastPage'
import Card from './pages/Card'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/weather" element={<ViewWeatherPage />} />
        <Route path="/forecast" element={<ForecastPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/card" element={<Card />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
    
  )
}

export default App
