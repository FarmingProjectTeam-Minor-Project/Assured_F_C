import {
  RiFileList3Line,
  RiUser3Line,
  RiMapPinLine,
  RiMoneyRupeeCircleLine,
  RiTruckLine,
  RiCheckLine,
  RiCloseLine
} from "react-icons/ri"

function BuyerContracts() {

  const contracts = [

    {
      id: 1,

      crop: "Organic Basmati Rice",

      farmer: "Rajesh Farms",

      location: "Bhopal, MP",

      quantity: "120 Quintal",

      amount: "₹45,000",

      delivery: "2 Days",

      status: "Active"
    },



    {
      id: 2,

      crop: "Premium Wheat",

      farmer: "Sita Agri",

      location: "Indore, MP",

      quantity: "90 Quintal",

      amount: "₹30,000",

      delivery: "3 Days",

      status: "Pending"
    },



    {
      id: 3,

      crop: "Sweet Corn",

      farmer: "Green Valley",

      location: "Sehore, MP",

      quantity: "60 Quintal",

      amount: "₹22,000",

      delivery: "1 Day",

      status: "Completed"
    }

  ]


  return (

    <div className="min-h-screen bg-gray-100 p-6 md:p-10">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-10">

          <h1
            className="text-3xl md:text-4xl
                       font-bold text-gray-800">

            Buyer Contracts

          </h1>

          <p className="text-gray-500 mt-2">

            Manage all your farming agreements and deals.

          </p>

        </div>



        {/* CONTRACTS */}
        <div className="grid gap-8">

          {
            contracts.map((contract) => (

              <div
                key={contract.id}

                className="bg-white rounded-3xl
                           shadow-xl p-8
                           hover:-translate-y-1
                           hover:shadow-2xl
                           transition">

                {/* TOP */}
                <div
                  className="flex flex-col lg:flex-row
                             justify-between gap-6">

                  {/* LEFT */}
                  <div>

                    <div
                      className="flex items-center
                                 gap-4 mb-6">

                      <div
                        className="w-16 h-16
                                   rounded-2xl
                                   bg-blue-100
                                   flex items-center
                                   justify-center">

                        <RiFileList3Line
                          className="text-3xl
                                     text-blue-600"
                        />

                      </div>



                      <div>

                        <h2
                          className="text-2xl
                                     font-bold
                                     text-gray-800">

                          {contract.crop}

                        </h2>

                        <p
                          className="text-gray-500">

                          Contract Farming Deal

                        </p>

                      </div>

                    </div>



                    {/* DETAILS */}
                    <div
                      className="grid sm:grid-cols-2
                                 gap-5 text-gray-600">

                      <div
                        className="flex items-center gap-3">

                        <RiUser3Line />

                        <span>
                          {contract.farmer}
                        </span>

                      </div>



                      <div
                        className="flex items-center gap-3">

                        <RiMapPinLine />

                        <span>
                          {contract.location}
                        </span>

                      </div>



                      <div
                        className="flex items-center gap-3">

                        <RiTruckLine />

                        <span>
                          {contract.delivery}
                        </span>

                      </div>



                      <div
                        className="flex items-center gap-3">

                        <RiMoneyRupeeCircleLine />

                        <span
                          className="font-bold
                                     text-green-600">

                          {contract.amount}

                        </span>

                      </div>

                    </div>

                  </div>



                  {/* STATUS */}
                  <div>

                    <span
                      className={`px-5 py-3
                                  rounded-full
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



                {/* BOTTOM */}
                <div
                  className="flex flex-col sm:flex-row
                             gap-4 mt-8">

                  <button
                    className="flex-1 bg-green-600
                               text-white py-4
                               rounded-2xl
                               hover:bg-green-700
                               transition
                               flex items-center
                               justify-center gap-2">

                    <RiCheckLine />

                    Accept Deal

                  </button>



                  <button
                    className="flex-1 bg-red-500
                               text-white py-4
                               rounded-2xl
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

    </div>
  )
}

export default BuyerContracts