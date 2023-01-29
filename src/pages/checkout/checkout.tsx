import Header from "../../components/header";
import Cart from "../../services/cart"
import CartItem from "../../components/cartItem";
import IdentificationForm from "./form";
import { useState } from "react"
import { BiLeftArrowAlt } from 'react-icons/bi'
import "./style.sass"
import { Link } from "react-router-dom";

function Checkout() {

    const products = Cart.getCart()

    const [formOk, setFormOk] = useState<boolean>(false);
    const [isDisable, setIsDisable] = useState<boolean>(false);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        setIsDisable(true)
        setFormOk(true)
    }

    return (
        <>
            <Header titleColor="#000" bg="#fff"></Header>
            <div className="checkout__container">
                <div className="checkout__box__container">
                    <div className="checkout__box">
                        <div className="checkout-title">
                            <h2>Produtos</h2>
                        </div>
                        <div className="checkout-products">
                            {
                                products.map((product) => {
                                    return (
                                        <div className="checkout-item">
                                            <CartItem showAmout={true} item={product} />
                                        </div>
                                    )
                                })
                            }
                            <Link className="change-bag" to={'/cart'}>
                                <BiLeftArrowAlt />
                                Rever a sacola
                            </Link>
                        </div>
                    </div>
                    <div className="checkout__box" style={{ border: !formOk ? '1px solid black' : 'none' }}>
                        <div className="checkout-title">
                            <h2>Identificação</h2>
                        </div>
                        <div className="indent-form">
                            <IdentificationForm isDisable={isDisable} onSubmit={handleSubmit} />
                        </div>
                    </div>
                    <div className="checkout__box" style={{ border: formOk ? '1px solid black' : 'none' }} >
                        <div className="checkout-title">
                            <h2>Pagamento</h2>
                        </div>
                        <div className="total-payment">
                            <div className="payment-prices">
                                <div>
                                    <p>Subtotal</p>
                                    <p>R${Cart.getTotal().toFixed(2)}</p>
                                </div>
                                <div>
                                    <p>Taxa de entrega</p>
                                    <p>R$ 18,90</p>
                                </div>
                            </div>
                            <div className="total-card">
                                <p>R${(Cart.getTotal() + 18.90).toFixed(2)}</p>
                            </div>
                        </div>

                        <div className="payment-method">
                            <div className="methdo-title">
                                <h3>Método de pagamento</h3>
                            </div>
                            <div className="custom-radio">
                                <input className="option-input" type="radio" id="cartaoDeCredito" name="radio-group" value="Cartão de crédito" />
                                <label className="option-label" htmlFor="cartaoDeCredito">Cartão de crédito</label>
                                <input className="option-input" type="radio" id="boleto" name="radio-group" value="boleto" />
                                <label className="option-label" htmlFor="boleto">Boleto</label>
                                <input className="option-input" type="radio" id="pix" name="radio-group" value="pix" />
                                <label className="option-label" htmlFor="pix">Pix</label>
                                <input className="option-input" type="radio" id="depósito" name="radio-group" value="depósito" />
                                <label className="option-label" htmlFor="depósito">Depósito</label>
                                <input className="option-input" type="radio" id="paypal" name="radio-group" value="paypal" />
                                <label className="option-label" htmlFor="paypal">Paypal</label>
                            </div>
                        </div>
                        <div className="finalize-order">
                            <Link
                                className="finalize-order-button"
                                to={isDisable ? '/thankyou' : "#"}
                                style={!formOk ? { cursor: 'not-allowed', background: '#94DEAD' } : {}}
                                onClick={() => Cart.clearCart()}
                            >
                                Finalizar pedido
                            </Link>
                        </div>
                        {
                            formOk ?
                                <div className="change-adress">
                                    <button onClick={() => {
                                        setFormOk(false)
                                        setIsDisable(false)
                                    }} >
                                        <BiLeftArrowAlt />
                                        Alterar endereço
                                    </button>
                                </div> : false
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;