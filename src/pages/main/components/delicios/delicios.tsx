import { Play } from "lucide-react";
import "./delisios.css";
import Sticker from "@/components/sticker/sticker";
import Walves from "@/components/walves/walves";

export default function Delicios() {
  return (
    <section className="delicious-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 delicious-section-left-side">
            <div className="image-wrapper">
              <Sticker
                sign={"We have"}
                size={"186"}
                top={"10px"}
                left={"45%"}
              />
              <img src="/delicious.png" alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6 delicion-wrapper">
            <div className="delicious-content">
              <h2>
                We make <span className="highlight">delicious</span>
              </h2>
              <p>
                Only in 2021 we have made more than 100,000 orders for you, your
                loved ones, all of you, and in 2022 we are ready to destroy the
                market
              </p>
              <div className="cooking-img">
                <div className="coocking-image-wrapper">
                  <img src="/cooking.png" alt="coffee" />
                  <a href="https://www.youtube.com/watch?v=fBVtXuA-xB8&list=RDfBVtXuA-xB8&start_radio=1">
                    <button className="btn play-btn">
                      <Play />
                      Cooking Process
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <Walves transform={`translateX(-40px) rotate(-4deg)`} top={"30%"} left={"-10%"} scale={"1.3"} />
          </div>
        </div>
      </div>
    </section>
  );
}
