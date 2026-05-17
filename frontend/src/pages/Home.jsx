import { useEffect } from "react"
import API from "../services/api"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import WhyChoose from "../components/WhyChoose"
import UserSection from "../components/UserSection"
import Impact from "../components/Impact"
import Footer from "../components/Footer"

function Home() {
    useEffect(() => {
      const testBackend = async () => {
        try {

          const response =
            await API.get("/api/test")

          console.log(
            "Backend Response:",
            response.data
          )

        }

        catch (error) {

          console.log(error)

        }
      }
      testBackend()
    }, [])

    return (
      <>
        <Navbar />
        <Hero />
        <WhyChoose />
        <UserSection />
        <Impact />
        <Footer />
      </>
    )
}

export default Home