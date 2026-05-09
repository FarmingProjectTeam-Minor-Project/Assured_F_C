import {
  RiCheckLine
} from "react-icons/ri"

import heroVideo from "../assets/videos/1.mp4"

function UserSection() {

  return (

    <section className="py-20 bg-gray-50">

      <div
        className="max-w-7xl mx-auto px-6
                   space-y-20">


        {/* FARMER SECTION */}
        <div
          className="flex flex-col
                     lg:flex-row
                     items-center gap-12">

          {/* TEXT */}
          <div className="lg:w-1/2">

            <h3
              className="text-3xl font-bold
                         text-green-700">

              Built for Farmers
            </h3>

            <p
              className="mt-4 text-gray-600
                         text-lg">

              Manage crops, receive contracts,
              and get secure payments —
              all from one dashboard.

            </p>


            {/* LIST */}
            <ul
              className="mt-6 space-y-3
                         text-gray-600">

              <li className="flex items-center gap-2">

                <RiCheckLine
                  className="text-green-600 text-xl" />

                Easy crop listing

              </li>

              <li className="flex items-center gap-2">

                <RiCheckLine
                  className="text-green-600 text-xl" />

                Contract notifications

              </li>

              <li className="flex items-center gap-2">

                <RiCheckLine
                  className="text-green-600 text-xl" />

                Payment tracking

              </li>

            </ul>

          </div>


          {/* VIDEO */}
          <div className="lg:w-1/2 w-full">

            <div
              className="rounded-xl shadow-lg
                         hover:scale-105
                         transition duration-500">

              <video
                className="w-full rounded-xl"
                autoPlay
                loop
                muted
                playsInline>

                <source
                  src={heroVideo}
                  type="video/mp4" />

              </video>

            </div>

          </div>

        </div>



        {/* BUYER SECTION */}
        <div
          className="flex flex-col-reverse
                     lg:flex-row
                     items-center gap-12">


          {/* VIDEO */}
          <div className="lg:w-1/2 w-full">

            <div
              className="rounded-xl shadow-lg
                         hover:scale-105
                         transition duration-500">

              <video
                className="w-full rounded-xl"
                autoPlay
                loop
                muted
                playsInline>

                <source
                  src={heroVideo}
                  type="video/mp4" />

              </video>

            </div>

          </div>


          {/* TEXT */}
          <div className="lg:w-1/2">

            <h3
              className="text-3xl font-bold
                         text-blue-700">

              Designed for Buyers
            </h3>

            <p
              className="mt-4 text-gray-600
                         text-lg">

              Find reliable suppliers,
              negotiate prices,
              and complete purchases
              with confidence.

            </p>


            {/* LIST */}
            <ul
              className="mt-6 space-y-3
                         text-gray-600">

              <li className="flex items-center gap-2">

                <RiCheckLine
                  className="text-blue-600 text-xl" />

                Browse verified crops

              </li>

              <li className="flex items-center gap-2">

                <RiCheckLine
                  className="text-blue-600 text-xl" />

                Secure agreements

              </li>

              <li className="flex items-center gap-2">

                <RiCheckLine
                  className="text-blue-600 text-xl" />

                Payment history

              </li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  )
}

export default UserSection