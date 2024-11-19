// Images
const escapeBG = '/assets/imgs/Scene5/The_eascape_background_s5.webp';
const spaceShip = '/assets/imgs/Scene5/SpaceShip.webp';
const UFO = '/assets/imgs/Scene5/UFO.webp';

export default function PilotFalcon() {
    return (
        <div className="max-h-[50vh] relative">
            <img
                src={escapeBG}
                alt="A blue and black geometric pattern illuminated by white light in a space escape way scene"
                className=" w-full"
                loading="lazy"
            />
            <img
                src={spaceShip}
                alt="A cartoon space falcon piloting the airship rapidly to escape"
                className="absolute z-10 bottom-[0.1%] left-[4%] lg:h-[120%] lg:w-[120%]  h-[90%] w-[90%] object-contain animate-wiggle animate-infinite animate-duration-[10000ms] animate-delay-1000 animate-ease-in-out"
                loading="lazy"
            />
            <img
                src={UFO}
                alt="Two purple cartoon UFOs chasing"
                className="absolute z-10 top-[0%] left-[28%] max-h-[25%] max-w-[25%] object-contain"
                loading="lazy"
            />
        </div>
    );
}
