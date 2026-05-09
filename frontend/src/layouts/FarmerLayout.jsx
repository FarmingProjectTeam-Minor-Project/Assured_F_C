import { Outlet, NavLink } from "react-router-dom"

import {
  RiBarChartBoxLine,
  RiPlantLine,
  RiHandHeartLine,
  RiWalletLine,
  RiNotification3Line,
  RiUser3Line,
  RiLogoutBoxLine,
  RiHome5Line,
  RiLeafLine,
  RiAddLine
} from "react-icons/ri"

function FarmerLayout() {

  return (

    <div className="min-h-screen bg-gray-100 flex">

      {/* SIDEBAR */}
      <aside
        className="hidden lg:flex
                   flex-col
                   w-72
                   h-screen
                   overflow-y-auto
                   bg-[#0f172a]
                   text-white
                   p-6
                   fixed top-0 left-0
                   z-50">

        {/* LOGO */}
        <h1
          className="text-2xl font-bold
                     text-green-400 mb-10">

          Farmer Panel

        </h1>



        {/* MENU */}
        <nav className="flex flex-col gap-4">

          {/* DASHBOARD */}
          <NavLink
            to="/farmer-dashboard"

            className={({ isActive }) =>

              `flex items-center gap-3
               px-4 py-3 rounded-lg
               transition

               ${
                 isActive
                   ? "bg-green-600 text-white"
                   : "hover:bg-white/10"
               }`
            }>

            <RiBarChartBoxLine className="text-xl" />

            Dashboard

          </NavLink>



          {/* MY CROPS */}
          <NavLink
            to="/farmer/my-crops"

            className={({ isActive }) =>

              `flex items-center gap-3
               px-4 py-3 rounded-lg
               transition

               ${
                 isActive
                   ? "bg-green-600 text-white"
                   : "hover:bg-white/10"
               }`
            }>

            <RiPlantLine className="text-xl" />

            My Crops

          </NavLink>



          {/* ADD CROP */}
          <NavLink
            to="/farmer/add-crop"

            className={({ isActive }) =>

              `flex items-center gap-3
               px-4 py-3 rounded-lg
               transition

               ${
                 isActive
                   ? "bg-green-600 text-white"
                   : "hover:bg-white/10"
               }`
            }>

            <RiAddLine className="text-xl" />

            Add Crop

          </NavLink>



          {/* CONTRACTS */}
          <NavLink
            to="/farmer/contracts"

            className={({ isActive }) =>

              `flex items-center gap-3
               px-4 py-3 rounded-lg
               transition

               ${
                 isActive
                   ? "bg-green-600 text-white"
                   : "hover:bg-white/10"
               }`
            }>

            <RiHandHeartLine className="text-xl" />

            Contracts

          </NavLink>



          {/* PAYMENTS */}
          <NavLink
            to="/farmer/payments"

            className={({ isActive }) =>

              `flex items-center gap-3
               px-4 py-3 rounded-lg
               transition

               ${
                 isActive
                   ? "bg-green-600 text-white"
                   : "hover:bg-white/10"
               }`
            }>

            <RiWalletLine className="text-xl" />

            Payments

          </NavLink>



          {/* NOTIFICATIONS */}
          <NavLink
            to="/farmer/notifications"

            className={({ isActive }) =>

              `flex items-center gap-3
               px-4 py-3 rounded-lg
               transition

               ${
                 isActive
                   ? "bg-green-600 text-white"
                   : "hover:bg-white/10"
               }`
            }>

            <RiNotification3Line className="text-xl" />

            Notifications

          </NavLink>



          {/* PROFILE */}
          <NavLink
            to="/farmer/profile"

            className={({ isActive }) =>

              `flex items-center gap-3
               px-4 py-3 rounded-lg
               transition

               ${
                 isActive
                   ? "bg-green-600 text-white"
                   : "hover:bg-white/10"
               }`
            }>

            <RiUser3Line className="text-xl" />

            Profile

          </NavLink>



          {/* LOGOUT */}
          <button
            className="flex items-center gap-3
                       px-4 py-3 mt-6
                       text-red-500
                       hover:bg-red-500/10
                       rounded-lg
                       transition">

            <RiLogoutBoxLine className="text-xl" />

            Logout

          </button>

        </nav>

      </aside>



      {/* PAGE CONTENT */}
      <main
        className="flex-1
                   lg:ml-72
                   min-h-screen
                   pb-28 lg:pb-10">

        <Outlet />

      </main>



      {/* MOBILE NAVIGATION */}
      <div
        className="lg:hidden
                   fixed bottom-0 left-0
                   w-full
                   bg-white border-t
                   shadow-2xl
                   z-50">

        <div
          className="flex justify-around
                     items-center py-3">

          {/* HOME */}
          <NavLink
            to="/farmer-dashboard"

            className={({ isActive }) =>

              `flex flex-col items-center
               text-sm transition

               ${
                 isActive
                   ? "text-green-600"
                   : "text-gray-700 hover:text-green-600"
               }`
            }>

            <RiHome5Line className="text-2xl" />

            <span>Home</span>

          </NavLink>



          {/* CROPS */}
          <NavLink
            to="/farmer/my-crops"

            className={({ isActive }) =>

              `flex flex-col items-center
               text-sm transition

               ${
                 isActive
                   ? "text-green-600"
                   : "text-gray-700 hover:text-green-600"
               }`
            }>

            <RiLeafLine className="text-2xl" />

            <span>Crops</span>

          </NavLink>



          {/* ADD */}
          <NavLink
            to="/farmer/add-crop"

            className={({ isActive }) =>

              `flex flex-col items-center
               text-sm transition

               ${
                 isActive
                   ? "text-green-600"
                   : "text-gray-700 hover:text-green-600"
               }`
            }>

            <RiAddLine className="text-2xl" />

            <span>Add</span>

          </NavLink>



          {/* DEALS */}
          <NavLink
            to="/farmer/contracts"

            className={({ isActive }) =>

              `flex flex-col items-center
               text-sm transition

               ${
                 isActive
                   ? "text-green-600"
                   : "text-gray-700 hover:text-green-600"
               }`
            }>

            <RiHandHeartLine className="text-2xl" />

            <span>Deals</span>

          </NavLink>



          {/* PROFILE */}
          <NavLink
            to="/farmer/profile"

            className={({ isActive }) =>

              `flex flex-col items-center
               text-sm transition

               ${
                 isActive
                   ? "text-green-600"
                   : "text-gray-700 hover:text-green-600"
               }`
            }>

            <RiUser3Line className="text-2xl" />

            <span>Profile</span>

          </NavLink>

        </div>

      </div>

    </div>
  )
}

export default FarmerLayout