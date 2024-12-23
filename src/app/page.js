'use client'
import Hero from "./components/Hero";
import Header from "./components/Header";
import Doctorsection from "./components/Doctorsection";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Doctorsection home={true} />
    </div>
  );
}
