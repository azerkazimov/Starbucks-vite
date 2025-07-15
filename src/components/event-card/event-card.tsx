
import Button from "../ui/button/button";
import "./event-card.css"

interface EventCardProps {
  event: {
    img: string;
    title: string;
  };
}

export default function EventCard({event}: EventCardProps) {
    return (
        <div className="event-card">
            <div className="event-card-overlay"></div>
            <img src={event?.img} alt="cup" className="card-image"/>
            <h3 className="card-title">{event?.title}</h3>
            <Button>More</Button>
        </div>
    );
}