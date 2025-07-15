
import ShadowGreen from "@/components/ui/shadows/shadow";
import "./products.css";
import Slider from "@/components/slider/slider";

export default function Products() {
  return (
    <section>
      <div className="container">
        <div className="col-10">
          <div className="row">
            <div className="col-12 col-md-6 title-wrapper">
              <h2 className="product-title">
                New Our <span className="highlight">Products</span>
              </h2>
              <ShadowGreen size="390px" left="20%" top="-40px" />
            </div>
            <div className="col-12 col-md-6 product-content">
              <p className="product-description">
                Have time to buy the most harmonious drinks in the new Starbucks
                coffee and don't forget about the discount! Starbucks coffee and
                don't forget about the discount!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Slider />
    </section>
  );
}
