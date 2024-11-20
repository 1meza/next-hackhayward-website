'use client'

// Import home styles
import "./home/home.css";

import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
//import Link from 'next/link';

// Components
import NotificationBar from './home/components/Notification';
import NavBar from './home/components/NavBar';
import Hero from './home/components/Hero';
import FAQ from './home/components/FAQ';
import AboutUs from './home/components/AboutUs';
import Footer from './home/components/Footer';
import PilotFalcon from './home/components/PilotFalcon';
import Sponsor from './home/components/Sponsor';

export default function Home() {
    // Scroll to top on load
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 500); // Timeout due to announcements not loading right away
    }, []);

    // Initialize Google Analytics
    useEffect(() => {
        const measurementId = process.env.NEXT_PUBLIC_MEASUREMENT_ID;
        if (measurementId) {
            ReactGA.initialize(measurementId);
            ReactGA.send({
                hitType: 'pageview',
                page: '/',
                title: 'Home Page',
            });
        } else {
            console.error('Google Analytics Measurement ID not found.');
        }
    }, []);

    // Notification Display
    const [display, setDisplay] = useState(false);

    // Links
    const preRegister = 'https://forms.fillout.com/t/cJH9deoDmCus';

    return (
        <>
            <header id="home" className="overflow-x-hidden">
                {display && <NotificationBar setDisplay={setDisplay} />}
                <NavBar />
            </header>

            <main className="mainBackground bg-contain bg-repeat-y overflow-x-hidden">
                <section className="border-b-8 border-[#c593e9]">
                    <Hero preRegister={preRegister} />
                </section>
                {/* About Us */}
                <section
                    className="pt-16 p-10 bg-black/50 max-w-screen-2xl:overflow-hidden"
                    id="about"
                >
                    <AboutUs />
                </section>
                {/* FAQ */}
                <section className="p-10 bg-black/50 overflow-hidden" id="faq">
                    <FAQ preRegister={preRegister} />
                </section>
                {/* Sponsor */}
                <section
                    className="pb-16 p-10 bg-black/50 overflow-hidden"
                    id="sponsor-us"
                >
                    <Sponsor />
                </section>
                {/* Scene */}
                <section className="overflow-hidden">
                    <PilotFalcon />
                </section>
            </main>
            
            {/* Footer */}
            <footer className="bg-[rgb(48,37,45)] border-t-8 border-[#c593e9] overflow-hidden">
                <Footer preRegister={preRegister} />
            </footer>
        </>
    );
}
