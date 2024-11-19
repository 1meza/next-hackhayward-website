'use client'

import PropTypes from 'prop-types';
import ReactGA from 'react-ga4';

// Images
const heroMobile = '/assets/imgs/hero/HeroScene-mobile.webp';
const heroDesktop = '/assets/imgs/hero/HeroScene.webp';
const astro = '/assets/imgs/hero/Astro.webp';

Hero.propTypes = {
    preRegister: PropTypes.string.isRequired,
};

export default function Hero(props) {
    const handleClick = (platform) => {
        ReactGA.event({
            category: 'hackathon',
            action: 'Click',
            label: platform,
        });
        console.log(`Google Analytics Event: ${platform} clicked`);
    };

    return (
        <>
            <div className="bg-[#30252d] min-h-[calc(100vh-8rem)] grid grid-cols-10">
                {/* Title */}
                <div className="text-white col-[2/10] row-[1] place-content-center z-50 flex flex-col gap-3">
                    <h1 className="lg:text-8xl sm:text-6xl text-5xl max-[340px]:text-4xl font-bold z-3 max-lg:text-center font-exo2 animate-fade-up shadow-text">
                        HackHayward
                    </h1>
                    <h2 className="lg:text-4xl text-2xl mt-2 max-lg:text-center font-grotesk animate-fade-up shadow-text">
                        Hosted by:
                        <br />
                        <span className="lg:text-3xl text-xl font-thin">
                            Department of Computer Science @ CSUEB
                        </span>
                    </h2>
                    <h3 className="lg:text-4xl text-2xl max-lg:text-center font-grotesk animate-fade-up shadow-text">
                        March 2025
                    </h3>
                    {/* Call to action */}
                    <div className="flex gap-4 max-lg:justify-center mt-2 font-mono">
                        <a
                            className="bg-[#c593e9] text-white lg:h-16 lg:px-14 h-12 px-6 pr-10 hover:bg-[#cfb0e8] transition max-lg:text-sm slash-r animate-flip-up text-center flex items-center"
                            target="_blank"
                            href={props.preRegister}
                            onClick={() => handleClick('Pre-Register')}
                            rel="noopener noreferrer"
                        >
                            Pre-Register
                        </a>
                        <span className="slash-l-line animation-flip-down"></span>
                        <a
                            className="border-2 border-white text-white lg:h-16 lg:px-14 lg:py-4 h-12 px-6 pl-9 hover:bg-gray-700 transition max-lg:text-sm slash-l animate-flip-down text-center flex items-center"
                            href="mailto:sponsor@hackhayward.com"
                            onClick={() => handleClick('Sponsor Us')}
                        >
                            Sponsor Us
                        </a>
                    </div>
                </div>
                {/* Artwork */}
                <div className="col-[1/11] row-[1] place-self-end ">
                    <div className="relative">
                        <picture>
                            <source
                                srcSet={heroMobile}
                                media="(max-width: 26.5625rem)"
                            />
                            <img
                                src={heroDesktop}
                                alt="A space cave background scene with warm yellow lighting"
                                className="object-contain max-h-[calc(100vh-2rem)]"
                            />
                        </picture>
                        <img
                            src={astro}
                            alt="A cartoon astronaut falcon mascot in a space suit, floating in space"
                            className="absolute bottom-[1%] right-[3%] h-[80%] w-[80%] object-contain animate-wiggle animate-infinite animate-duration-[10000ms] animate-delay-1000 animate-ease-in-out"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}