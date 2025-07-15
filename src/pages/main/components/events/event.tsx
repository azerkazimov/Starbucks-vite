

import ShadowGreen from "@/components/ui/shadows/shadow";
import {events} from "../../../../data/events"

import "./event.css";
import EventCard from "@/components/event-card/event-card";
 
export default function Events() {
  const firstLay = events.slice(0, 2);
  const secondLay = events.slice(2);

  return (
    <section className="events">
      <div className="container">
        <div className="offset-2 col-10">
          <div className="row">
            <div className="col-12 col-md-6 product-content">
              <p className="product-description">
                Only in 2021 we have made more than 100,000 orders for you, your
                loved ones, all of you, and in 2022 we are ready to destroy the
                market
              </p>
            </div>
            <div className="col-12 col-md-6 title-wrapper">
              <h2 className="product-title">
                Our New <span className="highlight">Events</span>
              </h2>
              <ShadowGreen size="390px" left="20%" top="-40px" />
            </div>
          </div>
        </div>

        <div className="events-cards">
          <div className="events-grid">
            {firstLay.map((event, index) => (
              <div key={index} className="grid-item grid-item-large">
                <EventCard event={event} />
              </div>
            ))}
            {secondLay.map((event, index) => (
              <div key={index} className="grid-item grid-item-small">
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
