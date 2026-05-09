import {
  RiShoppingBag3Line,
  RiFileList3Line,
  RiWallet3Line,
  RiTruckLine,
  RiLeafLine,
  RiUser3Line,
  RiMoneyRupeeCircleLine
} from "react-icons/ri"

function BuyerDashboard() {

  const stats = [

    {
      title: "Orders",
      value: "24",
      subtitle: "Total Purchases",
      icon: <RiShoppingBag3Line />
    },



    {
      title: "Contracts",
      value: "12",
      subtitle: "Active Deals",
      icon: <RiFileList3Line />
    },



    {
      title: "Payments",
      value: "₹1.2L",
      subtitle: "Total Spending",
      icon: <RiWallet3Line />
    },



    {
      title: "Deliveries",
      value: "18",
      subtitle: "Completed Orders",
      icon: <RiTruckLine />
    }

  ]



  const recentOrders = [

    {
      crop: "Wheat",
      farmer: "Rahul Verma",
      quantity: "120 Quintal",
      price: "₹45,000",
      status: "Delivered"
    },



    {
      crop: "Rice",
      farmer: "Amit Patel",
      quantity: "90 Quintal",
      price: "₹30,000",
      status: "Pending"
    },



    {
      crop: "Maize",
      farmer: "Suresh Yadav",
      quantity: "60 Quintal",
      price: "₹22,000",
      status: "Processing"
    }

  ]


  return (

    <div
      className="min-h-screen
                 bg-gray-100
                 p-4 sm:p-6 md:p-10
                 overflow-x-hidden">

      <div className="max-w-7xl mx-auto w-full">

        {/* HEADER */}
        <div
          className="flex flex-col md:flex-row
                     justify-between
                     md:items-center
                     mb-10 gap-4">

          <div className="w-full">

            <h1
              className="text-3xl md:text-4xl
                         font-bold text-gray-800
                         wrap-break-words">

              Buyer Dashboard

            </h1>

            <p className="text-gray-500 mt-2">

              Manage purchases, contracts, and deliveries.

            </p>

          </div>



          <button
            className="bg-blue-600
                       w-full sm:w-auto
                       text-white
                       px-6 py-3
                       rounded-xl
                       hover:bg-blue-700
                       transition
                       shrink-0">

            Browse Crops

          </button>

        </div>



        {/* STATS */}
        <div
          className="grid grid-cols-1
                     sm:grid-cols-2
                     xl:grid-cols-4
                     gap-6 mb-12">

          {
            stats.map((item, index) => (

              <div
                key={index}

                className="bg-white p-6
                           rounded-2xl
                           shadow-lg
                           hover:-translate-y-1
                           hover:shadow-2xl
                           transition
                           w-full">

                <div
                  className="flex justify-between
                             items-center mb-5">

                  <h3
                    className="font-semibold
                               text-gray-700">

                    {item.title}

                  </h3>

                  <div
                    className="text-3xl text-blue-600">

                    {item.icon}

                  </div>

                </div>



                <h2
                  className="text-3xl font-bold
                             text-gray-800">

                  {item.value}

                </h2>

                <p
                  className="text-gray-500 mt-1">

                  {item.subtitle}

                </p>

              </div>

            ))
          }

        </div>



        {/* QUICK ACTIONS */}
        <div
          className="grid grid-cols-1
                     md:grid-cols-3
                     gap-6 mb-12">

          <div
            className="bg-white p-6
                       rounded-2xl shadow-lg
                       hover:-translate-y-1
                       transition">

            <RiLeafLine
              className="text-5xl
                         text-green-600 mb-4"
            />

            <h2
              className="text-2xl font-bold
                         mb-2">

              Browse Crops

            </h2>

            <p className="text-gray-500">

              Explore available crops from farmers.

            </p>

          </div>



          <div
            className="bg-white p-6
                       rounded-2xl shadow-lg
                       hover:-translate-y-1
                       transition">

            <RiFileList3Line
              className="text-5xl
                         text-blue-600 mb-4"
            />

            <h2
              className="text-2xl font-bold
                         mb-2">

              Contracts

            </h2>

            <p className="text-gray-500">

              Manage active farming agreements.

            </p>

          </div>



          <div
            className="bg-white p-6
                       rounded-2xl shadow-lg
                       hover:-translate-y-1
                       transition">

            <RiWallet3Line
              className="text-5xl
                         text-yellow-500 mb-4"
            />

            <h2
              className="text-2xl font-bold
                         mb-2">

              Payments

            </h2>

            <p className="text-gray-500">

              Track all transactions and invoices.

            </p>

          </div>

        </div>



        {/* RECENT ORDERS */}
        <div
          className="bg-white rounded-2xl
                     shadow-lg overflow-hidden
                     w-full">

          {/* HEADER */}
          <div
            className="bg-blue-600
                       text-white p-6">

            <h2
              className="text-2xl font-bold">

              Recent Orders

            </h2>

          </div>



          {/* MOBILE CARDS */}
          <div className="block md:hidden">

            {
              recentOrders.map((order, index) => (

                <div
                  key={index}

                  className="border-b p-5
                             space-y-4">

                  <div
                    className="flex justify-between">

                    <span className="font-semibold">
                      Crop
                    </span>

                    <span>
                      {order.crop}
                    </span>

                  </div>



                  <div
                    className="flex justify-between gap-3">

                    <span className="font-semibold">
                      Farmer
                    </span>

                    <span className="text-right">
                      {order.farmer}
                    </span>

                  </div>



                  <div
                    className="flex justify-between">

                    <span className="font-semibold">
                      Quantity
                    </span>

                    <span>
                      {order.quantity}
                    </span>

                  </div>



                  <div
                    className="flex justify-between">

                    <span className="font-semibold">
                      Price
                    </span>

                    <span className="font-bold text-green-600">
                      {order.price}
                    </span>

                  </div>



                  <div
                    className="flex justify-between items-center">

                    <span className="font-semibold">
                      Status
                    </span>

                    <span
                      className={`px-4 py-2
                                  rounded-full
                                  text-sm font-semibold

                        ${
                          order.status === "Delivered"

                            ? "bg-green-100 text-green-700"

                            : order.status === "Pending"

                            ? "bg-yellow-100 text-yellow-700"

                            : "bg-blue-100 text-blue-700"
                        }
                      `}>

                      {order.status}

                    </span>

                  </div>

                </div>

              ))
            }

          </div>



          {/* DESKTOP TABLE */}
          <div className="hidden md:block overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="text-left p-5">
                    Crop
                  </th>

                  <th className="text-left p-5">
                    Farmer
                  </th>

                  <th className="text-left p-5">
                    Quantity
                  </th>

                  <th className="text-left p-5">
                    Price
                  </th>

                  <th className="text-left p-5">
                    Status
                  </th>

                </tr>

              </thead>



              <tbody>

                {
                  recentOrders.map((order, index) => (

                    <tr
                      key={index}

                      className="border-b
                                 hover:bg-gray-50
                                 transition">

                      <td className="p-5 font-semibold">
                        {order.crop}
                      </td>

                      <td className="p-5">

                        <div
                          className="flex items-center gap-2">

                          <RiUser3Line />

                          {order.farmer}

                        </div>

                      </td>

                      <td className="p-5">
                        {order.quantity}
                      </td>

                      <td className="p-5">

                        <div
                          className="flex items-center gap-1">

                          <RiMoneyRupeeCircleLine />

                          {order.price}

                        </div>

                      </td>

                      <td className="p-5">

                        <span
                          className={`px-4 py-2
                                      rounded-full
                                      text-sm font-semibold

                            ${
                              order.status === "Delivered"

                                ? "bg-green-100 text-green-700"

                                : order.status === "Pending"

                                ? "bg-yellow-100 text-yellow-700"

                                : "bg-blue-100 text-blue-700"
                            }
                          `}>

                          {order.status}

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

    </div>
  )
}

export default BuyerDashboard