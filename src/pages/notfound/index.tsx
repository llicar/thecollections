import "./style.sass"

import notfoundIcon from '../../assets/images/notfound.png'

function NotFound() {
    return (
        <>
            <div className="notfound-container">
                <img src={notfoundIcon}></img>
                <h2>Página não encontrada</h2>
            </div>
        </>
    );
}

export default NotFound;
