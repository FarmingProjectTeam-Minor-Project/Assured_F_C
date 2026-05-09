import {
  RiFileList3Line,
  RiUser3Line,
  RiCalendar2Line,
  RiMoneyRupeeCircleLine,
  RiCheckLine,
  RiCloseLine
} from "react-icons/ri"

function Contracts() {

  const contracts = [

    {
      id: 1,
      buyer: "AgroCorp Pvt Ltd",
      crop: "Wheat",
      amount: "₹45,000",
      date: "12 March 2026",
      status: "Active"
    },



    {
      id: 2,
      buyer: "FreshMart",
      crop: "Rice",
      amount: "₹30,000",
      date: "8 April 2026",
      status: "Pending"
    },



    {
      id: 3,
      buyer: "GreenField Traders",
      crop: "Maize",
      amount: "₹22,000",
      date: "20 February 2026",
      status: "Completed"
    }

  ]


  return (

    <div className="min-h-screen bg-gray-100 p-6 md:p-10">

      {/* HEADER */}
      <div className="mb-10">

        <h1
          className="text-3xl md:text-4xl
                     font-bold text-gray-800">

          Farmer Contracts

        </h1>

        <p className="text-gray-500 mt-2">

          Manage all your farming contracts.

        </p>

      </div>



      {/* CONTRACT CARDS */}
      <div className="grid gap-8">

        {
          contracts.map((contract) => (

            <div
              key={contract.id}

              className="bg-white rounded-2xl
                         shadow-lg p-6
                         hover:shadow-2xl
                         transition">

              {/* TOP */}
              <div
                className="flex flex-col md:flex-row
                           md:items-center
                           justify-between gap-4">

                {/* LEFT */}
                <div>

                  <div
                    className="flex items-center
                               gap-3 mb-3">

                    <RiFileList3Line
                      className="text-3xl
                                 text-green-600"
                    />

                    <h2
                      className="text-2xl
                                 font-bold text-gray-800">

                      {contract.crop} Contract

                    </h2>

                  </div>


                  <div
                    className="space-y-2
                               text-gray-600">

                    <p
                      className="flex items-center
                                 gap-2">

                      <RiUser3Line />

                      Buyer:
                      {contract.buyer}

                    </p>


                    <p
                      className="flex items-center
                                 gap-2">

                      <RiCalendar2Line />

                      Date:
                      {contract.date}

                    </p>


                    <p
                      className="flex items-center
                                 gap-2">

                      <RiMoneyRupeeCircleLine />

                      Amount:
                      {contract.amount}

                    </p>

                  </div>

                </div>



                {/* STATUS */}
                <div>

                  <span
                    className={`px-5 py-2 rounded-full
                                text-sm font-semibold

                      ${
                        contract.status === "Active"
                          ? "bg-green-100 text-green-700"

                          : contract.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"

                          : "bg-blue-100 text-blue-700"
                      }
                    `}>

                    {contract.status}

                  </span>

                </div>

              </div>



              {/* BUTTONS */}
              <div
                className="flex flex-col sm:flex-row
                           gap-4 mt-8">

                <button
                  className="flex-1 bg-green-600
                             text-white py-3
                             rounded-xl
                             hover:bg-green-700
                             transition
                             flex items-center
                             justify-center gap-2">

                  <RiCheckLine />

                  Accept

                </button>



                <button
                  className="flex-1 bg-red-500
                             text-white py-3
                             rounded-xl
                             hover:bg-red-600
                             transition
                             flex items-center
                             justify-center gap-2">

                  <RiCloseLine />

                  Reject

                </button>

              </div>

            </div>

          ))
        }

      </div>

    </div>
  )
}

export default Contracts