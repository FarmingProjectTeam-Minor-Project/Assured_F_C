import { useNavigate } from "react-router-dom"

import {
  RiUser3Line,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiEdit2Line,
  RiLockPasswordLine,
  RiLeafLine,
  RiLogoutBoxLine
} from "react-icons/ri"

function Profile() {
    const user = JSON.parse(
      localStorage.getItem("user")
    )
    const navigate = useNavigate()

    const handleLogout = () => {

      localStorage.removeItem("token")
      localStorage.removeItem("user")

      navigate("/login")
    }
    return (

    <div className="min-h-screen bg-gray-100 p-6 md:p-10">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Farmer Profile
        </h1>
        <p className="text-gray-500 mt-2">
          Manage your personal and farming details.
        </p>
      </div>



      {/* PROFILE CARD */}
      <div  className="bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* TOP SECTION */}
        <div className="bg-linear-to-r from-green-600 to-emerald-500 p-10 text-white">

          <div className="flex flex-col md:flex-row items-center gap-6">

            {/* PROFILE IMAGE */}
            <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">

              <RiUser3Line
                className="text-7xl"
              />
            </div>



            {/* USER INFO */}
            <div>
              <h2 className="text-3xl font-bold">
                 {user?.name || "Farmer"}
              </h2>

              <p className="text-green-100 mt-2">
                {user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1) || "Farner"}
              </p>

            </div>

          </div>

        </div>



        {/* DETAILS */}
        <div className="p-8 md:p-10">

          <div className="grid md:grid-cols-2 gap-8">
            {/* FULL NAME */}
            <div>
              <label  className="block font-semibold mb-3">
                Full Name
              </label>

              <div className="relative">

                <RiUser3Line
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600 text-xl"/>

                <input type="text" value={user?.name || ""} readOnly className="w-full border rounded-xl py-4 pl-12 pr-4 bg-gray-50"/>

              </div>

            </div>


            {/* EMAIL */}
            <div>

              <label className="block font-semibold mb-3">
                Email
              </label>

              <div className="relative">

                <RiMailLine className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600 text-xl"/>

                <input type="email" value={user?.email || ""} readOnly className="w-full border  rounded-xl py-4 pl-12 pr-4 bg-gray-50"/>

              </div>

            </div>



            {/* PHONE */}
            <div>

              <label className="block font-semibold mb-3">
                 Phone Number
              </label>


              <div className="relative">

                <RiPhoneLine className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600 text-xl"/>

                <input type="text" value="+91 9876543210"  readOnly className="w-full border rounded-xl py-4 pl-12 pr-4 bg-gray-50"/>

              </div>

            </div>



            {/* LOCATION */}
            <div>

              <label
                className="block font-semibold
                           mb-3">

                Location

              </label>


              <div className="relative">

                <RiMapPinLine
                  className="absolute left-4
                             top-1/2 -translate-y-1/2
                             text-green-600 text-xl"
                />

                <input
                  type="text"
                  value="Bhopal, Madhya Pradesh"
                  readOnly

                  className="w-full border
                             rounded-xl py-4
                             pl-12 pr-4
                             bg-gray-50"
                />

              </div>

            </div>



            {/* FARM TYPE */}
            <div>

              <label
                className="block font-semibold
                           mb-3">

                Farming Type

              </label>


              <div className="relative">

                <RiLeafLine
                  className="absolute left-4
                             top-1/2 -translate-y-1/2
                             text-green-600 text-xl"
                />

                <input
                  type="text"
                  value="Organic Farming"
                  readOnly

                  className="w-full border
                             rounded-xl py-4
                             pl-12 pr-4
                             bg-gray-50"
                />

              </div>

            </div>



            {/* PASSWORD */}
            <div>

              <label
                className="block font-semibold
                           mb-3">

                Password

              </label>


              <div className="relative">

                <RiLockPasswordLine
                  className="absolute left-4
                             top-1/2 -translate-y-1/2
                             text-green-600 text-xl"
                />

                <input
                  type="password"
                  value="123456789"
                  readOnly

                  className="w-full border
                             rounded-xl py-4
                             pl-12 pr-4
                             bg-gray-50"
                />

              </div>

            </div>

          </div>



          {/* BUTTONS */}
          <div
            className="flex flex-col sm:flex-row
                       gap-4 mt-10">

            <button
              className="flex-1 bg-green-600
                         text-white py-4
                         rounded-xl
                         hover:bg-green-700
                         transition
                         flex items-center
                         justify-center gap-2">

              <RiEdit2Line />

              Edit Profile

            </button>



            <button
              className="flex-1 bg-gray-200
                         text-gray-700 py-4
                         rounded-xl
                         hover:bg-gray-300
                         transition">

              Change Password

            </button>

          </div>

          <div className="mt-6">
            <button onClick={handleLogout}
              className="w-full bg-red-500 text-white py-4 rounded-xl hover:bg-red-600 transition flex items-center justify-center gap-2 font-semibold">

              <RiLogoutBoxLine className="text-xl"/>
              Logout
            </button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Profile