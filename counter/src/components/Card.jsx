import Counter from "./Counter";
import Image from "./Image";
import Product from "./Product";

export default function Card() {
    return (
        <>
            <div className="product-container">
                <Image/>
                <Product/>
                <Counter/>
      </div>
        </>
    );
}
