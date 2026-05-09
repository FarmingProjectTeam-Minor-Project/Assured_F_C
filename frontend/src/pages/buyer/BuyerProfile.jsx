import {
  RiUser3Line,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiBuildingLine,
  RiShoppingBag3Line,
  RiMoneyRupeeCircleLine,
  RiFileList3Line,
  RiEdit2Line
} from "react-icons/ri"

function BuyerProfile() {

  const stats = [

    {
      title: "Total Orders",
      value: "124",
      icon: <RiShoppingBag3Line />
    },



    {
      title: "Contracts",
      value: "38",
      icon: <RiFileList3Line />
    },



    {
      title: "Total Spending",
      value: "₹8.5L",
      icon: <RiMoneyRupeeCircleLine />
    }

  ]


  return (

    <div className="min-h-screen bg-gray-100 p-6 md:p-10">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div
          className="bg-linear-to-r
                     from-blue-600
                     to-indigo-600
                     rounded-3xl
                     p-8 md:p-10
                     text-white
                     shadow-2xl mb-10">

          <div
            className="flex flex-col md:flex-row
                       justify-between
                       md:items-center
                       gap-6">

            {/* LEFT */}
            <div
              className="flex items-center
                         gap-6">

              {/* PROFILE IMAGE */}
              <div
                className="w-24 h-24
                           rounded-full
                           bg-white/20
                           backdrop-blur-md
                           flex items-center
                           justify-center
                           text-5xl">

                👨‍💼

              </div>



              {/* INFO */}
              <div>

                <h1
                  className="text-3xl md:text-4xl
                             font-bold">

                  AgroTrade Pvt Ltd

                </h1>

                <p
                  className="mt-2
                             text-blue-100">

                  Trusted Agricultural Buyer

                </p>

              </div>

            </div>



            {/* BUTTON */}
            <button
              className="bg-white text-blue-600
                         px-6 py-3 rounded-2xl
                         font-semibold
                         hover:bg-blue-50
                         transition
                         flex items-center
                         justify-center gap-2">

              <RiEdit2Line />

              Edit Profile

            </button>

          </div>

        </div>



        {/* STATS */}
        <div
          className="grid grid-cols-1
                     md:grid-cols-3
                     gap-6 mb-10">

          {
            stats.map((item, index) => (

              <div
                key={index}

                className="bg-white rounded-3xl
                           shadow-xl p-8
                           hover:-translate-y-1
                           hover:shadow-2xl
                           transition">

                <div
                  className="flex justify-between
                             items-center">

                  <div>

                    <p
                      className="text-gray-500">

                      {item.title}

                    </p>

                    <h2
                      className="text-4xl
                                 font-bold
                                 text-gray-800 mt-3">

                      {item.value}

                    </h2>

                  </div>



                  <div
                    className="text-5xl
                               text-blue-600">

                    {item.icon}

                  </div>

                </div>

              </div>

            ))
          }

        </div>



        {/* PROFILE DETAILS */}
        <div
          className="grid lg:grid-cols-2
                     gap-8">

          {/* PERSONAL INFO */}
          <div
            className="bg-white rounded-3xl
                       shadow-xl p-8">

            <h2
              className="text-2xl font-bold
                         text-gray-800 mb-8">

              Personal Information

            </h2>



            <div
              className="space-y-6">

              <div
                className="flex items-center
                           gap-4">

                <div
                  className="w-12 h-12
                             rounded-2xl
                             bg-blue-100
                             flex items-center
                             justify-center">

                  <RiUser3Line
                    className="text-2xl
                               text-blue-600"
                  />

                </div>

                <div>

                  <p
                    className="text-gray-500">

                    Full Name

                  </p>

                  <h3
                    className="font-semibold
                               text-lg">

                    Rahul Sharma

                  </h3>

                </div>

              </div>



              <div
                className="flex items-center
                           gap-4">

                <div
                  className="w-12 h-12
                             rounded-2xl
                             bg-green-100
                             flex items-center
                             justify-center">

                  <RiMailLine
                    className="text-2xl
                               text-green-600"
                  />

                </div>

                <div>

                  <p
                    className="text-gray-500">

                    Email Address

                  </p>

                  <h3
                    className="font-semibold
                               text-lg">

                    rahul@agrotrade.com

                  </h3>

                </div>

              </div>



              <div
                className="flex items-center
                           gap-4">

                <div
                  className="w-12 h-12
                             rounded-2xl
                             bg-yellow-100
                             flex items-center
                             justify-center">

                  <RiPhoneLine
                    className="text-2xl
                               text-yellow-600"
                  />

                </div>

                <div>

                  <p
                    className="text-gray-500">

                    Phone Number

                  </p>

                  <h3
                    className="font-semibold
                               text-lg">

                    +91 9876543210

                  </h3>

                </div>

              </div>

            </div>

          </div>



          {/* BUSINESS INFO */}
          <div
            className="bg-white rounded-3xl
                       shadow-xl p-8">

            <h2
              className="text-2xl font-bold
                         text-gray-800 mb-8">

              Business Information

            </h2>



            <div
              className="space-y-6">

              <div
                className="flex items-center
                           gap-4">

                <div
                  className="w-12 h-12
                             rounded-2xl
                             bg-indigo-100
                             flex items-center
                             justify-center">

                  <RiBuildingLine
                    className="text-2xl
                               text-indigo-600"
                  />

                </div>

                <div>

                  <p
                    className="text-gray-500">

                    Company Name

                  </p>

                  <h3
                    className="font-semibold
                               text-lg">

                    AgroTrade Pvt Ltd

                  </h3>

                </div>

              </div>



              <div
                className="flex items-center
                           gap-4">

                <div
                  className="w-12 h-12
                             rounded-2xl
                             bg-red-100
                             flex items-center
                             justify-center">

                  <RiMapPinLine
                    className="text-2xl
                               text-red-600"
                  />

                </div>

                <div>

                  <p
                    className="text-gray-500">

                    Business Address

                  </p>

                  <h3
                    className="font-semibold
                               text-lg">

                    Indore, Madhya Pradesh

                  </h3>

                </div>

              </div>



              <div
                className="flex items-center
                           gap-4">

                <div
                  className="w-12 h-12
                             rounded-2xl
                             bg-green-100
                             flex items-center
                             justify-center">

                  <RiShoppingBag3Line
                    className="text-2xl
                               text-green-600"
                  />

                </div>

                <div>

                  <p
                    className="text-gray-500">

                    Business Type

                  </p>

                  <h3
                    className="font-semibold
                               text-lg">

                    Agricultural Wholesale Buyer

                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default BuyerProfile