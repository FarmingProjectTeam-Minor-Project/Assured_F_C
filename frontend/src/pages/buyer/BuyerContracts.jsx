import {
  useEffect,
  useState
} from "react"

import {
  RiFileList3Line,
  RiUser3Line,
  RiMapPinLine,
  RiMoneyRupeeCircleLine,
  RiTruckLine
} from "react-icons/ri"

import {
  getNegotiations
} from "../../services/negotiationService"


function BuyerContracts() {
    const user = JSON.parse(
      localStorage.getItem("user")
    )

    const [contracts,setContracts] = useState([])

    const [loading,setLoading] =useState(true)
    
    useEffect(() => {fetchContracts()}, [])


    const fetchContracts =
      async () => {

        try {

          const response =
            await getNegotiations()

          const buyerDeals =

            response.negotiations
            .filter(

              (item) =>

                item.buyer_email
                === user?.email
            )

          setContracts(
            buyerDeals
          )

        }

        catch (error) {

          console.log(error)

        }

        finally {

          setLoading(false)

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
      <div className="min-h-screen bg-gray-100 p-6 md:p-10">

        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="mb-10">

            <h1
              className="text-3xl
                        md:text-4xl
                        font-bold
                        text-gray-800">

              Buyer Contracts

            </h1>

            <p
              className="text-gray-500
                        mt-2">

              Manage all your
              farming deals.

            </p>
          </div>
          
          {/* EMPTY */}
          {contracts.length === 0 && (
          <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

              <h2 className="text-2xl font-bold text-gray-700">
                No Contracts Yet
              </h2>

          </div>
          )
          }


          {/* CONTRACTS */}
          <div className="grid gap-8">
            {contracts.map((contract) => (

              <div key={contract._id} className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-1 hover:shadow-2xl transition">

                {/* TOP */}
                <div className="flex flex-col lg:flex-row justify-between gap-6">

                  {/* LEFT */}
                  <div>

                    <div className="flex items-center gap-4 mb-6">

                      <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">

                        <RiFileList3Line className="text-3xl text-blue-600"/>

                      </div>

                      <div>

                        <h2 className="text-2xl font-bold text-gray-800">

                          {contract.crop_name}

                        </h2>

                        <p  className="text-gray-500">
                          Contract Farming Deal
                        </p>

                      </div>

                    </div>


                    {/* DETAILS */}
                    <div className="grid sm:grid-cols-2 gap-5 text-gray-600">

                      <div className="flex items-center gap-3">

                        <RiUser3Line />

                        <span>

                          {
                            contract.farmer_name
                          }

                        </span>

                      </div>


                      <div className="flex items-center gap-3">

                        <RiMapPinLine />

                        <span>

                          {
                            contract.quantity
                          }

                        </span>

                      </div>


                      <div className="flex items-center gap-3">

                        <RiTruckLine />

                        <span>
                           Pending Delivery
                        </span>

                      </div>


                      <div className="flex items-center gap-3">

                        <RiMoneyRupeeCircleLine />

                        <span  className="font-bold text-green-600">
                          ₹ { contract.offer_price }
                        </span>

                      </div>

                    </div>


                    <p className="mt-4 text-gray-700">
                      Message: {" "}
                      { contract.message}
                    </p>

                  </div>


                  {/* STATUS */}
                  <div>

                    <span className={`px-5 py-3 rounded-full text-sm font-semibold

                      ${ contract.status === "Accepted" ? "bg-green-100 text-green-700"
                        : contract.status === "Rejected" ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                      }`}>

                      { contract.status }

                    </span>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

export default BuyerContracts