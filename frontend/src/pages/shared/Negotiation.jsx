import {
  useEffect,
  useState
} from "react"

import {
  useParams
} from "react-router-dom"

import toast from "react-hot-toast"

import {
  RiUser3Line,
  RiMapPinLine,
  RiLeafLine,
  RiMoneyRupeeCircleLine,
  RiSendPlaneFill,
  RiCheckLine,
  RiCloseLine,
  RiTimeLine
} from "react-icons/ri"

import {
  getCropById
} from "../../services/cropService"

import {
  createOffer
} from "../../services/negotiationService"


function Negotiation() {

  const user = JSON.parse(
    localStorage.getItem("user")
  )

  const { cropId } =
    useParams()

  const [crop, setCrop] =
    useState(null)

  const [loading, setLoading] =
    useState(true)

  const [sending, setSending] =
    useState(false)

  const [message, setMessage] =
    useState("")

  const [offerPrice,
    setOfferPrice] =
    useState("")

  const [quantity,
    setQuantity] =
    useState("")

  const [messages,
    setMessages] =
    useState([])


  useEffect(() => {

    fetchCrop()

  }, [])


  const fetchCrop =
    async () => {

      try {

        const response =
          await getCropById(
            cropId
          )

        setCrop(
          response.crop
        )

      }

      catch (error) {

        console.log(error)

      }

      finally {

        setLoading(false)

      }
    }


  const handleSend =
    async () => {

      if (
        !offerPrice ||
        !quantity ||
        !message.trim()
      ) {

        toast.error(
          "Fill all fields"
        )

        return
      }

      try {

        setSending(true)

        const offerData = {

          crop_id:
          crop?._id,

          crop_name:
          crop?.crop_name,

          farmer_name:
          crop?.farmer_name,

          buyer_name:
          user?.name,

          buyer_email:
          user?.email,

          offer_price:
          offerPrice,

          quantity:
          quantity,

          message:
          message
        }

        const response =
          await createOffer(
            offerData
          )

        toast.success(
          response.message
        )

        setMessages([

          ...messages,

          {
            sender: "buyer",
            text:
              `₹${offerPrice}
              | ${quantity}
              | ${message}`,

            time: "Now"
          }

        ])

        setOfferPrice("")
        setQuantity("")
        setMessage("")

      }

      catch (error) {

        toast.error(

          error.response?.data
          ?.message

          ||

          "Failed to send offer"
        )
      }

      finally {

        setSending(false)

      }
    }


  if (loading) {

    return (

      <div
        className="min-h-screen
                   flex items-center
                   justify-center">

        <h1
          className="text-2xl
                     font-bold">

          Loading Crop...

        </h1>

      </div>
    )
  }


  return (

    <div
      className="min-h-screen
                 bg-gray-100
                 p-4 md:p-8">

      <div
        className="max-w-7xl
                   mx-auto">

        {/* HEADER */}
        <div
          className="bg-linear-to-r
                     from-green-600
                     to-emerald-600
                     rounded-3xl
                     p-8 md:p-10
                     text-white
                     shadow-2xl
                     mb-8">

          <h1
            className="text-4xl
                       md:text-5xl
                       font-bold">

            Crop Negotiation 🤝

          </h1>

        </div>


        <div
          className="grid
                     lg:grid-cols-3
                     gap-8">

          {/* LEFT */}
          <div
            className="space-y-8">

            <div
              className="bg-white
                         rounded-3xl
                         shadow-xl
                         p-8">

              <div
                className="w-full
                           h-52
                           rounded-3xl
                           bg-green-600
                           flex items-center
                           justify-center
                           text-7xl
                           mb-6">

                🌾

              </div>

              <h2
                className="text-3xl
                           font-bold
                           mb-6">

                {crop?.crop_name}

              </h2>

              <div
                className="space-y-4">

                <p>
                  Farmer:
                  {" "}
                  {crop?.farmer_name}
                </p>

                <p>
                  Location:
                  {" "}
                  {crop?.location}
                </p>

                <p>
                  Price:
                  {" "}
                  ₹{crop?.price}
                </p>

                <p>
                  Quantity:
                  {" "}
                  {crop?.quantity}
                </p>

              </div>

            </div>

          </div>


          {/* RIGHT */}
          <div
            className="lg:col-span-2
                       bg-white
                       rounded-3xl
                       shadow-xl
                       p-6">

            <h2
              className="text-2xl
                         font-bold
                         mb-6">

              Send Offer

            </h2>

            <div
              className="space-y-4">

              <input
                type="number="
                placeholder="Offer Price"

                value={offerPrice}

                onChange={(e) =>
                  setOfferPrice(
                    e.target.value
                  )
                }

                className="w-full
                           border
                           rounded-xl
                           p-4 [appearance:textfield]"
              />

              <input
                type="text"
                placeholder="Quantity"

                value={quantity}

                onChange={(e) =>
                  setQuantity(
                    e.target.value
                  )
                }

                className="w-full
                           border
                           rounded-xl
                           p-4"
              />

              <textarea
                rows="4"
                placeholder="Message"

                value={message}

                onChange={(e) =>
                  setMessage(
                    e.target.value
                  )
                }

                className="w-full
                           border
                           rounded-xl
                           p-4"
              />

              <button
                onClick={
                  handleSend
                }

                disabled={sending}

                className="w-full
                           bg-green-600
                           text-white
                           py-4
                           rounded-xl
                           font-bold">

                {
                  sending

                  ? "Sending..."

                  : "Send Offer"
                }

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Negotiation