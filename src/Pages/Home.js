import React, { useEffect } from 'react';
import StudentProfile from '../Components/StudentProfile/StudentProfile.js';
import Footer from '../shared/Footer/Footer.js';
import Header from '../shared/Header/Header.js';
import ReactGA from 'react-ga';

export default function Home() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div>
      <Header />
      <StudentProfile />
      <Footer />
    </div>
  );
}
