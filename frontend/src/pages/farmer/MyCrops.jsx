import { cropsData } from "../../data/dummyData"

import {
  RiMapPinLine,
  RiCalendar2Line,
  RiMoneyRupeeCircleLine,
  RiEdit2Line,
  RiDeleteBin6Line
} from "react-icons/ri"

function MyCrops() {

  return (

    <div className="min-h-screen bg-gray-100 p-6 md:p-10">

      {/* PAGE TITLE */}
      <div className="flex justify-between items-center mb-10">

        <div>

          <h1
            className="text-3xl md:text-4xl
                       font-bold text-gray-800">

            My Crops

          </h1>

          <p className="text-gray-500 mt-2">

            Manage all your listed crops here.

          </p>

        </div>


        <button
          className="bg-green-600 text-white
                     px-6 py-3 rounded-xl
                     hover:bg-green-700 transition">

          + Add Crop

        </button>

      </div>



      {/* CROPS GRID */}
      <div
        className="grid sm:grid-cols-2
                   xl:grid-cols-3 gap-8">

        {
          cropsData.map((crop) => (

            <div
              key={crop.id}

              className="bg-white rounded-2xl
                         overflow-hidden shadow-lg
                         hover:scale-105 transition">

              {/* IMAGE */}
              <img
                src={crop.image}
                alt={crop.name}

                className="w-full h-56 object-cover"
              />


              {/* CONTENT */}
              <div className="p-6">

                {/* TITLE */}
                <div
                  className="flex justify-between
                             items-center mb-4">

                  <h2
                    className="text-2xl font-bold
                               text-green-700">

                    {crop.name}

                  </h2>


                  <span
                    className="bg-green-100
                               text-green-700
                               text-sm px-3 py-1
                               rounded-full">

                    {crop.status}

                  </span>

                </div>



                {/* DETAILS */}
                <div className="space-y-3 text-gray-600">

                  <p className="flex items-center gap-2">

                    <RiMoneyRupeeCircleLine />

                    {crop.price}

                  </p>


                  <p className="flex items-center gap-2">

                    <RiCalendar2Line />

                    Harvest: {crop.harvestDate}

                  </p>


                  <p className="flex items-center gap-2">

                    <RiMapPinLine />

                    {crop.location}

                  </p>


                  <p>

                    <span className="font-semibold">
                      Quantity:
                    </span>

                    {" "}
                    {crop.quantity}

                  </p>

                </div>



                {/* ACTION BUTTONS */}
                <div
                  className="flex gap-4 mt-6">

                  <button
                    className="flex-1 bg-blue-500
                               text-white py-3
                               rounded-xl
                               hover:bg-blue-600
                               transition
                               flex items-center
                               justify-center gap-2">

                    <RiEdit2Line />

                    Edit

                  </button>



                  <button
                    className="flex-1 bg-red-500
                               text-white py-3
                               rounded-xl
                               hover:bg-red-600
                               transition
                               flex items-center
                               justify-center gap-2">

                    <RiDeleteBin6Line />

                    Delete

                  </button>

                </div>

              </div>

            </div>

          ))
        }

      </div>

    </div>
  )
}

export default MyCrops