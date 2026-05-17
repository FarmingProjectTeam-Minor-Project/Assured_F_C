import {
  useEffect,
  useState
} from "react"

import {
  RiMapPinLine,
  RiCalendar2Line,
  RiMoneyRupeeCircleLine,
  RiEdit2Line,
  RiDeleteBin6Line,
  RiCloseLine
} from "react-icons/ri"

import toast from "react-hot-toast"

import {
  getAllCrops,
  deleteCrop,
  updateCrop
} from "../../services/cropService"


function MyCrops() {

  const user = JSON.parse(
    localStorage.getItem("user")
  )

  const [crops, setCrops] =
    useState([])

  const [loading, setLoading] =
    useState(true)

  const [showModal,
    setShowModal] =
    useState(false)

  const [selectedCrop,
    setSelectedCrop] =
    useState(null)

  const [formData,
    setFormData] =
    useState({

      crop_name: "",
      price: "",
      quantity: "",
      harvest_date: "",
      location: "",
      description: ""

    })


  useEffect(() => {

    fetchCrops()

  }, [])


  const fetchCrops =
    async () => {

      try {

        const response =
          await getAllCrops()

        const farmerCrops =

          response.crops
          .filter(

            (crop) =>

              crop.farmer_name
              === user?.name
          )

        setCrops(
          farmerCrops
        )

      }

      catch (error) {

        console.log(error)

      }

      finally {

        setLoading(false)

      }
    }


  const handleDelete =
    async (cropId) => {

      const confirmDelete =
        window.confirm(
          "Delete this crop?"
        )

      if (!confirmDelete)
        return

      try {

        const response =
          await deleteCrop(
            cropId
          )

        toast.success(
          response.message
        )

        setCrops(

          crops.filter(
            (crop) =>

              crop._id
              !== cropId
          )
        )

      }

      catch {

        toast.error(
          "Delete failed"
        )

      }
    }


  const openEditModal =
    (crop) => {

      setSelectedCrop(
        crop
      )

      setFormData({

        crop_name:
        crop.crop_name,

        price:
        crop.price,

        quantity:
        crop.quantity,

        harvest_date:
        crop.harvest_date,

        location:
        crop.location,

        description:
        crop.description
      })

      setShowModal(true)
    }


  const handleChange =
    (e) => {

      setFormData({

        ...formData,

        [e.target.name]:
        e.target.value
      })
    }


  const handleUpdate =
    async () => {

      try {

        const response =
          await updateCrop(

            selectedCrop._id,

            formData
          )

        toast.success(
          response.message
        )

        setCrops(

          crops.map(
            (crop) =>

              crop._id ===
              selectedCrop._id

                ? {

                    ...crop,

                    ...formData
                  }

                : crop
          )
        )

        setShowModal(false)

      }

      catch {

        toast.error(
          "Update failed"
        )
      }
    }


  if (loading) {

    return (

      <div
        className="min-h-screen
                   flex
                   items-center
                   justify-center">

        <h1
          className="text-2xl
                     font-bold">

          Loading Crops...

        </h1>

      </div>
    )
  }


  return (

    <div
      className="min-h-screen
                 bg-gray-100
                 p-6 md:p-10">

      <div className="mb-10">

        <h1
          className="text-3xl
                     md:text-4xl
                     font-bold
                     text-gray-800">

          My Crops

        </h1>

        <p
          className="text-gray-500
                     mt-2">

          Manage all your
          listed crops here.

        </p>

      </div>


      <div
        className="grid
                   sm:grid-cols-2
                   xl:grid-cols-3
                   gap-8">

        {
          crops.map((crop) => (

            <div
              key={crop._id}

              className="bg-white
                         rounded-2xl
                         shadow-lg
                         overflow-hidden">

              <div
                className="h-56
                           bg-green-600
                           flex
                           items-center
                           justify-center
                           text-7xl">

                🌾

              </div>


              <div className="p-6">

                <div
                  className="flex
                             justify-between
                             mb-4">

                  <h2
                    className="text-2xl
                               font-bold
                               text-green-700">

                    {
                      crop.crop_name
                    }

                  </h2>

                  <span
                    className="bg-green-100
                               text-green-700
                               px-3 py-1
                               rounded-full">

                    Active

                  </span>

                </div>


                <div
                  className="space-y-3
                             text-gray-600">

                  <p
                    className="flex
                               gap-2">

                    <RiMoneyRupeeCircleLine />

                    ₹{crop.price}

                  </p>

                  <p
                    className="flex
                               gap-2">

                    <RiCalendar2Line />

                    {
                      crop.harvest_date
                    }

                  </p>

                  <p
                    className="flex
                               gap-2">

                    <RiMapPinLine />

                    {
                      crop.location
                    }

                  </p>

                  <p>

                    Quantity:
                    {" "}
                    {
                      crop.quantity
                    }

                  </p>

                </div>


                <div
                  className="flex
                             gap-4
                             mt-6">

                  <button
                    onClick={() =>
                      openEditModal(
                        crop
                      )
                    }

                    className="flex-1
                               bg-blue-500
                               text-white
                               py-3
                               rounded-xl
                               flex
                               items-center
                               justify-center
                               gap-2">

                    <RiEdit2Line />

                    Edit

                  </button>


                  <button
                    onClick={() =>
                      handleDelete(
                        crop._id
                      )
                    }

                    className="flex-1
                               bg-red-500
                               text-white
                               py-3
                               rounded-xl
                               flex
                               items-center
                               justify-center
                               gap-2">

                    <RiDeleteBin6Line />

                    Delete

                  </button>

                </div>

              </div>

            </div>
          ))
        }

      </div>


      {/* MODAL */}
      {
        showModal && (

          <div
            className="fixed
                       inset-0
                       bg-black/50
                       flex
                       items-center
                       justify-center
                       z-50">

            <div
              className="bg-white
                         rounded-3xl
                         p-8
                         w-full
                         max-w-2xl
                         relative">

              <button
                onClick={() =>
                  setShowModal(
                    false
                  )
                }

                className="absolute
                           right-5
                           top-5">

                <RiCloseLine
                  className="text-2xl"
                />

              </button>


              <h2
                className="text-3xl
                           font-bold
                           mb-6">

                Edit Crop

              </h2>


              <div
                className="space-y-4">

                <input
                  type="text"
                  name="crop_name"
                  value={
                    formData.crop_name
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Crop Name"
                  className="w-full border rounded-xl p-4"
                />

                <input
                  type="text"
                  name="price"
                  value={
                    formData.price
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Price"
                  className="w-full border rounded-xl p-4"
                />

                <input
                  type="text"
                  name="quantity"
                  value={
                    formData.quantity
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Quantity"
                  className="w-full border rounded-xl p-4"
                />

                <input
                  type="date"
                  name="harvest_date"
                  value={
                    formData.harvest_date
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full border rounded-xl p-4"
                />

                <input
                  type="text"
                  name="location"
                  value={
                    formData.location
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Location"
                  className="w-full border rounded-xl p-4"
                />

                <textarea
                  rows="4"
                  name="description"
                  value={
                    formData.description
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Description"
                  className="w-full border rounded-xl p-4"
                />

                <button
                  onClick={
                    handleUpdate
                  }

                  className="w-full
                             bg-green-600
                             text-white
                             py-4
                             rounded-xl
                             font-bold">

                  Update Crop

                </button>

              </div>

            </div>

          </div>
        )
      }

    </div>
  )
}

export default MyCrops