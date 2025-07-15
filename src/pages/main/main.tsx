import Delicios from "./components/delicios/delicios";
import Events from "./components/events/event";
import HeroFrame from "./components/hero-frame/hero-frame";
import Hero from "./components/hero/hero";
import Products from "./components/products/products";
import "./main.css";

export default function Main() {

  return (
      <div className="main">
        <Hero/>
        <HeroFrame/>
        <Delicios/>
        <Products/>
        <Events/>
      </div>

  );
}
