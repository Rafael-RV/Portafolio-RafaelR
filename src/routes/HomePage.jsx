
import { AboutMe } from '../components/AboutMe/AboutMe.jsx'
import { CardsComp } from '../components/Cards/cardsComp.jsx'
import { Footer } from '../components/Footer/Footer.jsx'
import { MyNavbar } from '../components/NavbarComp/MyNavbar.jsx'
import '../routes/HomePage.css'


export const HomePage = () => {

  return (

    <div>

      <MyNavbar />

      <AboutMe />

      <CardsComp />

      <Footer />

    </div>
  )
}

