import {
  RiNotification3Line,
  RiCheckLine,
  RiTimeLine,
  RiMoneyRupeeCircleLine,
  RiFileList3Line,
  RiLeafLine
} from "react-icons/ri"

function Notifications() {

  const notifications = [

    {
      id: 1,

      title: "New Contract Request",

      message:
        "AgroCorp Pvt Ltd sent you a new wheat contract.",

      time: "2 hours ago",

      type: "contract"
    },



    {
      id: 2,

      title: "Payment Received",

      message:
        "₹12,000 payment has been credited successfully.",

      time: "5 hours ago",

      type: "payment"
    },



    {
      id: 3,

      title: "Crop Approved",

      message:
        "Your Rice crop listing has been approved.",

      time: "1 day ago",

      type: "crop"
    },



    {
      id: 4,

      title: "Contract Completed",

      message:
        "Your Maize contract has been marked completed.",

      time: "2 days ago",

      type: "success"
    }

  ]


  const getIcon = (type) => {

    switch (type) {

      case "contract":
        return (
          <RiFileList3Line
            className="text-3xl text-blue-600"
          />
        )



      case "payment":
        return (
          <RiMoneyRupeeCircleLine
            className="text-3xl text-green-600"
          />
        )



      case "crop":
        return (
          <RiLeafLine
            className="text-3xl text-yellow-500"
          />
        )



      case "success":
        return (
          <RiCheckLine
            className="text-3xl text-emerald-600"
          />
        )



      default:
        return (
          <RiNotification3Line
            className="text-3xl text-gray-600"
          />
        )
    }
  }


  return (

    <div className="min-h-screen bg-gray-100 p-6 md:p-10">

      {/* HEADER */}
      <div className="mb-10">

        <h1
          className="text-3xl md:text-4xl
                     font-bold text-gray-800">

          Notifications

        </h1>

        <p className="text-gray-500 mt-2">

          Stay updated with your latest farming activities.

        </p>

      </div>



      {/* NOTIFICATIONS LIST */}
      <div className="space-y-6">

        {
          notifications.map((item) => (

            <div
              key={item.id}

              className="bg-white rounded-2xl
                         shadow-lg p-6
                         hover:shadow-2xl
                         transition">

              <div
                className="flex flex-col md:flex-row
                           md:items-center
                           justify-between gap-4">

                {/* LEFT */}
                <div
                  className="flex items-start
                             gap-5">

                  {/* ICON */}
                  <div
                    className="bg-gray-100
                               p-4 rounded-xl">

                    {getIcon(item.type)}

                  </div>



                  {/* TEXT */}
                  <div>

                    <h2
                      className="text-xl font-bold
                                 text-gray-800">

                      {item.title}

                    </h2>

                    <p
                      className="text-gray-600
                                 mt-2">

                      {item.message}

                    </p>

                  </div>

                </div>



                {/* TIME */}
                <div
                  className="flex items-center
                             gap-2 text-gray-500">

                  <RiTimeLine />

                  <span>
                    {item.time}
                  </span>

                </div>

              </div>

            </div>

          ))
        }

      </div>

    </div>
  )
}

export default Notifications