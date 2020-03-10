import React from 'react';
import './Home.css';
import VideoSection from '../../components/VideoSection/VideoSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import HistorySection from '../../components/HistorySection/HistorySection';

const Home = () => (
  <div className="home page">
    <h1>Home</h1>
    <Hero />
    <HistorySection />
    <VideoSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Home;
