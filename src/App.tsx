import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from './components/TestForm'
import Login from './authPage/Login'
import { Toaster } from 'react-hot-toast'
import PublicRoutes from './authPage/PublicRoutes'
import PrivateRoutes from './authPage/PrivateRoutes'

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={12}
        containerStyle={{
          top: 20,
          right: 20,
        }}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#1f2937", // dark gray
            color: "#fff",
            padding: "12px 16px",
            borderRadius: "10px",
            fontSize: "14px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          },

          success: {
            iconTheme: {
              secondary: "#ecfdf5",
            },
          },

          error: {
            iconTheme: {
              primary: "#ef4444", // red
              secondary: "#fef2f2",
            },
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path='/login'
            element={
              <PublicRoutes>
                <Login />
              </PublicRoutes>
            }
          />
          <Route
            path='/'
            element={
              <PrivateRoutes>
                <Form />
              </PrivateRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App