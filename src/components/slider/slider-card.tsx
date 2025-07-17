import type { Menu } from "@/types/menu";
import Button from "../ui/button/button";
import "./slider.css";
import { useProducts } from "@/store/use-products";

export default function SliderCard({ coffee }: { coffee: Menu }) {
  const {addProduct}=useProducts()
  return (
    <div className="slider-item">
      <div className="slider-icon">
        <div className="slider-bounce" />
        <img src={coffee.img} alt="icon" />
      </div>
      <div className="slider-heading">
        <div className="slider-title">
          <h4>{coffee.name}</h4>
        </div>
        <div className="slider-description">
          <span>{coffee.description}</span>
        </div>
        <div className="slider-price">
          <span className="price">{coffee.price}</span>
          <span className="capacity">{coffee.capacity}ml</span>
        </div>
        <Button onClick={() => addProduct(coffee)}>Buy now</Button>
      </div>
    </div>
  );
}
