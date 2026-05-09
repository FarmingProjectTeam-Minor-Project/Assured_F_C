import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXLine,
  RiLinkedinFill,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine
} from "react-icons/ri"

function Footer() {

  return (

    <footer
      className="bg-[#0f3920]
                 text-white
                 py-16">

      <div
        className="max-w-7xl mx-auto
                   px-6
                   grid md:grid-cols-2
                   lg:grid-cols-4 gap-12">


        {/* BRAND */}
        <div>

          <h2
            className="text-2xl font-bold
                       text-green-400">

            Assured Contract Farming
          </h2>

          <p
            className="mt-4 text-gray-300
                       leading-relaxed">

            Connecting farmers and buyers
            through secure contracts,
            transparent pricing,
            and trusted agriculture solutions.

          </p>

        </div>



        {/* QUICK LINKS */}
        <div>

          <h3
            className="text-xl font-semibold
                       mb-5">

            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">

            <li className="hover:text-green-400 transition cursor-pointer">
              Home
            </li>

            <li className="hover:text-green-400 transition cursor-pointer">
              Features
            </li>

            <li className="hover:text-green-400 transition cursor-pointer">
              How It Works
            </li>

            <li className="hover:text-green-400 transition cursor-pointer">
              Contact
            </li>

          </ul>

        </div>



        {/* CONTACT */}
        <div>

          <h3
            className="text-xl font-semibold
                       mb-5">

            Contact
          </h3>

          <ul className="space-y-4 text-gray-300">

            <li className="flex items-center gap-3">

              <RiMailLine className="text-green-400 text-xl" />

              support@acfarming.com

            </li>

            <li className="flex items-center gap-3">

              <RiPhoneLine className="text-green-400 text-xl" />

              +91 9876543210

            </li>

            <li className="flex items-center gap-3">

              <RiMapPinLine className="text-green-400 text-xl" />

              India

            </li>

          </ul>

        </div>



        {/* SOCIAL MEDIA */}
        <div>

          <h3
            className="text-xl font-semibold
                       mb-5">

            Follow Us
          </h3>

          <div className="flex gap-5 text-3xl">

            <RiFacebookFill
              className="hover:text-blue-500
                         cursor-pointer transition" />

            <RiInstagramLine
              className="hover:text-pink-500
                         cursor-pointer transition" />

            <RiTwitterXLine
              className="hover:text-gray-400
                         cursor-pointer transition" />

            <RiLinkedinFill
              className="hover:text-blue-400
                         cursor-pointer transition" />

          </div>

        </div>

      </div>



      {/* BOTTOM */}
      <div
        className="border-t border-white/10
                   mt-12 pt-6 text-center
                   text-gray-400 text-sm">

        © 2026 Assured Contract Farming.
        All rights reserved.

      </div>

    </footer>
  )
}

export default Footer