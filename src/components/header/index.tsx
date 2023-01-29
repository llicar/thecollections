import './style.sass'

import { RiShoppingBag2Line } from 'react-icons/ri'
import Cart from "../../services/cart"
import { Link } from 'react-router-dom'

type Header = {
    titleColor: string
    bg: string
}

function Header(props: Header) {

    const { titleColor, bg } = props
    const cartAmout = Cart.getCart().length

    return (
        <header className="header" style={{ background: bg }}>
            <div className="title"><p style={{ color: `${titleColor}` }}>thecolletions</p></div>
            <div className="cart__container">
                <p>{cartAmout}</p>
                <Link to={'/cart'}>
                    <RiShoppingBag2Line className="cart" size={40} />
                </Link>

            </div>

        </header>
    );
}

export default Header;