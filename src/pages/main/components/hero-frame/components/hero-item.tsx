import "./hero-item.css";

interface HeroItemProps {
  image: string;
  title: string;
  description: string;
}

export default function HeroItem({ image, title, description }: HeroItemProps) {
  return (
    <div className="hero-item">
      <div className="hero-icon">
        <div className="bounce" />
        <img src={image} alt="icon" />
      </div>
      <div className="hero-heading">
        <div className="hero-title">
          <h4>{title}</h4>
        </div>
        <div className="hero-description">
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
}
