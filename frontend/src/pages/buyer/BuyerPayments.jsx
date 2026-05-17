import {
  useEffect,
  useState
} from "react"

import toast from "react-hot-toast"

import {
  RiMoneyRupeeCircleLine,
  RiShieldCheckLine
} from "react-icons/ri"

import {
  getNegotiations,
  makePayment
} from "../../services/negotiationService"


function BuyerPayments() {

  const user = JSON.parse(
    localStorage.getItem("user")
  )

  const [payments,
    setPayments] =
    useState([])

  const [loading,
    setLoading] =
    useState(true)

  const [processingId,
    setProcessingId] =
    useState(null)


  useEffect(() => {

    fetchPayments()

  }, [])


  const fetchPayments =
    async () => {

      try {

        const response =
          await getNegotiations()

        const acceptedDeals =

          response.negotiations
          .filter(

            (item) =>

              item.buyer_email
              === user?.email

              &&

              item.status
              === "Accepted"
          )

        setPayments(
          acceptedDeals
        )

      }

      catch (error) {

        console.log(error)

      }

      finally {

        setLoading(false)

      }
    }


  const handlePayment =
    async (
      negotiationId
    ) => {

      try {

        setProcessingId(
          negotiationId
        )

        await new Promise(
          resolve =>

            setTimeout(
              resolve,
              2000
            )
        )

        const response =

          await makePayment(
            negotiationId
          )

        toast.success(
          response.message
        )

        setPayments(

          payments.map(
            (payment) =>

              payment._id
              === negotiationId

                ? {

                    ...payment,

                    payment_status:
                    "Paid"
                  }

                : payment
          )
        )

      }

      catch {

        toast.error(
          "Payment Failed"
        )

      }

      finally {

        setProcessingId(
          null
        )
      }
    }


  if (loading) {

    return (

      <div
        className="min-h-screen
                   flex
                   items-center
                   justify-center">

        <h1
          className="text-2xl
                     font-bold">

          Loading Payments...

        </h1>

      </div>
    )
  }


  return (

    <div
      className="min-h-screen
                 bg-gray-100
                 p-6 md:p-10">

      <div
        className="max-w-7xl
                   mx-auto">

        {/* HEADER */}
        <div
          className="bg-linear-to-r
                     from-green-600
                     to-emerald-600
                     rounded-3xl
                     p-8 md:p-10
                     text-white
                     shadow-2xl
                     mb-10">

          <h1
            className="text-4xl
                       md:text-5xl
                       font-bold">

            Buyer Payments 💳

          </h1>

          <p
            className="mt-3
                       text-green-100
                       text-lg">

            Complete payments
            for accepted deals.

          </p>

        </div>


        {
          payments.length === 0 && (

            <div
              className="bg-white
                         rounded-3xl
                         shadow-xl
                         p-10
                         text-center">

              <h2
                className="text-2xl
                           font-bold
                           text-gray-700">

                No Accepted Deals Yet

              </h2>

            </div>
          )
        }


        <div
          className="grid
                     lg:grid-cols-2
                     gap-8">

          {
            payments.map(
              (payment) => (

              <div
                key={payment._id}

                className="bg-white
                           rounded-3xl
                           shadow-xl
                           p-8">

                <div
                  className="flex
                             justify-between
                             items-center
                             mb-6">

                  <div>

                    <h2
                      className="text-3xl
                                 font-bold
                                 text-gray-800">

                      {
                        payment.crop_name
                      }

                    </h2>

                    <p
                      className="text-gray-500">

                      Farmer:
                      {" "}
                      {
                        payment.farmer_name
                      }

                    </p>

                  </div>

                  <RiMoneyRupeeCircleLine
                    className="text-5xl
                               text-green-600"
                  />

                </div>


                <div
                  className="space-y-4
                             text-gray-600">

                  <div
                    className="flex
                               justify-between">

                    <span>
                      Quantity
                    </span>

                    <span
                      className="font-semibold">

                      {
                        payment.quantity
                      }

                    </span>

                  </div>


                  <div
                    className="flex
                               justify-between">

                    <span>
                      Offer Price
                    </span>

                    <span
                      className="font-semibold">

                      ₹
                      {
                        payment.offer_price
                      }

                    </span>

                  </div>


                  <div
                    className="flex
                               justify-between">

                    <span>
                      Status
                    </span>

                    <span
                      className="text-green-600
                                 font-semibold">

                      Accepted
                    </span>

                  </div>

                </div>


                <div
                  className="mt-8">

                  {
                    payment.payment_status
                    === "Paid"

                    ? (

                      <div
                        className="bg-green-100
                                   text-green-700
                                   py-4
                                   rounded-2xl
                                   text-center
                                   font-bold">

                        ✅ Payment Completed

                      </div>

                    )

                    : (

                      <button

                        onClick={() =>
                          handlePayment(
                            payment._id
                          )
                        }

                        disabled={
                          processingId
                          === payment._id
                        }

                        className="w-full
                                   bg-green-600
                                   text-white
                                   py-4
                                   rounded-2xl
                                   font-bold
                                   hover:bg-green-700
                                   transition">

                        {
                          processingId
                          === payment._id

                          ? "Processing Payment..."

                          : `Pay ₹${payment.offer_price}`
                        }

                      </button>

                    )
                  }

                </div>

              </div>
            ))
          }

        </div>


        {/* SECURITY */}
        <div
          className="mt-10
                     bg-green-50
                     border
                     border-green-200
                     rounded-3xl
                     p-8
                     text-center">

          <RiShieldCheckLine
            className="text-5xl
                       text-green-600
                       mx-auto
                       mb-4"
          />

          <h2
            className="text-2xl
                       font-bold
                       text-green-800">

            Secure Simulated Payment

          </h2>

          <p
            className="text-green-700
                       mt-3">

            Payment status is
            securely saved
            in MongoDB.

          </p>

        </div>

      </div>

    </div>
  )
}

export default BuyerPayments