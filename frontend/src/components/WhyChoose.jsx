import {
  RiGroupLine,
  RiMoneyRupeeCircleLine,
  RiShieldCheckLine,
  RiBankCardLine
} from "react-icons/ri"

function WhyChoose() {

  return (

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

            Empowering farmers and buyers through technology and trust.

          </p>

        </div>


        {/* CARDS */}
        <div
          className="grid sm:grid-cols-2
                     lg:grid-cols-4 gap-8 text-center">

          {/* CARD 1 */}
          <div
            className="p-6 shadow-lg rounded-xl
                       hover:scale-105 transition">

            <RiGroupLine
              className="text-4xl text-green-600 mx-auto" />

            <h3 className="mt-4 font-semibold text-lg">
              Assured Buyers
            </h3>

            <p className="mt-2 text-gray-600">

              Guaranteed buyers for every registered farmer.

            </p>

          </div>


          {/* CARD 2 */}
          <div
            className="p-6 shadow-lg rounded-xl
                       hover:scale-105 transition">

            <RiMoneyRupeeCircleLine
              className="text-4xl text-blue-600 mx-auto" />

            <h3 className="mt-4 font-semibold text-lg">
              Fair Pricing
            </h3>

            <p className="mt-2 text-gray-600">

              Transparent and competitive pricing.

            </p>

          </div>


          {/* CARD 3 */}
          <div
            className="p-6 shadow-lg rounded-xl
                       hover:scale-105 transition">

            <RiShieldCheckLine
              className="text-4xl text-purple-600 mx-auto" />

            <h3 className="mt-4 font-semibold text-lg">
              Secure Contracts
            </h3>

            <p className="mt-2 text-gray-600">

              Digitally signed and verified agreements.

            </p>

          </div>


          {/* CARD 4 */}
          <div
            className="p-6 shadow-lg rounded-xl
                       hover:scale-105 transition">

            <RiBankCardLine
              className="text-4xl text-orange-600 mx-auto" />

            <h3 className="mt-4 font-semibold text-lg">
              Fast Payments
            </h3>

            <p className="mt-2 text-gray-600">

              Direct and timely bank transfers.

            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default WhyChoose