import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

import {
  RiEyeLine,
  RiEyeOffLine
} from "react-icons/ri"

import loginVideo from "../../assets/videos/4.mp4"
import { loginUser } from "../../services/authService"

function Login() {

  const navigate = useNavigate()

  const [showPassword, setShowPassword] =
    useState(false)

  const [loading, setLoading] =
    useState(false)

  const [formData, setFormData] =
    useState({

      email: "",
      password: ""

    })


  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value

    })
  }


  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      setLoading(true)

      const response =
        await loginUser(formData)

      // save token
      localStorage.setItem(
        "token",
        response.token
      )

      localStorage.setItem(
        "user",
        JSON.stringify(
          response.user
        )
      )

      toast.success(
        response.message
      )

      // redirect by role
      setTimeout(() => {

        if (
          response.user.role
          === "farmer"
        ) {

          navigate(
            "/farmer-dashboard"
          )
        }

        else {

          navigate(
            "/buyer-dashboard"
          )
        }

      }, 1500)

    }

    catch (error) {

      toast.error(

        error.response?.data
          ?.message
        || "Login failed"

      )
    }

    finally {

      setLoading(false)

    }

  }


  return (

    <section
      className="min-h-screen
                 flex items-center
                 justify-center
                 bg-linear-to-r
                 from-gray-100
                 to-blue-200
                 px-4 py-6">

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
                     px-8 md:px-10
                     py-12">

          <h2
            className="text-center
                       text-4xl font-bold
                       text-emerald-800
                       mb-2">

            Login

          </h2>

          <p
            className="text-sm
                       text-center
                       text-gray-400
                       mb-6">

            Welcome back

          </p>


          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4">

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              required

              value={formData.email}
              onChange={handleChange}

              className="border p-3
                         rounded-xl
                         bg-amber-50
                         focus:outline-none
                         focus:ring-2
                         focus:ring-emerald-500"
            />


            {/* PASSWORD */}
            <div className="relative">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }

                name="password"
                placeholder="Password"
                required

                value={formData.password}
                onChange={handleChange}

                className="border p-3
                           rounded-xl
                           bg-amber-50
                           w-full
                           focus:outline-none
                           focus:ring-2
                           focus:ring-emerald-500"
              />

              <button
                type="button"

                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }

                className="absolute
                           right-3 top-1/2
                           -translate-y-1/2
                           text-gray-600">

                {
                  showPassword
                    ? <RiEyeOffLine size={22} />
                    : <RiEyeLine size={22} />
                }

              </button>

            </div>


            {/* BUTTON */}
            <button
              type="submit"

              disabled={loading}

              className="bg-emerald-800
                         text-white py-3
                         rounded-xl
                         hover:bg-emerald-700
                         transition">

              {
                loading
                  ? "Logging in..."
                  : "Login"
              }

            </button>

          </form>


          {/* REGISTER LINK */}
          <div
            className="text-sm flex
                       justify-between
                       items-center
                       mt-6">

            <p>
              Don't have an account?
            </p>

            <Link
              to="/register"

              className="border
                         border-emerald-800
                         px-5 py-2
                         rounded-md
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
                     items-center
                     justify-center
                     rounded-l-[120px]">

          <video
            autoPlay
            muted
            loop
            playsInline

            className="absolute
                       inset-0
                       w-full h-full
                       object-cover">

            <source
              src={loginVideo}
              type="video/mp4"
            />

          </video>

          <div
            className="absolute
                       inset-0
                       bg-black/40">
          </div>

          <div
            className="relative z-10
                       text-center
                       px-6">

            <h2
              className="text-3xl
                         font-bold
                         mb-4">

              Welcome Back!

            </h2>

            <p
              className="text-sm
                         max-w-xs">

              Login to continue your
              contract farming journey

            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Login