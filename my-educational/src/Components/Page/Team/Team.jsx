import React from "react"
import TeamCard from "./TeamCard"
import "./team.css"
import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"



const Team = () => {
  return (
    <>


      <Header
        text2={'Team'}
        backgroundImage='Img/team-page.jpg'
        text3={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi.'} />
      <main className="main-team">
        <section className='team padding container'>

          <div className='heading-info-about'>
            <h3 className='title-heading-text-1'>Our Team Members</h3>
            <h2 className='title-heading-text-2'>Experienced staff with high technical knowledge</h2>
          </div>

          <div className='contact'>
            <TeamCard />
          </div>
        </section>
      </main>

      <Footer />


    </>
  )
}

export default Team
