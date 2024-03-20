
import Homesection from "@/components/Homesection";
import Mapsection from "@/components/Mapsection";
import Link from "next/link";

export default function Home() {
  return (
    <main  className=" relative">
<Mapsection/>

<Link className=" absolute  top-4 start-4" href="/About">ABOUT</Link>
    </main>
  );
}
