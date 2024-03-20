'use client'
import Image from "next/image";

export default function Home() {
  const refresh = () =>{
    console.log('w');
    
  }
  return (
    <>
      <h1>HELP TC</h1>
      <button onClick={refresh}>CLICK</button>
    </>
  );
}
