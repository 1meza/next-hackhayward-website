'use client'

import { useEffect, useState } from 'react';
import Head from 'next/head';
import ReactGA from 'react-ga4';

// Components
import NotificationBar from './components/home/Notification';
import NavBar from './components/home/NavBar';
import Hero from './components/home/Hero';
import FAQ from './components/home/FAQ';
import AboutUs from './components/home/AboutUs';
import Footer from './components/home/Footer';
import PilotFalcon from './components/home/PilotFalcon';
import Sponsor from './components/home/Sponsor';

export default function Home() {
    // Scroll to top on load
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 1000); // Timeout due to announcements not loading right away
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
            <Head>
                <title>HackHayward</title>
                <meta name="description" content="HackHayward Spring 2025 Home Page" />
            </Head>

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
