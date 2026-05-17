import {
  RiFileList3Line,
  RiWallet3Line,
  RiBarChartBoxLine,
  RiLeafLine,
  RiHandHeartLine,
  RiWalletLine,
  RiNotification3Line,
  RiPlantLine,
  RiMoneyRupeeCircleLine,
  RiLogoutBoxLine,
  RiUser3Line,
  RiHome5Line,
  RiAddLine
} from "react-icons/ri"

function FarmerDashboard() {

  const stats = [

    {
      title: "Contracts",
      value: "12",
      subtitle: "Active Deals",
      icon: <RiFileList3Line />
    },

    {
      title: "Earnings",
      value: "₹45,000",
      subtitle: "This Month",
      icon: <RiWallet3Line />
    },

    {
      title: "Analytics",
      value: "+18%",
      subtitle: "Growth Rate",
      icon: <RiBarChartBoxLine />
    },

    {
      title: "Crop Updates",
      value: "5",
      subtitle: "New Notifications",
      icon: <RiLeafLine />
    }
  ]


  const crops = [

    {
      name: "Wheat",
      status: "Growing 🌱",
      harvest: "15 Mar 2026",
      price: "₹2200 / Quintal"
    },

    {
      name: "Rice",
      status: "Ready 🌾",
      harvest: "2 Apr 2026",
      price: "₹1800 / Quintal"
    },

    {
      name: "Maize",
      status: "Sold 🚜",
      harvest: "10 Feb 2026",
      price: "₹2000 / Quintal"
    }
  ]


  return (

    <div className="min-h-screen bg-gray-100 flex">

      {/* SIDEBAR */}
      <aside
        className="hidden lg:flex
                   flex-col
                   w-72 h-screen
                   bg-[#0f172a]
                   text-white p-6
                   fixed top-0 left-0">

        {/* LOGO */}
        <h1
          className="text-2xl font-bold
                     text-green-400 mb-10">

          Farmer Panel

        </h1>


        {/* MENU */}
        <nav className="flex flex-col gap-4">

          {/* DASHBOARD */}
          <button
            className="flex items-center gap-3
                       px-4 py-3 rounded-lg
                       bg-green-600">

            <RiBarChartBoxLine className="text-xl" />

            Dashboard

          </button>



          {/* CROPS */}
          <button
            className="flex items-center gap-3
                       px-4 py-3 rounded-lg
                       hover:bg-white/10 transition">

            <RiPlantLine className="text-xl" />

            My Crops

          </button>



          {/* CONTRACTS */}
          <button
            className="flex items-center gap-3
                       px-4 py-3 rounded-lg
                       hover:bg-white/10 transition">

            <RiHandHeartLine className="text-xl" />

            Contracts

          </button>



          {/* PAYMENTS */}
          <button
            className="flex items-center gap-3
                       px-4 py-3 rounded-lg
                       hover:bg-white/10 transition">

            <RiWalletLine className="text-xl" />

            Payments

          </button>



          {/* NOTIFICATIONS */}
          <button
            className="flex items-center gap-3
                       px-4 py-3 rounded-lg
                       hover:bg-white/10 transition">

            <RiNotification3Line className="text-xl" />

            Notifications

          </button>



          {/* PROFILE */}
          <button
            className="flex items-center gap-3
                       px-4 py-3 rounded-lg
                       hover:bg-white/10 transition">

            <RiUser3Line className="text-xl" />

            Profile

          </button>



          {/* LOGOUT */}
          <button
            className="flex items-center gap-3
                       px-4 py-3 mt-6
                       text-red-500
                       hover:bg-red-500/10
                       rounded-lg transition">

            <RiLogoutBoxLine className="text-xl" />

            Logout

          </button>

        </nav>

      </aside>



      {/* MAIN CONTENT */}
      <main
        className="flex-1 lg:ml-72
                   p-6 md:p-10
                   pb-28 lg:pb-10">

        {/* HEADER */}
        <div
          className="flex flex-col md:flex-row
                     justify-between items-center
                     mb-10 gap-4">

          <div>

            <h1
              className="text-3xl md:text-4xl
                         font-bold text-gray-800">

              Farmer Dashboard

            </h1>

            <p className="text-gray-500 mt-1">

              Welcome back, manage your crops
              and contracts efficiently.

            </p>

          </div>

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
                           hover:scale-105
                           transition">

                <div
                  className="flex justify-between
                             items-center mb-5">

                  <h3
                    className="font-semibold
                               text-gray-700">

                    {item.title}

                  </h3>

                  <div
                    className="text-3xl text-green-600">

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



        {/* DEALS & PAYMENTS */}
        <div
          className="grid lg:grid-cols-2
                     gap-8 mb-12">

          {/* DEALS */}
          <div
            className="bg-white rounded-2xl
                       shadow-lg p-6">

            <h2
              className="text-2xl font-bold
                         mb-6">

              Active Deals

            </h2>


            <div className="space-y-5">

              <div
                className="flex justify-between
                           items-center border-b pb-4">

                <div>

                  <h3 className="font-semibold">
                    AgroCorp
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Wheat Contract
                  </p>

                </div>

                <span
                  className="bg-green-100
                             text-green-700
                             px-4 py-1 rounded-full
                             text-sm">

                  Active

                </span>

              </div>



              <div
                className="flex justify-between
                           items-center border-b pb-4">

                <div>

                  <h3 className="font-semibold">
                    FreshMart
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Rice Contract
                  </p>

                </div>

                <span
                  className="bg-yellow-100
                             text-yellow-700
                             px-4 py-1 rounded-full
                             text-sm">

                  Pending

                </span>

              </div>

            </div>

          </div>



          {/* PAYMENTS */}
          <div
            className="bg-white rounded-2xl
                       shadow-lg p-6">

            <h2
              className="text-2xl font-bold
                         mb-6">

              Recent Payments

            </h2>


            <div className="space-y-5">

              <div
                className="flex justify-between
                           items-center border-b pb-4">

                <div>

                  <h3 className="font-semibold">
                    ₹1,500
                  </h3>

                  <p className="text-gray-500 text-sm">
                    AgroCorp
                  </p>

                </div>

                <span className="text-green-600">
                  Paid
                </span>

              </div>



              <div
                className="flex justify-between
                           items-center border-b pb-4">

                <div>

                  <h3 className="font-semibold">
                    ₹3,200
                  </h3>

                  <p className="text-gray-500 text-sm">
                    FreshMart
                  </p>

                </div>

                <span className="text-green-600">
                  Paid
                </span>

              </div>



              <div
                className="flex justify-between
                           items-center">

                <div>

                  <h3 className="font-semibold">
                    ₹2,000
                  </h3>

                  <p className="text-gray-500 text-sm">
                    VegBuy
                  </p>

                </div>

                <span className="text-yellow-600">
                  Pending
                </span>

              </div>

            </div>

          </div>

        </div>



        {/* CROPS */}
        <div>

          <h2
            className="text-3xl font-bold
                       mb-8">

            My Crops

          </h2>


          <div
            className="grid md:grid-cols-2
                       xl:grid-cols-3
                       gap-8">

            {
              crops.map((crop, index) => (

                <div
                  key={index}
                  className="bg-white
                             rounded-2xl
                             shadow-lg p-6
                             hover:scale-105
                             transition">

                  <div
                    className="flex justify-between
                               items-center mb-4">

                    <h3
                      className="text-2xl font-bold
                                 text-green-700">

                      {crop.name}

                    </h3>

                    <RiMoneyRupeeCircleLine
                      className="text-3xl
                                 text-green-600" />

                  </div>


                  <div className="space-y-2">

                    <p>
                      <span className="font-semibold">
                        Status:
                      </span>

                      {" "}
                      {crop.status}

                    </p>

                    <p>
                      <span className="font-semibold">
                        Harvest:
                      </span>

                      {" "}
                      {crop.harvest}

                    </p>

                    <p>
                      <span className="font-semibold">
                        Price:
                      </span>

                      {" "}
                      {crop.price}

                    </p>

                  </div>


                  <button
                    className="w-full mt-6
                               bg-green-600
                               text-white py-3
                               rounded-xl
                               hover:bg-green-700
                               transition">

                    View Details

                  </button>

                </div>

              ))
            }

          </div>

        </div>

      </main>



      {/* MOBILE BOTTOM NAVIGATION */}
      <div
        className="lg:hidden fixed bottom-0 left-0
                   w-full bg-white border-t
                   shadow-2xl z-50">

        <div
          className="flex justify-around
                     items-center py-3">

          {/* HOME */}
          <button
            className="flex flex-col items-center
                       text-sm text-gray-700
                       hover:text-green-600 transition">

            <RiHome5Line className="text-2xl" />

            <span>Home</span>

          </button>



          {/* CROPS */}
          <button
            className="flex flex-col items-center
                       text-sm text-gray-700
                       hover:text-green-600 transition">

            <RiLeafLine className="text-2xl" />

            <span>Crops</span>

          </button>



          {/* ADD */}
          <button
            className="flex flex-col items-center
                       text-sm text-gray-700
                       hover:text-green-600 transition">

            <RiAddLine className="text-2xl" />

            <span>Add</span>

          </button>



          {/* DEALS */}
          <button
            className="flex flex-col items-center
                       text-sm text-gray-700
                       hover:text-green-600 transition">

            <RiHandHeartLine className="text-2xl" />

            <span>Deals</span>

          </button>



          {/* PROFILE */}
          <button
            className="flex flex-col items-center
                       text-sm text-gray-700
                       hover:text-green-600 transition">

            <RiUser3Line className="text-2xl" />

            <span>Profile</span>

          </button>

        </div>

      </div>

    </div>
  )
}

export default FarmerDashboard