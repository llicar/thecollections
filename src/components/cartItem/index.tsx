import { ICartItem } from "../../services/cart";

import "./styles.sass"

type CartItemTypes = {
    item: ICartItem
    showAmout: Boolean
}

function CartItem(props: CartItemTypes) {
    return (
        <>
            <div className="cartItem__box">
                <div className="cartItem__img__box">
                    <img src={props.item.imageImport} />
                </div>
                <div className="cartItem__info__box">
                    <p className="cartItem__title">
                        {props.item.name}
                    </p>
                    <p className="cartItem__price">
                        R${props.item.price}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <p className="cartItem__size">
                            {props.item.size}
                        </p>
                        {
                            props.showAmout ?
                                <p className="cartItem__amout">
                                    {props.item.amout}
                                </p> : false
                        }

                    </div>

                </div>
            </div>
        </>

    );
}

export default CartItem;