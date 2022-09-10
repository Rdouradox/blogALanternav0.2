import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

// hooks
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'

// CONTEXT
import { AuthProvider } from './context/AuthContext'

// PAGES
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Filosofia from './pages/Filosofia/Filosofia'
import Poesia from './pages/Poesia/Poesia'
import Arte from './pages/Arte/Arte'
import Cultura from './pages/Cultura/Cultura'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
// import { AuthProvider } from './context/AuthContext'

function App() {
  const [user, setUser] = useState(undefined)
  const [auth] = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/Philosophy" element={<Filosofia></Filosofia>} />
              <Route path="/poetry" element={<Poesia />} />
              <Route path="/art" element={<Arte />} />
              <Route path="/culture" element={<Cultura />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
