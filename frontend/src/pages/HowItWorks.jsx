import { useState } from "react"

import {
  RiPlantLine,
  RiShoppingBagLine,
  RiUserAddLine,
  RiSeedlingLine,
  RiChat3Line,
  RiHandCoinLine,
  RiTruckLine,
  RiSearchLine,
  RiFileListLine,
  RiShakeHandsFill,
  RiSecurePaymentLine,
  RiLinksLine,
  RiShieldCheckLine,
  RiFlashlightLine
} from "react-icons/ri"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import heroVideo from "../assets/videos/3.mp4"

function HowItWorks() {

  const [activeRole, setActiveRole] = useState("")

  const farmerSteps = [
    {
      icon: <RiUserAddLine />,
      text: "Create Account"
    },

    {
      icon: <RiSeedlingLine />,
      text: "List Crops"
    },

    {
      icon: <RiChat3Line />,
      text: "Get Enquiries"
    },

    {
      icon: <RiHandCoinLine />,
      text: "Negotiate"
    },

    {
      icon: <RiTruckLine />,
      text: "Deliver"
    }
  ]


  const buyerSteps = [
    {
      icon: <RiUserAddLine />,
      text: "Register"
    },

    {
      icon: <RiSearchLine />,
      text: "Search Crops"
    },

    {
      icon: <RiFileListLine />,
      text: "Compare"
    },

    {
      icon: <RiShakeHandsFill />,
      text: "Deal"
    },

    {
      icon: <RiSecurePaymentLine />,
      text: "Pay Securely"
    }
  ]


  return (

    <>
    
      <Navbar />



      {/* HERO SECTION */}
      <section
        className="relative h-[60vh] md:h-[80vh]
                   flex items-center justify-center
                   overflow-hidden">

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
            src={heroVideo}
            type="video/mp4"
          />

        </video>


        {/* OVERLAY */}
        <div
          className="absolute inset-0
                     bg-black/60">
        </div>


        {/* CONTENT */}
        <div
          className="relative z-10
                     text-center px-6
                     text-white max-w-3xl">

          <h1
            className="text-4xl md:text-5xl
                       font-bold mb-4">

            Connect Farmers with Buyers

          </h1>

          <p
            className="text-lg text-gray-200
                       mb-6">

            We bridge the gap between farmers and buyers,
            ensuring fair pricing and secure trading.

          </p>


          {/* BUTTONS */}
          <div className="flex justify-center gap-4">

            <button
              className="px-6 py-3
                         bg-green-600
                         rounded-lg
                         hover:bg-green-700
                         transition">

              Get Started

            </button>


            <button
              className="px-6 py-3
                         border border-white
                         rounded-lg
                         hover:bg-white
                         hover:text-black
                         transition">

              Contact Us

            </button>

          </div>

        </div>

      </section>



      {/* SELECT ROLE */}
      <section className="py-20 bg-gray-200">

        <div className="max-w-6xl mx-auto px-6">

          <h2
            className="text-3xl font-bold
                       text-center mb-12">

            Choose Your Role

          </h2>


          <div
            className="grid md:grid-cols-2
                       gap-8">

            {/* FARMER */}
            <div
              onClick={() => setActiveRole("farmer")}
              className="bg-white p-8
                         rounded-xl shadow
                         cursor-pointer
                         hover:shadow-xl
                         transition">

              <RiPlantLine
                className="text-4xl text-green-600" />

              <h3
                className="text-2xl font-semibold
                           mt-4">

                For Farmers

              </h3>

              <p className="mt-2 text-gray-600">

                Sell crops directly and
                get fair pricing.

              </p>

            </div>



            {/* BUYER */}
            <div
              onClick={() => setActiveRole("buyer")}
              className="bg-white p-8
                         rounded-xl shadow
                         cursor-pointer
                         hover:shadow-xl
                         transition">

              <RiShoppingBagLine
                className="text-4xl text-green-600" />

              <h3
                className="text-2xl font-semibold
                           mt-4">

                For Buyers

              </h3>

              <p className="mt-2 text-gray-600">

                Buy quality crops directly
                from farmers.

              </p>

            </div>

          </div>

        </div>

      </section>



      {/* FARMER PROCESS */}
      {
        activeRole === "farmer" && (

          <section className="py-20 bg-green-50">

            <div className="max-w-6xl mx-auto px-6">

              <h2
                className="text-3xl font-bold
                           text-center mb-12
                           text-green-700">

                Farmer Process

              </h2>


              <div
                className="grid md:grid-cols-5
                           gap-6 text-center">

                {
                  farmerSteps.map((step, index) => (

                    <div
                      key={index}
                      className="bg-white p-6
                                 rounded-xl shadow
                                 hover:shadow-xl
                                 transition">

                      <div
                        className="text-5xl
                                   text-green-600
                                   flex justify-center">

                        {step.icon}

                      </div>

                      <p
                        className="mt-4
                                   font-semibold">

                        {step.text}

                      </p>

                    </div>

                  ))
                }

              </div>

            </div>

          </section>

        )
      }



      {/* BUYER PROCESS */}
      {
        activeRole === "buyer" && (

          <section className="py-20 bg-emerald-50">

            <div className="max-w-6xl mx-auto px-6">

              <h2
                className="text-3xl font-bold
                           text-center mb-12
                           text-emerald-700">

                Buyer Process

              </h2>


              <div
                className="grid md:grid-cols-5
                           gap-6 text-center">

                {
                  buyerSteps.map((step, index) => (

                    <div
                      key={index}
                      className="bg-white p-6
                                 rounded-xl shadow
                                 hover:shadow-xl
                                 transition">

                      <div
                        className="text-5xl
                                   text-emerald-600
                                   flex justify-center">

                        {step.icon}

                      </div>

                      <p
                        className="mt-4
                                   font-semibold">

                        {step.text}

                      </p>

                    </div>

                  ))
                }

              </div>

            </div>

          </section>

        )
      }



      {/* BENEFITS */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2
            className="text-3xl font-bold
                       text-center mb-12">

            Platform Benefits

          </h2>


          <div
            className="grid md:grid-cols-3
                       gap-8">


            {/* CARD 1 */}
            <div
              className="bg-gray-100
                         p-8 rounded-xl
                         text-center shadow">

              <RiLinksLine
                className="text-5xl
                           text-green-600
                           mx-auto" />

              <h4
                className="mt-4 text-xl
                           font-semibold">

                Direct Trading

              </h4>

              <p className="mt-2 text-gray-600">

                No middlemen, more profit.

              </p>

            </div>



            {/* CARD 2 */}
            <div
              className="bg-gray-100
                         p-8 rounded-xl
                         text-center shadow">

              <RiShieldCheckLine
                className="text-5xl
                           text-blue-600
                           mx-auto" />

              <h4
                className="mt-4 text-xl
                           font-semibold">

                Secure Deals

              </h4>

              <p className="mt-2 text-gray-600">

                Verified contracts.

              </p>

            </div>



            {/* CARD 3 */}
            <div
              className="bg-gray-100
                         p-8 rounded-xl
                         text-center shadow">

              <RiFlashlightLine
                className="text-5xl
                           text-yellow-500
                           mx-auto" />

              <h4
                className="mt-4 text-xl
                           font-semibold">

                Fast Payments

              </h4>

              <p className="mt-2 text-gray-600">

                Quick transactions.

              </p>

            </div>

          </div>

        </div>

      </section>



      



      <Footer />

    </>
  )
}

export default HowItWorks