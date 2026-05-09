import { useState } from "react"

import {
  RiBankCardLine,
  RiMoneyRupeeCircleLine,
  RiShieldCheckLine,
  RiCheckLine
} from "react-icons/ri"

function BuyerPayments() {

  const [selectedMethod, setSelectedMethod] = useState("")
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [processing, setProcessing] = useState(false)

  const paymentMethods = [

    {
      id: "card",
      title: "Credit / Debit Card",
      subtitle: "Visa, MasterCard, RuPay",
      icon: <RiBankCardLine />
    },



    {
      id: "upi",
      title: "UPI",
      subtitle: "Google Pay, PhonePe, Paytm",
      icon: <RiMoneyRupeeCircleLine />
    },



    {
      id: "netbanking",
      title: "Net Banking",
      subtitle: "All major banks",
      icon: <RiShieldCheckLine />
    }

  ]


  const handlePayment = () => {

    setProcessing(true)

    setTimeout(() => {

      alert(
        "✅ Payment Successful!\n\nOrder confirmed successfully."
      )

      setProcessing(false)

    }, 2000)
  }


  return (

    <div className="min-h-screen bg-gray-100 p-6 md:p-10">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div
          className="bg-linear-to-r
                     from-green-600
                     to-emerald-600
                     rounded-3xl
                     p-8 md:p-10
                     text-white
                     shadow-2xl mb-10">

          <h1
            className="text-4xl md:text-5xl
                       font-bold">

            Complete Payment 💳

          </h1>

          <p
            className="mt-3 text-green-100
                       text-lg">

            Securely pay for your crop purchase.

          </p>

        </div>



        {/* ORDER SUMMARY */}
        <div
          className="bg-white rounded-3xl
                     shadow-xl p-8 mb-10">

          <h2
            className="text-3xl font-bold
                       text-gray-800 mb-8">

            Order Summary

          </h2>



          <div
            className="grid md:grid-cols-2
                       gap-10">

            {/* LEFT */}
            <div>

              <h3
                className="text-xl font-bold
                           mb-5">

                Crop Details

              </h3>

              <div
                className="space-y-4 text-gray-600">

                <div className="flex justify-between">
                  <span>Crop</span>
                  <span className="font-semibold">
                    Organic Rice
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Farmer</span>
                  <span className="font-semibold">
                    Rajesh Farms
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Quantity</span>
                  <span className="font-semibold">
                    500 KG
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="font-semibold">
                    Within 3 Days
                  </span>
                </div>

              </div>

            </div>



            {/* RIGHT */}
            <div>

              <h3
                className="text-xl font-bold
                           mb-5">

                Payment Summary

              </h3>

              <div
                className="space-y-4 text-gray-600">

                <div className="flex justify-between">
                  <span>Negotiated Price</span>
                  <span>₹25/KG</span>
                </div>

                <div className="flex justify-between">
                  <span>Total Amount</span>

                  <span
                    className="font-bold
                               text-green-600">

                    ₹12,500

                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Platform Fee</span>
                  <span>₹250</span>
                </div>

                <div
                  className="flex justify-between
                             border-t pt-4
                             text-xl font-bold">

                  <span>Grand Total</span>

                  <span
                    className="text-green-600">

                    ₹12,750

                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>



        {/* PAYMENT METHODS */}
        <div className="mb-10">

          <h2
            className="text-3xl font-bold
                       text-gray-800 mb-8">

            Choose Payment Method

          </h2>



          <div
            className="grid md:grid-cols-3
                       gap-6">

            {
              paymentMethods.map((method) => (

                <button
                  key={method.id}

                  onClick={() =>
                    setSelectedMethod(method.id)
                  }

                  className={`bg-white rounded-3xl
                              p-8 shadow-xl
                              border-2 transition

                    ${
                      selectedMethod === method.id

                        ? "border-green-500"

                        : "border-transparent hover:border-green-300"
                    }
                  `}>

                  <div
                    className="text-5xl
                               text-green-600 mb-5">

                    {method.icon}

                  </div>

                  <h3
                    className="text-2xl font-bold
                               mb-2">

                    {method.title}

                  </h3>

                  <p
                    className="text-gray-500">

                    {method.subtitle}

                  </p>

                </button>

              ))
            }

          </div>

        </div>



        {/* PAYMENT FORM */}
        {
          selectedMethod && (

            <div
              className="bg-white rounded-3xl
                         shadow-xl p-8 mb-10">

              <h2
                className="text-3xl font-bold
                           text-gray-800 mb-8">

                Enter Payment Details

              </h2>



              {/* CARD */}
              {
                selectedMethod === "card" && (

                  <div
                    className="grid md:grid-cols-2
                               gap-6">

                    <input
                      type="text"
                      placeholder="Card Number"

                      className="border border-gray-300
                                 rounded-2xl p-4
                                 focus:outline-none
                                 focus:ring-2
                                 focus:ring-green-500"
                    />



                    <input
                      type="text"
                      placeholder="Expiry Date"

                      className="border border-gray-300
                                 rounded-2xl p-4
                                 focus:outline-none
                                 focus:ring-2
                                 focus:ring-green-500"
                    />



                    <input
                      type="text"
                      placeholder="CVV"

                      className="border border-gray-300
                                 rounded-2xl p-4
                                 focus:outline-none
                                 focus:ring-2
                                 focus:ring-green-500"
                    />



                    <input
                      type="text"
                      placeholder="Card Holder Name"

                      className="border border-gray-300
                                 rounded-2xl p-4
                                 focus:outline-none
                                 focus:ring-2
                                 focus:ring-green-500"
                    />

                  </div>

                )
              }



              {/* UPI */}
              {
                selectedMethod === "upi" && (

                  <input
                    type="text"
                    placeholder="Enter UPI ID"

                    className="w-full border
                               border-gray-300
                               rounded-2xl p-4
                               focus:outline-none
                               focus:ring-2
                               focus:ring-green-500"
                  />

                )
              }



              {/* NET BANKING */}
              {
                selectedMethod === "netbanking" && (

                  <select
                    className="w-full border
                               border-gray-300
                               rounded-2xl p-4
                               focus:outline-none
                               focus:ring-2
                               focus:ring-green-500">

                    <option>
                      Select Bank
                    </option>

                    <option>
                      HDFC Bank
                    </option>

                    <option>
                      SBI
                    </option>

                    <option>
                      ICICI Bank
                    </option>

                    <option>
                      Axis Bank
                    </option>

                  </select>

                )
              }

            </div>

          )
        }



        {/* TERMS */}
        <div
          className="flex items-center
                     gap-3 mb-10">

          <input
            type="checkbox"

            checked={termsAccepted}

            onChange={() =>
              setTermsAccepted(!termsAccepted)
            }

            className="w-5 h-5"
          />

          <p className="text-gray-600">

            I agree to the
            {" "}
            <span className="text-green-600">
              Terms & Conditions
            </span>

          </p>

        </div>



        {/* PAY BUTTON */}
        <button

          disabled={
            !selectedMethod ||
            !termsAccepted ||
            processing
          }

          onClick={handlePayment}

          className={`w-full py-5
                      rounded-3xl
                      text-xl font-bold
                      transition

            ${
              selectedMethod && termsAccepted

                ? "bg-green-600 text-white hover:bg-green-700"

                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }
          `}>

          {
            processing

              ? "Processing Payment..."

              : "Pay ₹12,750 Now"
          }

        </button>



        {/* SECURITY */}
        <div
          className="mt-10
                     bg-green-50
                     border border-green-200
                     rounded-3xl
                     p-8 text-center">

          <div
            className="text-5xl mb-4">

            🛡️

          </div>

          <h2
            className="text-2xl font-bold
                       text-green-800">

            Secure Payment

          </h2>

          <p
            className="text-green-700
                       mt-3">

            Your payment is protected with
            SSL encryption and escrow security.

          </p>

        </div>

      </div>

    </div>
  )
}

export default BuyerPayments