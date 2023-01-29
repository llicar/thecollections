import "./style.sass"
import { Link } from 'react-router-dom';

function Thankyou() {
    return (
        <>
            <div className="thanks-container">
                <h1>Compra finalizada.</h1><br />
                <h2>Obrigado por comprar na thecollections :)</h2>
                <Link className="back-to-store" to="/explorer">Voltar à loja</Link>
            </div>
        </>
    );
}

export default Thankyou;