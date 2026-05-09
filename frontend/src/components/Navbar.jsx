import { useState } from "react"
import { Link } from "react-router-dom"

import {
  RiHome4Line,
  RiGlobalFill,
  RiLeafLine,
  RiInformationLine,
  RiMailFill,
  RiMenuLine,
  RiCloseLine
} from "react-icons/ri"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <>

      {/* NAVBAR */}
      <nav
        className="w-full
                   bg-[linear-gradient(90.8deg,rgba(27,53,68,1)_2.2%,rgba(110,180,135,1)_84%)]
                   shadow-lg">

        <div
          className="max-w-7xl mx-auto
                     flex items-center justify-between
                     px-4 md:px-6 py-4">

          {/* LOGO */}
          <h1
            className="text-xl sm:text-2xl md:text-3xl
                       font-extrabold tracking-wide
                       text-white leading-tight">

            Assured Contract Farming
          </h1>


          {/* DESKTOP LINKS */}
          <ul
            className="hidden lg:flex
                       items-center gap-6
                       text-white font-semibold text-lg">

            <li>
              <Link
                to="/"
                className="hover:text-teal-300 transition">

                <RiHome4Line className="inline mr-1" />
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/how-it-works"
                className="hover:text-teal-300 transition">

                <RiGlobalFill className="inline mr-1" />
                How It Works
              </Link>
            </li>

            <li>
              <Link
                to="/features"
                className="hover:text-teal-300 transition">

                <RiLeafLine className="inline mr-1" />
                Features
              </Link>
            </li>


            {/* ABOUT */}
            <li>
              <Link
                to="/about"
                className="hover:text-teal-300 transition">

                <RiInformationLine className="inline mr-1" />
                About
              </Link>
            </li>


            <li>
              <Link
                to="/contact"
                className="hover:text-teal-300 transition">

                <RiMailFill className="inline mr-1" />
                Contact
              </Link>
            </li>

          </ul>


          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex gap-3">

            <Link
              to="/login"
              className="px-5 py-2 border border-white
                         text-white rounded-xl font-semibold
                         hover:bg-white hover:text-black
                         transition">

              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2 bg-teal-500
                         text-white rounded-xl font-semibold
                         hover:bg-teal-600 transition">

              Register
            </Link>

          </div>


          {/* MOBILE MENU BUTTON */}
          <div
            className="lg:hidden text-4xl
                       text-white cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}>

            {
              menuOpen
                ? <RiCloseLine />
                : <RiMenuLine />
            }

          </div>

        </div>

      </nav>


      {/* MOBILE MENU */}
      {
        menuOpen && (

          <div
            className="lg:hidden
                       bg-[linear-gradient(180deg,rgba(27,53,68,1),rgba(110,180,135,1))]
                       text-white shadow-xl px-6 py-6">

            <ul className="flex flex-col gap-6 text-lg font-semibold">

              <li>
                <Link
                  to="/"
                  className="hover:text-teal-300"
                  onClick={() => setMenuOpen(false)}>

                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/how-it-works"
                  className="hover:text-teal-300"
                  onClick={() => setMenuOpen(false)}>

                  How It Works
                </Link>
              </li>

              <li>
                <Link
                  to="/features"
                  className="hover:text-teal-300"
                  onClick={() => setMenuOpen(false)}>

                  Features
                </Link>
              </li>


              {/* ABOUT */}
              <li>
                <Link
                  to="/about"
                  className="hover:text-teal-300"
                  onClick={() => setMenuOpen(false)}>

                  About
                </Link>
              </li>


              <li>
                <Link
                  to="/contact"
                  className="hover:text-teal-300"
                  onClick={() => setMenuOpen(false)}>

                  Contact
                </Link>
              </li>

              <hr className="border-white/40" />

              <li>

                <Link
                  to="/login"
                  className="block text-center
                             border border-white
                             rounded-lg py-3
                             hover:bg-white hover:text-black
                             transition">

                  Login
                </Link>

              </li>

              <li>

                <Link
                  to="/register"
                  className="block text-center
                             bg-teal-500 rounded-lg py-3
                             hover:bg-teal-600 transition">

                  Register
                </Link>

              </li>

            </ul>

          </div>

        )
      }

    </>
  )
}

export default Navbar