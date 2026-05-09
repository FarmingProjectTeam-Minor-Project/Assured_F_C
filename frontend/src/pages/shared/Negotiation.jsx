import { useState } from "react"

import {
  RiUser3Line,
  RiMapPinLine,
  RiLeafLine,
  RiMoneyRupeeCircleLine,
  RiSendPlaneFill,
  RiCheckLine,
  RiCloseLine,
  RiTimeLine
} from "react-icons/ri"

function Negotiation() {

  const [message, setMessage] = useState("")

  const [messages, setMessages] = useState([

    {
      sender: "buyer",
      text: "I want 500 KG at ₹22/kg.",
      time: "10:00 AM"
    },



    {
      sender: "farmer",
      text: "I can offer at ₹24/kg.",
      time: "10:05 AM"
    },



    {
      sender: "buyer",
      text: "Can we finalize at ₹23/kg?",
      time: "10:07 AM"
    }

  ])



  const handleSend = () => {

    if (!message.trim()) return

    setMessages([

      ...messages,

      {
        sender: "buyer",
        text: message,
        time: "Now"
      }

    ])

    setMessage("")
  }


  return (

    <div className="min-h-screen bg-gray-100 p-4 md:p-8">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div
          className="bg-linear-to-r
                     from-green-600
                     to-emerald-600
                     rounded-3xl
                     p-8 md:p-10
                     text-white
                     shadow-2xl mb-8">

          <h1
            className="text-4xl md:text-5xl
                       font-bold">

            Crop Negotiation 🤝

          </h1>

          <p
            className="mt-3 text-green-100
                       text-lg">

            Negotiate pricing and finalize the farming deal.

          </p>

        </div>



        <div
          className="grid lg:grid-cols-3
                     gap-8">

          {/* LEFT PANEL */}
          <div
            className="lg:col-span-1
                       space-y-8">

            {/* CROP CARD */}
            <div
              className="bg-white rounded-3xl
                         shadow-xl p-8">

              {/* IMAGE */}
              <div
                className="w-full h-52
                           rounded-3xl
                           bg-linear-to-br
                           from-green-400
                           to-emerald-600
                           flex items-center
                           justify-center
                           text-7xl mb-6">

                🌾

              </div>



              {/* INFO */}
              <h2
                className="text-3xl font-bold
                           text-gray-800 mb-6">

                Organic Wheat

              </h2>



              <div
                className="space-y-5 text-gray-600">

                <div
                  className="flex items-center
                             justify-between">

                  <span
                    className="flex items-center gap-2">

                    <RiUser3Line />

                    Farmer

                  </span>

                  <span
                    className="font-semibold">

                    Rajesh Farms

                  </span>

                </div>



                <div
                  className="flex items-center
                             justify-between">

                  <span
                    className="flex items-center gap-2">

                    <RiMapPinLine />

                    Location

                  </span>

                  <span
                    className="font-semibold">

                    Bhopal, MP

                  </span>

                </div>



                <div
                  className="flex items-center
                             justify-between">

                  <span
                    className="flex items-center gap-2">

                    <RiLeafLine />

                    Quality

                  </span>

                  <span
                    className="font-semibold">

                    Grade A

                  </span>

                </div>



                <div
                  className="flex items-center
                             justify-between">

                  <span
                    className="flex items-center gap-2">

                    <RiMoneyRupeeCircleLine />

                    Price

                  </span>

                  <span
                    className="font-bold
                               text-green-600
                               text-lg">

                    ₹24 / KG

                  </span>

                </div>

              </div>

            </div>



            {/* DEAL SUMMARY */}
            <div
              className="bg-white rounded-3xl
                         shadow-xl p-8">

              <h2
                className="text-2xl font-bold
                           mb-6">

                Deal Summary

              </h2>



              <div
                className="space-y-5">

                <div
                  className="flex justify-between">

                  <span className="text-gray-500">
                    Quantity
                  </span>

                  <span className="font-semibold">
                    500 KG
                  </span>

                </div>



                <div
                  className="flex justify-between">

                  <span className="text-gray-500">
                    Delivery
                  </span>

                  <span className="font-semibold">
                    3 Days
                  </span>

                </div>



                <div
                  className="flex justify-between">

                  <span className="text-gray-500">
                    Current Offer
                  </span>

                  <span
                    className="font-bold
                               text-green-600">

                    ₹23 / KG

                  </span>

                </div>



                <div
                  className="flex justify-between">

                  <span className="text-gray-500">
                    Estimated Total
                  </span>

                  <span
                    className="font-bold
                               text-green-600">

                    ₹11,500

                  </span>

                </div>

              </div>

            </div>

          </div>



          {/* RIGHT PANEL */}
          <div
            className="lg:col-span-2
                       bg-white rounded-3xl
                       shadow-xl
                       flex flex-col
                       overflow-hidden">

            {/* TOP BAR */}
            <div
              className="bg-green-600
                         text-white
                         p-6 flex
                         justify-between
                         items-center">

              <div>

                <h2
                  className="text-2xl font-bold">

                  Negotiation Chat

                </h2>

                <p
                  className="text-green-100
                             mt-1">

                  Discuss and finalize terms.

                </p>

              </div>



              <div
                className="flex items-center
                           gap-2 text-sm">

                <RiTimeLine />

                Active

              </div>

            </div>



            {/* CHAT AREA */}
            <div
              className="flex-1
                         p-6 space-y-5
                         overflow-y-auto
                         bg-gray-50
                         min-h-125">

              {
                messages.map((msg, index) => (

                  <div
                    key={index}

                    className={`flex

                      ${
                        msg.sender === "buyer"

                          ? "justify-end"

                          : "justify-start"
                      }
                    `}>

                    <div
                      className={`max-w-[80%]
                                  rounded-3xl
                                  px-5 py-4
                                  shadow-md

                        ${
                          msg.sender === "buyer"

                            ? "bg-green-600 text-white"

                            : "bg-white text-gray-800"
                        }
                      `}>

                      <p>
                        {msg.text}
                      </p>

                      <span
                        className={`text-xs mt-2
                                    block

                          ${
                            msg.sender === "buyer"

                              ? "text-green-100"

                              : "text-gray-400"
                          }
                        `}>

                        {msg.time}

                      </span>

                    </div>

                  </div>

                ))
              }

            </div>



            {/* INPUT AREA */}
            <div
              className="p-5 border-t
                         bg-white">

              <div
                className="flex gap-4">

                <input
                  type="text"

                  value={message}

                  onChange={(e) =>
                    setMessage(e.target.value)
                  }

                  placeholder="Type your offer or message..."

                  className="flex-1
                             border border-gray-300
                             rounded-2xl
                             px-5 py-4
                             focus:outline-none
                             focus:ring-2
                             focus:ring-green-500"
                />



                <button

                  onClick={handleSend}

                  className="bg-green-600
                             text-white
                             px-6 rounded-2xl
                             hover:bg-green-700
                             transition
                             flex items-center
                             justify-center">

                  <RiSendPlaneFill
                    className="text-2xl"
                  />

                </button>

              </div>



              {/* ACTION BUTTONS */}
              <div
                className="grid sm:grid-cols-2
                           gap-4 mt-6">

                <button
                  className="bg-green-600
                             text-white
                             py-4 rounded-2xl
                             hover:bg-green-700
                             transition
                             flex items-center
                             justify-center gap-2">

                  <RiCheckLine />

                  Accept Deal

                </button>



                <button
                  className="bg-red-500
                             text-white
                             py-4 rounded-2xl
                             hover:bg-red-600
                             transition
                             flex items-center
                             justify-center gap-2">

                  <RiCloseLine />

                  Reject Deal

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Negotiation