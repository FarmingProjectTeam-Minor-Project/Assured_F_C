import { useState } from "react"
import toast from "react-hot-toast"

import {
  RiImageAddLine,
  RiPlantLine,
  RiMoneyRupeeCircleLine,
  RiCalendar2Line,
  RiMapPinLine,
  RiFileTextLine
} from "react-icons/ri"

import { addCrop }
from "../../services/cropService"

function AddCrop() {

  const user = JSON.parse(
    localStorage.getItem("user")
  )

  const [image, setImage] =
    useState(null)

  const [loading, setLoading] =
    useState(false)

  const [formData, setFormData] =
    useState({

      crop_name: "",
      price: "",
      quantity: "",
      harvest_date: "",
      location: "",
      description: "",
      image: ""

    })


  const handleImageChange = (e) => {

    const file = e.target.files[0]

    if (file) {

      setImage(
        URL.createObjectURL(file)
      )

      setFormData({

        ...formData,
        image: file.name

      })
    }
  }


  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]:
      e.target.value

    })
  }


  const handleSubmit =
    async (e) => {

      e.preventDefault()

      try {

        setLoading(true)

        const cropData = {

          farmer_name:
          user?.name,

          farmer_email:
          user?.email,

          crop_name:
          formData.crop_name,

          price:
          formData.price,

          quantity:
          formData.quantity,

          harvest_date:
          formData.harvest_date,

          location:
          formData.location,

          description:
          formData.description,

          image:
          formData.image
        }

        const response =
          await addCrop(
            cropData
          )

        toast.success(
          response.message
        )

        // reset form
        setFormData({

          crop_name: "",
          price: "",
          quantity: "",
          harvest_date: "",
          location: "",
          description: "",
          image: ""

        })

        setImage(null)

      }

      catch (error) {

        toast.error(

          error.response?.data
          ?.message

          ||

          "Failed to add crop"

        )
      }

      finally {

        setLoading(false)

      }

    }


  return (

    <div
      className="min-h-screen
                 bg-gray-100
                 p-6 md:p-10">

      {/* HEADER */}
      <div className="mb-10">

        <h1
          className="text-3xl
                     md:text-4xl
                     font-bold
                     text-gray-800">

          Add New Crop

        </h1>

        <p
          className="text-gray-500
                     mt-2">

          Fill all crop details
          carefully.

        </p>

      </div>


      {/* FORM */}
      <div
        className="max-w-5xl
                   mx-auto
                   bg-white
                   rounded-3xl
                   shadow-xl
                   p-8 md:p-12">

        <form
          onSubmit={handleSubmit}
          className="space-y-8">

          {/* IMAGE */}
          <div>

            <label
              className="block
                         text-lg
                         font-semibold
                         mb-4">

              Crop Image

            </label>

            <div
              className="border-2
                         border-dashed
                         border-green-400
                         rounded-2xl
                         p-8
                         text-center
                         hover:bg-green-50
                         transition">

              <input
                type="file"
                accept="image/*"
                onChange={
                  handleImageChange
                }
                className="hidden"
                id="cropImage"
              />

              <label
                htmlFor="cropImage"
                className="cursor-pointer">

                {
                  image

                  ? (

                    <img
                      src={image}
                      alt="Preview"
                      className="w-full
                                 max-h-80
                                 object-cover
                                 rounded-xl"
                    />

                  )

                  : (

                    <div
                      className="flex
                                 flex-col
                                 items-center">

                      <RiImageAddLine
                        className="text-6xl
                                   text-green-600
                                   mb-4"
                      />

                      <p
                        className="text-gray-600">

                        Click to upload
                        crop image

                      </p>

                    </div>
                  )
                }

              </label>

            </div>

          </div>


          {/* FORM GRID */}
          <div
            className="grid
                       md:grid-cols-2
                       gap-8">

            {/* CROP NAME */}
            <input
              type="text"
              name="crop_name"
              placeholder="Crop Name"
              value={
                formData.crop_name
              }
              onChange={
                handleChange
              }
              required

              className="w-full
                         border
                         rounded-xl
                         py-4 px-4"
            />


            {/* PRICE */}
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={
                formData.price
              }
              onChange={
                handleChange
              }
              required

              className="w-full
                         border
                         rounded-xl
                         py-4 px-4"
            />


            {/* QUANTITY */}
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              value={
                formData.quantity
              }
              onChange={
                handleChange
              }
              required

              className="w-full
                         border
                         rounded-xl
                         py-4 px-4"
            />


            {/* DATE */}
            <input
              type="date"
              name="harvest_date"
              value={
                formData.harvest_date
              }
              onChange={
                handleChange
              }
              required

              className="w-full
                         border
                         rounded-xl
                         py-4 px-4"
            />


            {/* LOCATION */}
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={
                formData.location
              }
              onChange={
                handleChange
              }
              required

              className="md:col-span-2
                         w-full border
                         rounded-xl
                         py-4 px-4"
            />


            {/* DESCRIPTION */}
            <textarea
              rows="6"
              name="description"
              placeholder="Description"
              value={
                formData.description
              }
              onChange={
                handleChange
              }
              required

              className="md:col-span-2
                         w-full border
                         rounded-xl
                         py-4 px-4
                         resize-none"
            />

          </div>


          {/* BUTTON */}
          <button
            type="submit"

            disabled={loading}

            className="w-full
                       bg-green-600
                       text-white
                       py-4
                       rounded-xl
                       font-semibold
                       hover:bg-green-700
                       transition">

            {
              loading
              ? "Adding Crop..."
              : "Add Crop"
            }

          </button>

        </form>

      </div>

    </div>
  )
}

export default AddCrop