import { Link } from "react-router-dom";
import { ProductTypes } from "../../data/products";
import "./style.sass";

type ProductDataType = {
    productData: ProductTypes
}

export default function ProductCard({ productData }: ProductDataType) {

    return (
        <>
            <div className="product-card-container">
                <div className="product-card-image">
                    <Link className="overlay" to={`/product/${productData.id}`}>
                        <p>Comprar agora</p>
                    </Link>
                    <img src={productData.imageImport} alt="" />

                </div>
                <div className="product-card-name">
                    <p>{productData.name}</p>
                </div>
                <div className="product-card-price">
                    <div className="price">
                        <p>{`R$ ${productData.price} `}</p>
                    </div>
                </div>
            </div>
        </>
    )
}