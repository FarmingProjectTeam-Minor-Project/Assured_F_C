import { useState } from "react"

import {
  RiSearchLine,
  RiMapPinLine,
  RiUser3Line,
  RiMoneyRupeeCircleLine,
  RiLeafLine
} from "react-icons/ri"

function BrowseCrops() {

  const [search, setSearch] = useState("")

  const crops = [

    {
      id: 1,
      name: "Organic Basmati Rice",
      farmer: "Rajesh Farms",
      location: "Bhopal, MP",
      quality: "Grade A",
      price: "₹25/kg",
      delivery: "2 Days",
      emoji: "🌾"
    },



    {
      id: 2,
      name: "Premium Wheat",
      farmer: "Sita Agri",
      location: "Indore, MP",
      quality: "Premium",
      price: "₹18/kg",
      delivery: "3 Days",
      emoji: "🌾"
    },



    {
      id: 3,
      name: "Sweet Corn",
      farmer: "Green Valley",
      location: "Sehore, MP",
      quality: "Fresh",
      price: "₹32/kg",
      delivery: "1 Day",
      emoji: "🌽"
    },



    {
      id: 4,
      name: "Fresh Tomatoes",
      farmer: "Organic Farms",
      location: "Ujjain, MP",
      quality: "Organic",
      price: "₹40/kg",
      delivery: "2 Days",
      emoji: "🍅"
    },



    {
      id: 5,
      name: "Green Pulses",
      farmer: "Nature Agro",
      location: "Dewas, MP",
      quality: "Grade A",
      price: "₹55/kg",
      delivery: "4 Days",
      emoji: "🫘"
    },



    {
      id: 6,
      name: "Fresh Carrots",
      farmer: "Healthy Crops",
      location: "Vidisha, MP",
      quality: "Fresh",
      price: "₹28/kg",
      delivery: "2 Days",
      emoji: "🥕"
    }

  ]


  const filteredCrops = crops.filter((crop) =>

    crop.name.toLowerCase().includes(search.toLowerCase())
  )


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

          <div
            className="flex flex-col lg:flex-row
                       justify-between
                       items-center gap-6">

            {/* TITLE */}
            <div>

              <h1
                className="text-4xl md:text-5xl
                           font-bold">

                Browse Crops 🌾

              </h1>

              <p
                className="mt-3 text-green-100
                           text-lg">

                Explore fresh crops directly from farmers.

              </p>

            </div>



            {/* SEARCH */}
            <div
              className="relative w-full
                         lg:w-87.5">

              <RiSearchLine
                className="absolute left-4
                           top-1/2 -translate-y-1/2
                           text-white text-xl"
              />

              <input
                type="text"
                placeholder="Search crops..."

                value={search}

                onChange={(e) =>
                  setSearch(e.target.value)
                }

                className="w-full
                           bg-white/20
                           backdrop-blur-md
                           border border-white/30
                           rounded-2xl
                           py-4 pl-12 pr-4
                           placeholder-white/80
                           text-white
                           focus:outline-none
                           focus:ring-2
                           focus:ring-white"
              />

            </div>

          </div>

        </div>



        {/* CROPS GRID */}
        <div
          className="grid sm:grid-cols-2
                     xl:grid-cols-3
                     gap-8">

          {
            filteredCrops.map((crop) => (

              <div
                key={crop.id}

                className="bg-white rounded-3xl
                           p-8 shadow-xl
                           border border-green-100
                           hover:-translate-y-2
                           hover:shadow-2xl
                           transition">

                {/* EMOJI */}
                <div
                  className="w-24 h-24
                             bg-linear-to-br
                             from-green-400
                             to-emerald-600
                             rounded-3xl
                             mx-auto mb-6
                             flex items-center
                             justify-center
                             shadow-xl">

                  <span className="text-4xl">

                    {crop.emoji}

                  </span>

                </div>



                {/* CONTENT */}
                <div className="text-center">

                  <h2
                    className="text-2xl
                               font-bold
                               text-gray-800
                               mb-6">

                    {crop.name}

                  </h2>



                  <div
                    className="space-y-4
                               text-gray-600">

                    <div
                      className="flex items-center
                                 justify-between">

                      <span
                        className="flex items-center gap-2">

                        <RiUser3Line />

                        Farmer

                      </span>

                      <span
                        className="font-semibold
                                   text-green-700">

                        {crop.farmer}

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

                        {crop.location}

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

                        {crop.quality}

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

                        {crop.price}

                      </span>

                    </div>

                  </div>



                  {/* DELIVERY */}
                  <div
                    className="mt-6
                               bg-green-50
                               text-green-700
                               py-3 rounded-2xl
                               font-semibold">

                    Delivery:
                    {" "}
                    {crop.delivery}

                  </div>



                  {/* BUTTON */}
                  <button
                    className="w-full mt-6
                               bg-linear-to-r
                               from-green-600
                               to-emerald-600
                               text-white
                               py-4 rounded-2xl
                               font-bold
                               hover:from-green-700
                               hover:to-emerald-700
                               transition">

                    View & Negotiate

                  </button>

                </div>

              </div>

            ))
          }

        </div>



        {/* NO RESULTS */}
        {
          filteredCrops.length === 0 && (

            <div
              className="text-center py-20">

              <div
                className="text-7xl mb-6">

                🌾

              </div>

              <h2
                className="text-3xl font-bold
                           text-gray-700">

                No Crops Found

              </h2>

              <p
                className="text-gray-500
                           mt-3">

                Try searching for another crop.

              </p>

            </div>

          )
        }

      </div>

    </div>
  )
}

export default BrowseCrops