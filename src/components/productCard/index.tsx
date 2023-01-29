import { Link } from "react-router-dom";
import { ProductTypes } from "../../data/products";
import "./style.sass";

type ProductDataType = {
    productData: ProductTypes
}

export default function ProductCard({ productData }: ProductDataType) {

    function getImgUrl(urlPath: string) {
        return new URL(urlPath, import.meta.url).href
    }
    const url = getImgUrl(`../../assets/images/products/${productData.image}`)

    return (
        <>
            <div className="product-card-container">
                <div className="product-card-image" style={{ backgroundImage: `url(${url})` }}>
                    <Link className="filter" to={`/product/${productData.id}`}>
                    </Link>
                    <Link className="puchase__now__link" to={`/product/${productData.id}`}>
                        Comprar agora
                    </Link>

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