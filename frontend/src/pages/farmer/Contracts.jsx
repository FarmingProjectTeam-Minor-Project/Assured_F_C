import {
  useEffect,
  useState
} from "react"

import toast from "react-hot-toast"

import {
  RiFileList3Line,
  RiUser3Line,
  RiCalendar2Line,
  RiMoneyRupeeCircleLine,
  RiCheckLine,
  RiCloseLine
} from "react-icons/ri"

import {
  getNegotiations,
  updateStatus
} from "../../services/negotiationService"


function Contracts() {

  const user = JSON.parse(
    localStorage.getItem("user")
  )

  const [contracts,
    setContracts] =
    useState([])

  const [loading,
    setLoading] =
    useState(true)


  useEffect(() => {

    fetchNegotiations()

  }, [])


  const fetchNegotiations =
    async () => {

      try {

        const response =
          await getNegotiations()

        const farmerDeals =

          response.negotiations
          .filter(

            (item) =>

              item.farmer_name
              === user?.name
          )

        setContracts(
          farmerDeals
        )

      }

      catch (error) {

        console.log(error)

      }

      finally {

        setLoading(false)

      }
    }


  const handleStatus =
    async (
      negotiationId,
      status
    ) => {

      try {

        const response =
          await updateStatus(

            negotiationId,
            status
          )

        toast.success(
          response.message
        )

        setContracts(

          contracts.map(
            (contract) =>

              contract._id
              === negotiationId

                ? {
                    ...contract,
                    status
                  }

                : contract
          )
        )

      }

      catch (error) {

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

          Loading Contracts...

        </h1>

      </div>
    )
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

          Farmer Contracts

        </h1>

        <p
          className="text-gray-500
                     mt-2">

          Manage all
          negotiation offers.

        </p>

      </div>


      {/* NO DATA */}
      {
        contracts.length === 0 && (

          <div
            className="bg-white
                       rounded-3xl
                       shadow-xl
                       p-10
                       text-center">

            <h2
              className="text-2xl
                         font-bold
                         text-gray-700">

              No Offers Yet

            </h2>

          </div>
        )
      }


      {/* CONTRACTS */}
      <div
        className="grid gap-8">

        {
          contracts.map(
            (contract) => (

            <div
              key={contract._id}

              className="bg-white
                         rounded-2xl
                         shadow-lg
                         p-6
                         hover:shadow-2xl
                         transition">

              {/* TOP */}
              <div
                className="flex
                           flex-col
                           md:flex-row
                           md:items-center
                           justify-between
                           gap-4">

                {/* LEFT */}
                <div>

                  <div
                    className="flex
                               items-center
                               gap-3
                               mb-3">

                    <RiFileList3Line
                      className="text-3xl
                                 text-green-600"
                    />

                    <h2
                      className="text-2xl
                                 font-bold
                                 text-gray-800">

                      {
                        contract.crop_name
                      }

                    </h2>

                  </div>


                  <div
                    className="space-y-2
                               text-gray-600">

                    <p
                      className="flex
                                 items-center
                                 gap-2">

                      <RiUser3Line />

                      Buyer:
                      {" "}
                      {
                        contract.buyer_name
                      }

                    </p>

                    <p
                      className="flex
                                 items-center
                                 gap-2">

                      <RiCalendar2Line />

                      Quantity:
                      {" "}
                      {
                        contract.quantity
                      }

                    </p>

                    <p
                      className="flex
                                 items-center
                                 gap-2">

                      <RiMoneyRupeeCircleLine />

                      Offer:
                      ₹
                      {
                        contract.offer_price
                      }

                    </p>

                    <p
                      className="text-gray-700">

                      Message:
                      {" "}
                      {
                        contract.message
                      }

                    </p>

                  </div>

                </div>


                {/* STATUS */}
                <div>

                  <span
                    className={`px-5
                                py-2
                                rounded-full
                                text-sm
                                font-semibold

                    ${
                      contract.status
                      === "Accepted"

                        ? "bg-green-100 text-green-700"

                        : contract.status
                        === "Rejected"

                        ? "bg-red-100 text-red-700"

                        : "bg-yellow-100 text-yellow-700"
                    }`}>

                    {
                      contract.status
                    }

                  </span>

                </div>

              </div>


              {/* BUTTONS */}
              {
                contract.status
                === "Pending" && (

                  <div
                    className="flex
                               flex-col
                               sm:flex-row
                               gap-4
                               mt-8">

                    <button
                      onClick={() =>
                        handleStatus(

                          contract._id,

                          "Accepted"
                        )
                      }

                      className="flex-1
                                 bg-green-600
                                 text-white
                                 py-3
                                 rounded-xl
                                 hover:bg-green-700
                                 transition
                                 flex
                                 items-center
                                 justify-center
                                 gap-2">

                      <RiCheckLine />

                      Accept

                    </button>


                    <button
                      onClick={() =>
                        handleStatus(

                          contract._id,

                          "Rejected"
                        )
                      }

                      className="flex-1
                                 bg-red-500
                                 text-white
                                 py-3
                                 rounded-xl
                                 hover:bg-red-600
                                 transition
                                 flex
                                 items-center
                                 justify-center
                                 gap-2">

                      <RiCloseLine />

                      Reject

                    </button>

                  </div>
                )
              }

            </div>

          ))
        }

      </div>

    </div>
  )
}

export default Contracts