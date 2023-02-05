import { useReducer } from "react"
import CartItem from "../../components/cartItem";
import Header from "../../components/header";
import Cart from "../../services/cart";
import { ICartItem } from "../../services/cart"
import { HiOutlineEmojiSad } from "react-icons/hi"


import './style.sass'
import { Link } from "react-router-dom";


function CartComponent() {

    const cartItens: ICartItem[] = Cart.getCart()
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0)

    return (
        <>
            <Header bg="#fff" titleColor="#000"></Header>
            <div className="page__cart__container">
                {cartItens.length === 0 ?
                    <h1 style={{ fontFamily: 'poppins', margin: '0 auto' }}>A sacola está vazia &nbsp;&nbsp;<HiOutlineEmojiSad /></h1>
                    :
                    <>
                        <div className="cart__container__itens">
                            <h2>Minha sacola ({cartItens.length}) </h2>
                            {
                                cartItens.map(item => {
                                    return (
                                        <div className="cart__box__itens">
                                            <div className="cart__product__card">
                                                <CartItem showAmout={false} item={item}></CartItem>
                                            </div>
                                            <div className="cart__actions__item">
                                                <div className="cart__remove__item">
                                                    <button onClick={() => {
                                                        Cart.removeItem(item.id, item.size)
                                                        forceUpdate()
                                                    }}>
                                                        Remover Item
                                                    </button>
                                                </div>
                                                <div className="cart__amout__item">
                                                    <input type="number" min={1} defaultValue={item.amout} onChange={(e) => {
                                                        Cart.updateAmoutItem(item.id, Number(e.target.value))
                                                        forceUpdate()
                                                    }} />
                                                </div>
                                                <div className="cart__total__item">
                                                    <p><span style={{ color: '#6F6F6F' }}>Total</span> R${(item.amout * item.price).toFixed(2)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="cart__info__container">
                            <h2>Total da sacola: <span style={{ fontFamily: "poppins-semibold", textDecoration: 'underline' }}>R${Cart.getTotal().toFixed(2)}</span></h2>
                            <Link to="/checkout" className="cart__info--proceed">
                                Prosseguir
                            </Link>
                            <Link className="cart__info--back" to={'/explorer'}>
                                Voltar à loja
                            </Link>
                        </div>
                    </>
                }
            </div>
        </>
    );
}

export default CartComponent;