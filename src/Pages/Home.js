import React from 'react'
import StudentProfile from '../Components/StudentProfile/StudentProfile.js'
import Footer from '../shared/Footer/Footer.js'
import Header from '../shared/Header/Header.js'

export default function Home() {
  return (
    <div>
      <Header/>
      <StudentProfile/>
      <Footer/>
    </div>
  )
}
