import {
  RiUser3Line,
  RiStore2Line,
  RiFileList3Line,
  RiBankCardLine
} from "react-icons/ri"

function Impact() {

  return (

    <section
      className="relative py-28
                 bg-linear-to-r
                 from-[#064e3b]
                 via-green-700
                 to-emerald-500
                 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div
        className="absolute -top-32 -left-32
                   w-96 h-96
                   bg-green-400/30
                   rounded-full blur-3xl">
      </div>

      <div
        className="absolute -bottom-32 -right-32
                   w-96 h-96
                   bg-emerald-400/30
                   rounded-full blur-3xl">
      </div>


      <div
        className="relative
                   max-w-7xl mx-auto px-6
                   text-center text-white">

        {/* HEADING */}
        <h2
          className="text-4xl md:text-5xl
                     font-extrabold tracking-wide">

          Our Impact
        </h2>

        <p
          className="mt-4 max-w-2xl mx-auto
                     text-green-100 text-lg">

          Transforming agriculture through trust,
          technology, and transparency.

        </p>


        {/* STATS */}
        <div
          className="mt-20
                     grid grid-cols-2
                     lg:grid-cols-4 gap-10">


          {/* CARD 1 */}
          <div
            className="group
                       bg-white/10 rounded-3xl
                       p-8 shadow-2xl
                       hover:-translate-y-3
                       transition duration-500">

            <RiUser3Line
              className="text-5xl text-green-300
                         mx-auto
                         group-hover:scale-125
                         transition" />

            <h3
              className="mt-4 text-5xl
                         font-bold">

              5K+
            </h3>

            <p
              className="mt-2 text-green-100
                         text-lg">

              Farmers
            </p>

          </div>


          {/* CARD 2 */}
          <div
            className="group
                       bg-white/10 rounded-3xl
                       p-8 shadow-2xl
                       hover:-translate-y-3
                       transition duration-500">

            <RiStore2Line
              className="text-5xl text-blue-300
                         mx-auto
                         group-hover:scale-125
                         transition" />

            <h3
              className="mt-4 text-5xl
                         font-bold">

              3K+
            </h3>

            <p
              className="mt-2 text-green-100
                         text-lg">

              Buyers
            </p>

          </div>


          {/* CARD 3 */}
          <div
            className="group
                       bg-white/10 rounded-3xl
                       p-8 shadow-2xl
                       hover:-translate-y-3
                       transition duration-500">

            <RiFileList3Line
              className="text-5xl text-purple-300
                         mx-auto
                         group-hover:scale-125
                         transition" />

            <h3
              className="mt-4 text-5xl
                         font-bold">

              10K+
            </h3>

            <p
              className="mt-2 text-green-100
                         text-lg">

              Contracts
            </p>

          </div>


          {/* CARD 4 */}
          <div
            className="group
                       bg-white/10 rounded-3xl
                       p-8 shadow-2xl
                       hover:-translate-y-3
                       transition duration-500">

            <RiBankCardLine
              className="text-5xl text-yellow-300
                         mx-auto
                         group-hover:scale-125
                         transition" />

            <h3
              className="mt-4 text-5xl
                         font-bold">

              98%
            </h3>

            <p
              className="mt-2 text-green-100
                         text-lg">

              Success Rate
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Impact