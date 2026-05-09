import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import heroVideo from "../assets/videos/2.mp4"

import office1 from "../assets/images/1.jpeg"
import office2 from "../assets/images/2.png"
import office3 from "../assets/images/5.png"
import office4 from "../assets/images/6.png"

function Contact() {

  const officeCards = [

    {
      image: office1,
      title: "Head Office",
      description:
        "Our main office supports nearby farmers and buyers."
    },

    {
      image: office2,
      title: "Support Center",
      description:
        "24/7 assistance for registration and contracts."
    },

    {
      image: office3,
      title: "Regional Office",
      description:
        "Local support across multiple farming zones."
    },

    {
      image: office4,
      title: "Field Team",
      description:
        "On-ground assistance for farmers and buyers."
    }
  ]


  return (

    <>

      <Navbar />


      {/* HERO */}
      <section
        className="relative
                   min-h-[70vh] md:min-h-screen
                   overflow-hidden">

        {/* VIDEO */}
        <div className="absolute inset-0">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover">

            <source
              src={heroVideo}
              type="video/mp4"
            />

          </video>


          {/* OVERLAY */}
          <div
            className="absolute inset-0
                       bg-black/60">
          </div>

        </div>



        {/* CONTENT */}
        <div
          className="relative z-10
                     min-h-[70vh] md:min-h-screen
                     flex flex-col justify-center
                     text-center px-5
                     text-white
                     max-w-3xl mx-auto">

          <h1
            className="text-2xl sm:text-3xl
                       md:text-5xl
                       font-bold mb-3
                       leading-tight">

            Connect Farmers with Buyers
            for Fair Prices

          </h1>

          <p
            className="text-sm sm:text-base
                       md:text-lg
                       text-gray-200">

            We bridge the gap between farmers
            and buyers, ensuring you get the
            right prices for your crops.

          </p>

        </div>

      </section>



      {/* CONTACT INFO */}
      <section className="py-16 bg-green-50">

        <div className="max-w-7xl mx-auto px-4">

          <h3
            className="text-3xl font-bold
                       text-center mb-8">

            Contact Information

          </h3>


          <div
            className="grid grid-cols-1
                       md:grid-cols-3
                       gap-8">


            {/* PHONE */}
            <div className="text-center">

              <div
                className="bg-green-100
                           p-6 rounded-lg">

                <h4
                  className="text-xl font-semibold
                             mb-2">

                  Phone

                </h4>

                <p className="text-gray-700">

                  +91 810xxxxxxx

                </p>

              </div>

            </div>



            {/* EMAIL */}
            <div className="text-center">

              <div
                className="bg-green-100
                           p-6 rounded-lg">

                <h4
                  className="text-xl font-semibold
                             mb-2">

                  Email

                </h4>

                <p className="text-gray-700">

                  assuredfarming@example.com

                </p>

              </div>

            </div>



            {/* ADDRESS */}
            <div className="text-center">

              <div
                className="bg-green-100
                           p-6 rounded-lg">

                <h4
                  className="text-xl font-semibold
                             mb-2">

                  Address

                </h4>

                <p className="text-gray-700">

                  Indore (M.P)

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* OFFICE SECTION */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2
            className="text-3xl font-bold
                       text-center mb-12">

            Our Office & Support

          </h2>


          <div
            className="grid grid-cols-1
                       sm:grid-cols-2
                       lg:grid-cols-4
                       gap-6">

            {
              officeCards.map((card, index) => (

                <div
                  key={index}
                  className="bg-white
                             rounded-xl shadow-lg
                             overflow-hidden
                             hover:scale-105
                             transition duration-300">

                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-44 object-cover"
                  />

                  <div className="p-4">

                    <h3
                      className="font-semibold mb-2">

                      {card.title}

                    </h3>

                    <p
                      className="text-sm text-gray-600">

                      {card.description}

                    </p>

                  </div>

                </div>

              ))
            }

          </div>

        </div>

      </section>



      {/* ENQUIRY FORM */}
      <section className="py-16 bg-green-50">

        <div className="max-w-7xl mx-auto px-4">

          <h3
            className="text-3xl font-bold
                       text-center mb-8">

            Drop an Enquiry

          </h3>

          <p
            className="text-center mb-6
                       text-gray-600">

            Whether you're a farmer looking
            for better crop prices or a buyer
            seeking quality produce,
            contact us to join our network.

          </p>


          {/* FORM */}
          <form
            className="max-w-lg mx-auto
                       bg-gray-50 p-8
                       rounded-lg shadow-lg">

            {/* NAME */}
            <div className="mb-4">

              <label
                className="block text-gray-700
                           font-semibold mb-2">

                Name

              </label>

              <input
                type="text"
                required
                className="w-full px-4 py-2
                           border border-gray-300
                           rounded-lg
                           focus:outline-none
                           focus:ring-2
                           focus:ring-green-500"
              />

            </div>



            {/* EMAIL */}
            <div className="mb-4">

              <label
                className="block text-gray-700
                           font-semibold mb-2">

                Email

              </label>

              <input
                type="email"
                required
                className="w-full px-4 py-2
                           border border-gray-300
                           rounded-lg
                           focus:outline-none
                           focus:ring-2
                           focus:ring-green-500"
              />

            </div>



            {/* MESSAGE */}
            <div className="mb-4">

              <label
                className="block text-gray-700
                           font-semibold mb-2">

                Message

              </label>

              <textarea
                rows="5"
                required
                placeholder="Tell us about your farming needs or buyer inquiries..."
                className="w-full px-4 py-2
                           border border-gray-300
                           rounded-lg
                           resize-none
                           focus:outline-none
                           focus:ring-2
                           focus:ring-green-500">
              </textarea>

            </div>



            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-green-600
                         text-white py-2 px-4
                         rounded-lg
                         hover:bg-green-700
                         transition duration-300">

              Send Message

            </button>

          </form>

        </div>

      </section>



      <Footer />

    </>
  )
}

export default Contact