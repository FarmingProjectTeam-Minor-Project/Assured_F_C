import { Outlet, NavLink } from "react-router-dom"

import {
  RiDashboardLine,
  RiLeafLine,
  RiFileList3Line,
  RiWallet3Line,
  RiUser3Line,
  RiLogoutBoxLine,
  RiHome5Line,
  RiShoppingBag3Line
} from "react-icons/ri"

function BuyerLayout() {

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
                     text-blue-400 mb-10">

          Buyer Panel

        </h1>



        {/* MENU */}
        <nav className="flex flex-col gap-4">

          {/* DASHBOARD */}
          <NavLink
            to="/buyer-dashboard"

            className={({ isActive }) =>

              `flex items-center gap-3
               px-4 py-3 rounded-lg
               transition

               ${
                 isActive
                   ? "bg-blue-600 text-white"
                   : "hover:bg-white/10"
               }`
            }>

            <RiDashboardLine className="text-xl" />

            Dashboard

          </NavLink>



          {/* BROWSE CROPS */}
          <NavLink
            to="/buyer/browse-crops"

            className={({ isActive }) =>

              `flex items-center gap-3
               px-4 py-3 rounded-lg
               transition

               ${
                 isActive
                   ? "bg-blue-600 text-white"
                   : "hover:bg-white/10"
               }`
            }>

            <RiLeafLine className="text-xl" />

            Browse Crops

          </NavLink>



          {/* CONTRACTS */}
          <NavLink
            to="/buyer/contracts"

            className={({ isActive }) =>

              `flex items-center gap-3
               px-4 py-3 rounded-lg
               transition

               ${
                 isActive
                   ? "bg-blue-600 text-white"
                   : "hover:bg-white/10"
               }`
            }>

            <RiFileList3Line className="text-xl" />

            Contracts

          </NavLink>



          {/* PAYMENTS */}
          <NavLink
            to="/buyer/payments"

            className={({ isActive }) =>

              `flex items-center gap-3
               px-4 py-3 rounded-lg
               transition

               ${
                 isActive
                   ? "bg-blue-600 text-white"
                   : "hover:bg-white/10"
               }`
            }>

            <RiWallet3Line className="text-xl" />

            Payments

          </NavLink>



          {/* PROFILE */}
          <NavLink
            to="/buyer/profile"

            className={({ isActive }) =>

              `flex items-center gap-3
               px-4 py-3 rounded-lg
               transition

               ${
                 isActive
                   ? "bg-blue-600 text-white"
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
            to="/buyer-dashboard"

            className={({ isActive }) =>

              `flex flex-col items-center
               text-sm transition

               ${
                 isActive
                   ? "text-blue-600"
                   : "text-gray-700 hover:text-blue-600"
               }`
            }>

            <RiHome5Line className="text-2xl" />

            <span>Home</span>

          </NavLink>



          {/* CROPS */}
          <NavLink
            to="/buyer/browse-crops"

            className={({ isActive }) =>

              `flex flex-col items-center
               text-sm transition

               ${
                 isActive
                   ? "text-blue-600"
                   : "text-gray-700 hover:text-blue-600"
               }`
            }>

            <RiLeafLine className="text-2xl" />

            <span>Crops</span>

          </NavLink>



          {/* CONTRACTS */}
          <NavLink
            to="/buyer/contracts"

            className={({ isActive }) =>

              `flex flex-col items-center
               text-sm transition

               ${
                 isActive
                   ? "text-blue-600"
                   : "text-gray-700 hover:text-blue-600"
               }`
            }>

            <RiShoppingBag3Line className="text-2xl" />

            <span>Deals</span>

          </NavLink>



          {/* PAYMENTS */}
          <NavLink
            to="/buyer/payments"

            className={({ isActive }) =>

              `flex flex-col items-center
               text-sm transition

               ${
                 isActive
                   ? "text-blue-600"
                   : "text-gray-700 hover:text-blue-600"
               }`
            }>

            <RiWallet3Line className="text-2xl" />

            <span>Payments</span>

          </NavLink>



          {/* PROFILE */}
          <NavLink
            to="/buyer/profile"

            className={({ isActive }) =>

              `flex flex-col items-center
               text-sm transition

               ${
                 isActive
                   ? "text-blue-600"
                   : "text-gray-700 hover:text-blue-600"
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

export default BuyerLayout