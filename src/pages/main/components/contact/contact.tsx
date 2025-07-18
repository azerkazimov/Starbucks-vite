import { Instagram, Phone } from "lucide-react";
import "./contact.css";
import Sticker from "@/components/sticker/sticker";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 contact-wrapper">
            <div className="contact-content">
              <h2>
                Our <span className="highlight">Contact</span>
              </h2>
              <p>
                Have time to buy the most harmonious drinks in the new Starbucks
                coffee and don't forget about the discount!
              </p>
              <div className="sosial-items">
                <div className="sosial-item">
                  <Instagram size={52} />
                  <span>@supercoffee</span>
                </div>
                <div className="sosial-item">
                  <Phone size={52} />
                  <span>+7-999-999-99-99</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="contact-image-wrapper">
              <Sticker
                sign={"We have"}
                size={"186"}
                top={"10px"}
                left={"45%"}
              />
              <img src="/banner.jpg" alt="starbuck" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
