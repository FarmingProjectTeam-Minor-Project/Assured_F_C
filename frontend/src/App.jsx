import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import HowItWorks from "./pages/HowItWorks"
import Features from "./pages/Features"
import Contact from "./pages/Contact"
import About from "./pages/About"

import FarmerDashboard from "./pages/farmer/FarmerDashboard"
import MyCrops from "./pages/farmer/MyCrops"
import AddCrop from "./pages/farmer/AddCrop"
import Contracts from "./pages/farmer/Contracts"
import Payments from "./pages/farmer/Payments"
import Notifications from "./pages/farmer/Notifications"
import Profile from "./pages/farmer/Profile"
import FarmerLayout from "./layouts/FarmerLayout"


function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/how-it-works" element={<HowItWorks />} />

      <Route path="/features" element={<Features />} />
      
      <Route path="/contact" element={<Contact />} />

      <Route path="/about" element={<About />} />

      
      <Route element={<FarmerLayout />}>
        <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
        <Route path="/farmer/my-crops" element={<MyCrops />} />
        <Route path="/farmer/add-crop" element={<AddCrop />} />
        <Route path="/farmer/contracts" element={<Contracts />} />
        <Route path="/farmer/payments" element={<Payments />} />
        <Route path="/farmer/notifications" element={<Notifications />} />
        <Route path="/farmer/profile" element={<Profile />} />
      </Route>
      


    </Routes>

  )
}

export default App