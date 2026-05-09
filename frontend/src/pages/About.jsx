import {
  RiLeafLine,
  RiShieldCheckLine,
  RiTeamLine,
  RiGlobalLine,
  RiPlantLine,
  RiBankCardLine
} from "react-icons/ri"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function About() {

  const features = [

    {
      icon: <RiLeafLine />,
      title: "Smart Agriculture",
      description:
        "Helping farmers connect directly with buyers using technology."
    },

    {
      icon: <RiShieldCheckLine />,
      title: "Secure Contracts",
      description:
        "Transparent and trusted agreements between farmers and buyers."
    },

    {
      icon: <RiTeamLine />,
      title: "Strong Community",
      description:
        "Building a reliable ecosystem for agriculture and trade."
    }
  ]


  const goals = [

    {
      icon: <RiPlantLine />,
      title: "Empower Farmers"
    },

    {
      icon: <RiGlobalLine />,
      title: "Expand Market Reach"
    },

    {
      icon: <RiBankCardLine />,
      title: "Ensure Secure Payments"
    }
  ]


  return (

    <>

      <Navbar />


      {/* HERO */}
      <section
        className="bg-linear-to-r
                   from-green-700
                   to-emerald-500
                   text-white py-24">

        <div
          className="max-w-7xl mx-auto
                     px-6 text-center">

          <h1
            className="text-4xl md:text-6xl
                       font-bold mb-6">

            About Assured Contract Farming

          </h1>

          <p
            className="text-lg md:text-xl
                       max-w-3xl mx-auto
                       text-green-100">

            Bridging the gap between farmers
            and buyers through secure,
            transparent, and technology-driven
            agriculture solutions.

          </p>

        </div>

      </section>



      {/* MISSION & VISION */}
      <section className="py-20 bg-white">

        <div
          className="max-w-7xl mx-auto
                     px-6
                     grid md:grid-cols-2
                     gap-10">

          {/* MISSION */}
          <div
            className="bg-green-50
                       p-10 rounded-2xl
                       shadow-lg">

            <h2
              className="text-3xl font-bold
                         text-green-700 mb-4">

              Our Mission

            </h2>

            <p
              className="text-gray-600
                         leading-relaxed">

              Our mission is to create a
              trustworthy digital platform
              where farmers and buyers can
              connect directly, ensuring fair
              pricing, secure contracts,
              and timely payments.

            </p>

          </div>



          {/* VISION */}
          <div
            className="bg-emerald-50
                       p-10 rounded-2xl
                       shadow-lg">

            <h2
              className="text-3xl font-bold
                         text-emerald-700 mb-4">

              Our Vision

            </h2>

            <p
              className="text-gray-600
                         leading-relaxed">

              We envision a future where
              agriculture becomes more
              transparent, efficient,
              and profitable through
              digital innovation and
              smart farming ecosystems.

            </p>

          </div>

        </div>

      </section>



      {/* FEATURES */}
      <section className="py-20 bg-gray-100">

        <div
          className="max-w-7xl mx-auto
                     px-6">

          <div className="text-center mb-14">

            <h2
              className="text-4xl font-bold
                         text-gray-800">

              Why We Exist

            </h2>

            <p
              className="mt-4 text-gray-600
                         max-w-2xl mx-auto">

              We are building a modern
              agricultural ecosystem
              powered by trust and technology.

            </p>

          </div>


          <div
            className="grid md:grid-cols-3
                       gap-8">

            {
              features.map((item, index) => (

                <div
                  key={index}
                  className="bg-white p-8
                             rounded-2xl
                             shadow-lg
                             hover:scale-105
                             transition">

                  <div
                    className="text-5xl
                               text-green-600 mb-5">

                    {item.icon}

                  </div>

                  <h3
                    className="text-2xl
                               font-semibold mb-3">

                    {item.title}

                  </h3>

                  <p
                    className="text-gray-600">

                    {item.description}

                  </p>

                </div>

              ))
            }

          </div>

        </div>

      </section>



      {/* GOALS */}
      <section className="py-20 bg-white">

        <div
          className="max-w-6xl mx-auto
                     px-6 text-center">

          <h2
            className="text-4xl font-bold
                       text-gray-800 mb-12">

            Our Goals

          </h2>


          <div
            className="grid sm:grid-cols-2
                       md:grid-cols-3
                       gap-8">

            {
              goals.map((goal, index) => (

                <div
                  key={index}
                  className="bg-green-50
                             p-8 rounded-2xl
                             shadow hover:shadow-xl
                             transition">

                  <div
                    className="text-5xl
                               text-green-600
                               flex justify-center mb-4">

                    {goal.icon}

                  </div>

                  <h3
                    className="text-xl
                               font-semibold">

                    {goal.title}

                  </h3>

                </div>

              ))
            }

          </div>

        </div>

      </section>



      {/* CTA */}
      <section
        className="py-20
                   bg-linear-to-r
                   from-green-700
                   to-emerald-500
                   text-white text-center">

        <div
          className="max-w-4xl mx-auto
                     px-6">

          <h2
            className="text-4xl font-bold
                       mb-4">

            Join the Future of Farming

          </h2>

          <p
            className="text-green-100
                       mb-8">

            Become part of a trusted
            agriculture platform that empowers
            both farmers and buyers.

          </p>

          <button
            className="bg-white
                       text-green-700
                       px-8 py-3
                       rounded-lg
                       font-semibold
                       hover:bg-green-100
                       transition">

            Get Started

          </button>

        </div>

      </section>



      <Footer />

    </>
  )
}

export default About