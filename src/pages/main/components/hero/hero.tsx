import { Link } from "react-router-dom";
import "./hero.css";
import Button from "../../../../components/ui/button/button";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="hero-content">
              <h1 className="hero-title">
                New Cafe <br />
                by <span className="highlight">StarBucks</span>
              </h1>

              <p className="hero-text">
                Have time to buy the most harmonious drinks in the new Starbucks
                coffee and don't forget about the discount!
              </p>

              <div className="hero-btns">
                <Button >
                  <Link to="/users">
                    Select a coffee
                  </Link>
                </Button>
                <Button className='btn-secondary'>
                  <Link to="/about">
                    More
                  </Link>
                </Button>
              </div>

              <div className="counters">
                <div className="counter">
                  <p className="counter-number">
                    9k <span className="green">+</span>
                  </p>
                  <span className="counter-text">Premium Users</span>
                </div>
                <div className="counter">
                  <p className="counter-number">
                    2k <span className="green">+</span>
                  </p>
                  <span className="counter-text">Happy Customer</span>
                </div>
                <div className="counter">
                  <p className="counter-number">
                    28 <span className="green">+</span>
                  </p>
                  <span className="counter-text">Awards Winning</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="hero-image">
              <div className="sticker">
                <span>45%</span>
              </div>
              <img src="/usama.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
