import { useState } from "react"
import { Link } from "react-router-dom"

import {
  RiEyeLine,
  RiEyeOffLine
} from "react-icons/ri"

import loginVideo from "../../assets/videos/6.mp4"

function Login() {

  const [showPassword, setShowPassword] = useState(false)

  return (

    <section
      className="min-h-screen
                 flex items-center justify-center
                 bg-linear-to-r
                 from-gray-100 to-blue-200
                 px-4 py-10">

      {/* LOGIN CONTAINER */}
      <div
        className="max-w-5xl w-full
                   bg-white rounded-2xl
                   shadow-2xl overflow-hidden
                   border-2 border-transparent
                   hover:border-emerald-800
                   transition-all duration-300
                   flex flex-col md:flex-row">


        {/* LEFT SIDE */}
        <div
          className="w-full md:w-1/2
                     px-8 md:px-10 py-12">

          <h2
            className="text-center
                       text-4xl font-bold
                       text-emerald-800 mb-2">

            Login
          </h2>

          <p
            className="text-center text-sm
                       text-gray-400 mb-6">

            If you are already a member,
            easily log in

          </p>


          {/* FORM */}
          <form className="flex flex-col gap-4">

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email"
              required
              className="border p-3 rounded-xl
                         bg-amber-50
                         focus:outline-none
                         focus:ring-2
                         focus:ring-emerald-500"
            />


            {/* PASSWORD */}
            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="border p-3 rounded-xl
                           bg-amber-50 w-full
                           focus:outline-none
                           focus:ring-2
                           focus:ring-emerald-500"
              />

              {/* TOGGLE ICON */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2
                           -translate-y-1/2
                           text-gray-600">

                {
                  showPassword
                    ? <RiEyeOffLine size={22} />
                    : <RiEyeLine size={22} />
                }

              </button>

            </div>


            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="bg-emerald-800
                         text-white py-3
                         rounded-xl
                         hover:bg-emerald-700
                         transition">

              Login
            </button>

          </form>


          {/* OR */}
          <div
            className="my-8
                       grid grid-cols-3
                       items-center text-gray-400">

            <hr />

            <p className="text-center text-sm">
              OR
            </p>

            <hr />

          </div>


          {/* GOOGLE BUTTON */}
          <button
            className="border py-3 w-full
                       rounded-xl flex
                       justify-center items-center
                       gap-3 hover:bg-gray-100
                       transition">

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google"
              className="w-5"
            />

            Login with Google

          </button>


          {/* FORGOT PASSWORD */}
          <p className="text-sm text-center mt-4">

            <a
              href="#"
              className="text-emerald-700 hover:underline">

              Forgot your password?

            </a>

          </p>


          {/* REGISTER */}
          <div
            className="text-sm flex
                       justify-between items-center
                       mt-6">

            <p>
              Don't have an account?
            </p>

            <Link
              to="/register"
              className="border border-emerald-800
                         px-5 py-2 rounded-md
                         hover:bg-emerald-800
                         hover:text-white
                         transition">

              Register
            </Link>

          </div>

        </div>



        {/* RIGHT SIDE VIDEO */}
        <div
          className="hidden md:flex
                     w-1/2 relative
                     overflow-hidden
                     text-white
                     items-center justify-center
                     rounded-l-[120px]">

          {/* VIDEO */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0
                       w-full h-full
                       object-cover">

            <source
              src={loginVideo}
              type="video/mp4"
            />

          </video>


          {/* OVERLAY */}
          <div
            className="absolute inset-0
                       bg-black/40">
          </div>


          {/* CONTENT */}
          <div
            className="relative z-10
                       text-center px-6">

            <h2
              className="text-3xl font-bold
                         mb-4">

              Welcome Back!

            </h2>

            <p className="text-sm max-w-xs">

              Enter your personal details
              and start your journey with us

            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Login