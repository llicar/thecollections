import Header from "../../components/header";
import "./styles.sass"

import { products, ProductTypes } from "../../data/products";
import { useEffect, useState, useReducer } from "react";
import { useParams } from "react-router-dom";
import Cart, { ICartItem } from "../../services/cart"
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function Product() {

    const { id } = useParams();
    const navigate = useNavigate()

    const [product, setProduct] = useState<ProductTypes>()
    const [productAmout, setProductAmout] = useState<number>(1)
    const [totalPrice, setTotalPrice] = useState<number>()
    const [size, setSize] = useState<string>()
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0)

    useEffect(() => {
        function getProduct() {
            const p = products.find(product => product.id === Number(id))
            setProduct(p)
            setTotalPrice(p?.price)
        }
        getProduct()
    }, [id])

    function getTotalPrice(amout: number, price: number) {
        setProductAmout(amout)
        setTotalPrice(Number(amout * price))
    }

    function handleAddItemCart(product: ProductTypes) {
        const itemCart: ICartItem = {
            ...product,
            amout: productAmout,
            totalPrice: totalPrice,
            size: size
        }
        if (size) {
            try {
                Cart.addItem(itemCart)
                forceUpdate()
                toast("Produto adicionado à sacola", { type: "success", theme: "light" });
            } catch (err: any) {
                toast(err.message, { type: "error", theme: "light" });
            }
        } else {
            toast("Selecione um tamanho", { type: "error", theme: "light" });
        }

    }

    function handlePuchaseNow(product: ProductTypes) {
        const itemCart: ICartItem = {
            ...product,
            amout: productAmout,
            totalPrice: totalPrice,
            size: size
        }
        if (size) {
            try {
                Cart.addItem(itemCart)
                navigate('/cart')
            } catch (err: any) {
                toast(err.message, { type: "error", theme: "light" });
            }
        } else {
            toast("Selecione um tamanho", { type: "error", theme: "light" });
        }

    }

    return (
        <>
            <Header titleColor="#000" bg="#fff"></Header>
            <div style={{ marginTop: "20vh", justifyContent: "center", display: "flex" }}>
                <div className="container__product">

                    <div className="product__figure">
                        <img src={product?.imageImport} />
                        <p>
                            {product?.description}
                        </p>
                    </div>

                    <div className="container__info">
                        <div className="product__info">
                            <h2>
                                {product?.name}
                            </h2>

                            <div className="container__select__size">
                                <p className="tag__label">Selecione o tamanho</p>
                                <div className="container__radios">
                                    <div className="field__size">
                                        <input type="radio" id="p" value="P" name="size_product" onChange={(e) => setSize(e.target.value)} />
                                        <label htmlFor="p">P</label>
                                    </div>
                                    <div className="field__size">
                                        <input type="radio" id="m" value="M" name="size_product" onChange={(e) => setSize(e.target.value)} />
                                        <label htmlFor="m">M</label>
                                    </div>
                                    <div className="field__size">
                                        <input type="radio" id="g" value="G" name="size_product" onChange={(e) => setSize(e.target.value)} />
                                        <label htmlFor="g">G</label>
                                    </div>
                                    <div className="field__size">
                                        <input type="radio" id="gg" value="GG" name="size_product" onChange={(e) => setSize(e.target.value)} />
                                        <label htmlFor="gg">GG</label>
                                    </div>
                                </div>

                            </div>

                            <div className="product__amout">
                                <label htmlFor="productAmout" className="tag__label"> Quantidade</label>
                                <input type="number" min={1} id="productAmout" defaultValue={1} onChange={(e) => getTotalPrice(Number(e.target.value), product?.price!)} />
                            </div>

                            <div className="product__info__price">
                                <p>R${totalPrice?.toFixed(2)}</p>
                            </div>
                        </div>

                        <div className="container__puchase__button">
                            <button className="puchase__now" onClick={() => handlePuchaseNow(product!)}>Comprar Agora</button>
                            <button className="add__cart" onClick={() => handleAddItemCart(product!)}>Adicionar ao carrinho</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;