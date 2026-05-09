import {
  RiWallet3Line,
  RiMoneyRupeeCircleLine,
  RiBankCardLine,
  RiCalendar2Line,
  RiCheckDoubleLine,
  RiTimeLine
} from "react-icons/ri"

function Payments() {

  const payments = [

    {
      id: 1,
      buyer: "AgroCorp Pvt Ltd",
      amount: "₹12,000",
      date: "12 March 2026",
      status: "Paid"
    },



    {
      id: 2,
      buyer: "FreshMart",
      amount: "₹8,500",
      date: "20 March 2026",
      status: "Pending"
    },



    {
      id: 3,
      buyer: "GreenField Traders",
      amount: "₹15,000",
      date: "5 April 2026",
      status: "Paid"
    }

  ]


  return (

    <div className="min-h-screen bg-gray-100 p-6 md:p-10">

      {/* HEADER */}
      <div className="mb-10">

        <h1
          className="text-3xl md:text-4xl
                     font-bold text-gray-800">

          Payments & Earnings

        </h1>

        <p className="text-gray-500 mt-2">

          Track all your earnings and payment history.

        </p>

      </div>



      {/* TOP CARDS */}
      <div
        className="grid sm:grid-cols-2
                   xl:grid-cols-3 gap-6 mb-12">

        {/* TOTAL EARNINGS */}
        <div
          className="bg-white rounded-2xl
                     shadow-lg p-6">

          <div
            className="flex justify-between
                       items-center mb-4">

            <h2
              className="text-lg font-semibold
                         text-gray-700">

              Total Earnings

            </h2>

            <RiWallet3Line
              className="text-4xl
                         text-green-600"
            />

          </div>


          <h1
            className="text-4xl font-bold
                       text-green-700">

            ₹35,500

          </h1>

          <p className="text-gray-500 mt-2">

            Updated this month

          </p>

        </div>



        {/* PAID PAYMENTS */}
        <div
          className="bg-white rounded-2xl
                     shadow-lg p-6">

          <div
            className="flex justify-between
                       items-center mb-4">

            <h2
              className="text-lg font-semibold
                         text-gray-700">

              Paid Payments

            </h2>

            <RiCheckDoubleLine
              className="text-4xl
                         text-blue-600"
            />

          </div>


          <h1
            className="text-4xl font-bold
                       text-blue-700">

            12

          </h1>

          <p className="text-gray-500 mt-2">

            Successful transactions

          </p>

        </div>



        {/* PENDING */}
        <div
          className="bg-white rounded-2xl
                     shadow-lg p-6">

          <div
            className="flex justify-between
                       items-center mb-4">

            <h2
              className="text-lg font-semibold
                         text-gray-700">

              Pending Payments

            </h2>

            <RiTimeLine
              className="text-4xl
                         text-yellow-500"
            />

          </div>


          <h1
            className="text-4xl font-bold
                       text-yellow-600">

            3

          </h1>

          <p className="text-gray-500 mt-2">

            Waiting for clearance

          </p>

        </div>

      </div>



      {/* PAYMENT TABLE */}
      <div
        className="bg-white rounded-2xl
                   shadow-lg overflow-hidden">

        {/* TABLE HEADER */}
        <div
          className="bg-green-600
                     text-white p-6">

          <h2
            className="text-2xl font-bold">

            Payment History

          </h2>

        </div>



        {/* TABLE */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead
              className="bg-gray-100">

              <tr>

                <th
                  className="text-left p-5">

                  Buyer

                </th>

                <th
                  className="text-left p-5">

                  Amount

                </th>

                <th
                  className="text-left p-5">

                  Date

                </th>

                <th
                  className="text-left p-5">

                  Status

                </th>

              </tr>

            </thead>



            <tbody>

              {
                payments.map((payment) => (

                  <tr
                    key={payment.id}

                    className="border-b
                               hover:bg-gray-50
                               transition">

                    {/* BUYER */}
                    <td
                      className="p-5">

                      <div
                        className="flex items-center
                                   gap-3">

                        <RiBankCardLine
                          className="text-2xl
                                     text-green-600"
                        />

                        {payment.buyer}

                      </div>

                    </td>



                    {/* AMOUNT */}
                    <td
                      className="p-5
                                 font-semibold">

                      <div
                        className="flex items-center
                                   gap-2">

                        <RiMoneyRupeeCircleLine />

                        {payment.amount}

                      </div>

                    </td>



                    {/* DATE */}
                    <td
                      className="p-5">

                      <div
                        className="flex items-center
                                   gap-2">

                        <RiCalendar2Line />

                        {payment.date}

                      </div>

                    </td>



                    {/* STATUS */}
                    <td
                      className="p-5">

                      <span
                        className={`px-4 py-2
                                    rounded-full
                                    text-sm font-semibold

                          ${
                            payment.status === "Paid"

                              ? "bg-green-100 text-green-700"

                              : "bg-yellow-100 text-yellow-700"
                          }
                        `}>

                        {payment.status}

                      </span>

                    </td>

                  </tr>

                ))
              }

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default Payments