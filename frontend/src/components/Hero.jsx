import heroVideo from "../assets/videos/1.mp4"

function Hero() {

  return (

    <section className="bg-gray-100 py-20">

      <div
        className="max-w-7xl mx-auto px-6
                   flex flex-col-reverse md:flex-row
                   items-center gap-10">

        {/* TEXT */}
        <div className="md:w-1/2 text-center md:text-left">

          <h1
            className="text-4xl md:text-6xl
                       font-bold text-gray-800">

            Assured Contract Farming
          </h1>

          <p
            className="mt-6 text-lg text-gray-600
                       max-w-xl mx-auto md:mx-0">

            Connecting farmers and buyers through secure contracts,
            transparent pricing, and reliable payments.

          </p>

          <div
            className="mt-8 flex justify-center
                       md:justify-start gap-6">

            <button
              className="px-8 py-3 bg-green-600
                         text-white rounded-lg
                         hover:bg-green-700 transition">

              Get Started
            </button>

            <button
              className="px-8 py-3 border
                         border-green-600 text-green-600
                         rounded-lg hover:bg-green-50 transition">

              Learn More
            </button>

          </div>

        </div>


        {/* VIDEO */}
        <div
          className="md:w-1/2 w-full
                     rounded-xl shadow-lg">

          <video
            className="w-full rounded-xl"
            autoPlay
            loop
            muted
            playsInline>

            <source src={heroVideo} type="video/mp4" />

          </video>

        </div>

      </div>

    </section>
  )
}

export default Hero