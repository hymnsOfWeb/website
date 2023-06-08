import Link from "next/link";
import { ConstructionLottie } from "./Construction-lottie";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export default function Home() {
  return (
    <section id="home">
      <main>
        <h2>
          <span>Under Development</span>
        </h2>
        <h1>
          <span>Hymns</span>
          <span>Of</span>
          <span>Web</span>
        </h1>
        <p className="about">
          We are a group of passionate freelancers that build awesome and cool websites. We try to use the best and most
          efficient modern day practices to build your websites while also making your websites fun and interactive :)
        </p>
        <ConstructionLottie className="cons-lottie" />

        <p className="work">Want to work with us?</p>
        <Link href="/" className="whatsapp">
          <BsWhatsapp />
          <span>Whatsapp</span>
        </Link>
        <Link href="/" className="insta">
          <BsInstagram />
          <span>Instagram</span>
        </Link>
      </main>
    </section>
  );
}
