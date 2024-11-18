import Image from "next/image";

// Components
import NavBar from './components/home/NavBar';
import Hero from './components/home/Hero';

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Hero />
    </div>
  );
}
