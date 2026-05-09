import { useState } from "react"

import {
  RiImageAddLine,
  RiPlantLine,
  RiMoneyRupeeCircleLine,
  RiCalendar2Line,
  RiMapPinLine,
  RiFileTextLine
} from "react-icons/ri"

function AddCrop() {

  const [image, setImage] = useState(null)

  const handleImageChange = (e) => {

    const file = e.target.files[0]

    if (file) {
      setImage(URL.createObjectURL(file))
    }
  }


  return (

    <div className="min-h-screen bg-gray-100 p-6 md:p-10">

      {/* PAGE HEADER */}
      <div className="mb-10">

        <h1
          className="text-3xl md:text-4xl
                     font-bold text-gray-800">

          Add New Crop

        </h1>

        <p className="text-gray-500 mt-2">

          Fill all crop details carefully.

        </p>

      </div>



      {/* FORM CONTAINER */}
      <div
        className="max-w-5xl mx-auto
                   bg-white rounded-3xl
                   shadow-xl p-8 md:p-12">

        <form className="space-y-8">

          {/* IMAGE UPLOAD */}
          <div>

            <label
              className="block text-lg
                         font-semibold mb-4">

              Crop Image

            </label>


            <div
              className="border-2 border-dashed
                         border-green-400
                         rounded-2xl p-8
                         text-center
                         hover:bg-green-50 transition">

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="cropImage"
              />



              <label
                htmlFor="cropImage"
                className="cursor-pointer">

                {
                  image ? (

                    <img
                      src={image}
                      alt="Preview"
                      className="w-full max-h-80
                                 object-cover rounded-xl"
                    />

                  ) : (

                    <div className="flex flex-col items-center">

                      <RiImageAddLine
                        className="text-6xl
                                   text-green-600 mb-4"
                      />

                      <p
                        className="text-gray-600">

                        Click to upload crop image

                      </p>

                    </div>

                  )
                }

              </label>

            </div>

          </div>



          {/* FORM GRID */}
          <div
            className="grid md:grid-cols-2
                       gap-8">

            {/* CROP NAME */}
            <div>

              <label
                className="block font-semibold
                           mb-3">

                Crop Name

              </label>


              <div className="relative">

                <RiPlantLine
                  className="absolute left-4
                             top-1/2 -translate-y-1/2
                             text-green-600 text-xl"
                />

                <input
                  type="text"
                  placeholder="Enter crop name"

                  className="w-full border
                             rounded-xl py-4
                             pl-12 pr-4
                             focus:outline-none
                             focus:ring-2
                             focus:ring-green-500"
                />

              </div>

            </div>



            {/* PRICE */}
            <div>

              <label
                className="block font-semibold
                           mb-3">

                Price

              </label>


              <div className="relative">

                <RiMoneyRupeeCircleLine
                  className="absolute left-4
                             top-1/2 -translate-y-1/2
                             text-green-600 text-xl"
                />

                <input
                  type="text"
                  placeholder="₹ Price per quintal"

                  className="w-full border
                             rounded-xl py-4
                             pl-12 pr-4
                             focus:outline-none
                             focus:ring-2
                             focus:ring-green-500"
                />

              </div>

            </div>



            {/* QUANTITY */}
            <div>

              <label
                className="block font-semibold
                           mb-3">

                Quantity

              </label>

              <input
                type="text"
                placeholder="Enter quantity"

                className="w-full border
                           rounded-xl py-4 px-4
                           focus:outline-none
                           focus:ring-2
                           focus:ring-green-500"
              />

            </div>



            {/* HARVEST DATE */}
            <div>

              <label
                className="block font-semibold
                           mb-3">

                Harvest Date

              </label>


              <div className="relative">

                <RiCalendar2Line
                  className="absolute left-4
                             top-1/2 -translate-y-1/2
                             text-green-600 text-xl"
                />

                <input
                  type="date"

                  className="w-full border
                             rounded-xl py-4
                             pl-12 pr-4
                             focus:outline-none
                             focus:ring-2
                             focus:ring-green-500"
                />

              </div>

            </div>



            {/* LOCATION */}
            <div className="md:col-span-2">

              <label
                className="block font-semibold
                           mb-3">

                Location

              </label>


              <div className="relative">

                <RiMapPinLine
                  className="absolute left-4
                             top-1/2 -translate-y-1/2
                             text-green-600 text-xl"
                />

                <input
                  type="text"
                  placeholder="Enter farm location"

                  className="w-full border
                             rounded-xl py-4
                             pl-12 pr-4
                             focus:outline-none
                             focus:ring-2
                             focus:ring-green-500"
                />

              </div>

            </div>



            {/* DESCRIPTION */}
            <div className="md:col-span-2">

              <label
                className="block font-semibold
                           mb-3">

                Description

              </label>


              <div className="relative">

                <RiFileTextLine
                  className="absolute left-4 top-5
                             text-green-600 text-xl"
                />

                <textarea
                  rows="6"
                  placeholder="Write crop details..."

                  className="w-full border
                             rounded-xl py-4
                             pl-12 pr-4
                             resize-none
                             focus:outline-none
                             focus:ring-2
                             focus:ring-green-500"
                />

              </div>

            </div>

          </div>



          {/* BUTTONS */}
          <div
            className="flex flex-col sm:flex-row
                       gap-4 pt-4">

            <button
              type="submit"

              className="flex-1 bg-green-600
                         text-white py-4
                         rounded-xl font-semibold
                         hover:bg-green-700 transition">

              Add Crop

            </button>



            <button
              type="reset"

              className="flex-1 bg-gray-200
                         text-gray-700 py-4
                         rounded-xl font-semibold
                         hover:bg-gray-300 transition">

              Reset

            </button>

          </div>

        </form>

      </div>

    </div>
  )
}

export default AddCrop