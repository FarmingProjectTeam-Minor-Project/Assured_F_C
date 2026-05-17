import {
  RiGroupLine,
  RiMoneyRupeeCircleLine,
  RiShieldCheckLine,
  RiBankCardLine,
  RiDashboardLine,
  RiNotificationLine,
  RiSmartphoneLine,
  RiLockLine,
  RiCustomerServiceLine,
  RiBarChartLine,
  RiGlobalLine,
  RiTimeLine
} from "react-icons/ri"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Features() {

  const features = [

    {
      icon: <RiGroupLine />,
      title: "Assured Buyers",
      description: "Guaranteed buyers for every farmer.",
      color: "green"
    },

    {
      icon: <RiMoneyRupeeCircleLine />,
      title: "Fair Pricing",
      description: "Transparent competitive pricing.",
      color: "blue"
    },

    {
      icon: <RiShieldCheckLine />,
      title: "Secure Contracts",
      description: "Legally binding digital agreements.",
      color: "purple"
    },

    {
      icon: <RiBankCardLine />,
      title: "Fast Payments",
      description: "Secure and instant transfers.",
      color: "orange"
    },

    {
      icon: <RiDashboardLine />,
      title: "User Dashboards",
      description: "Manage crops and contracts easily.",
      color: "red"
    },

    {
      icon: <RiNotificationLine />,
      title: "Notifications",
      description: "Real-time platform updates.",
      color: "yellow"
    }
  ]


  const advancedFeatures = [

    {
      icon: <RiSmartphoneLine />,
      title: "Mobile Friendly",
      description: "Use on any device.",
      color: "green"
    },

    {
      icon: <RiLockLine />,
      title: "Secure Data",
      description: "Encrypted storage.",
      color: "blue"
    },

    {
      icon: <RiCustomerServiceLine />,
      title: "24/7 Support",
      description: "Always available.",
      color: "purple"
    },

    {
      icon: <RiBarChartLine />,
      title: "Analytics",
      description: "Business insights.",
      color: "orange"
    },

    {
      icon: <RiGlobalLine />,
      title: "Multi Language",
      description: "Regional support.",
      color: "red"
    },

    {
      icon: <RiTimeLine />,
      title: "Quick Setup",
      description: "Start in minutes.",
      color: "yellow"
    }
  ]


  return (

    <>
    
      <Navbar />


      {/* HERO */}
      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1
            className="text-4xl md:text-6xl
                       font-bold text-gray-800
                       mb-6">

            Features of Assured Contract Farming

          </h1>

          <p
            className="text-lg text-gray-600
                       max-w-2xl mx-auto">

            Discover the powerful features
            that make our platform the trusted
            choice for farmers and buyers.

          </p>

        </div>

      </section>



      {/* FEATURES */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <div className="text-center mb-14">

            <h2
              className="text-3xl md:text-4xl
                         font-bold text-gray-800">

              Why Choose Our Platform?

            </h2>

            <p
              className="mt-3 text-gray-600
                         max-w-2xl mx-auto">

              Empowering farmers and buyers
              through technology and trust.

            </p>

          </div>


          {/* GRID */}
          <div
            className="grid sm:grid-cols-2
                       lg:grid-cols-3 gap-8">

            {
              features.map((feature, index) => (

                <div
                  key={index}
                  className="p-6 rounded-xl
                             shadow-lg
                             hover:shadow-2xl
                             hover:scale-105
                             transition
                             bg-gray-50">

                  <div
                    className="text-5xl mb-4">

                    {feature.icon}

                  </div>

                  <h3
                    className="font-semibold
                               text-xl">

                    {feature.title}

                  </h3>

                  <p
                    className="mt-2 text-gray-600">

                    {feature.description}

                  </p>

                </div>

              ))
            }

          </div>

        </div>

      </section>



      {/* ADVANCED FEATURES */}
      <section className="py-24 bg-white">

        <div
          className="max-w-5xl mx-auto
                     px-6 text-center">

          <h2
            className="text-4xl font-bold
                       text-gray-800 mb-3">

            Advanced Features

          </h2>

          <p
            className="text-gray-600 mb-14">

            Smart tools for better
            contract management.

          </p>


          {/* INNER BOX */}
          <div
            className="rounded-2xl shadow-lg
                       p-12 bg-white
                       hover:bg-green-50
                       hover:scale-105
                       transition-all duration-300">

            <div
              className="grid grid-cols-1
                         md:grid-cols-2
                         gap-12 text-left">

              {
                advancedFeatures.map((item, index) => (

                  <div
                    key={index}
                    className="flex gap-4 items-start">

                    <div
                      className="text-4xl">

                      {item.icon}

                    </div>

                    <div>

                      <h3
                        className="font-semibold
                                   text-lg">

                        {item.title}

                      </h3>

                      <p className="text-gray-600">

                        {item.description}

                      </p>

                    </div>

                  </div>

                ))
              }

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>
  )
}

export default Features