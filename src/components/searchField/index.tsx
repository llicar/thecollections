import './style.sass'

import { FocusEvent, useState, ChangeEvent } from 'react';
import { FiSearch } from 'react-icons/Fi'
import { useAppContext } from '../../context/searchIsVisible';
import { BiRightArrowAlt } from 'react-icons/bi'
import { VscChromeClose } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

import thumbF from '../../assets/images/products/female/thumb-f.jpg'
import thumbM from '../../assets/images/products/male/thumb-m.jpg'

import ProductCard from '../productCard/index'
import { products } from '../../data/products';


type getStyle = {
    field: string;
    input: string;
}



export function SearchField() {

    const { searchIsVisible, setSearchIsVisible } = useAppContext()
    const [query, setQuery] = useState<string>('')

    const filterData = products.filter(p => {
        return p.name.toLowerCase().includes(query.toLowerCase())
    })

    const setFilterData = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    let getStyle: getStyle = {
        field: searchIsVisible ? "fieldFocused" : "",
        input: searchIsVisible ? "inputFocused" : "",
    }
    function getImgUrl(urlPath: string) {
        return new URL(urlPath, import.meta.url).href
    }

    const handlerFocus = (e: FocusEvent<HTMLInputElement>) => {
        setSearchIsVisible(true)
    }

    return (
        <div id="search">
            <div id="searchField" className={getStyle.field}>
                <input type="text" className={getStyle.input} onFocus={handlerFocus} onChange={setFilterData} placeholder="Calças, jaquetas, motelons, camisas e mais..."></input>
                <div><FiSearch size="20" /></div>
            </div>
            {
                searchIsVisible ?
                    <div className="containerSearchResult">

                        <header>
                            <button onClick={() => { setSearchIsVisible(false) }}> <VscChromeClose size={20} /></button>
                        </header>

                        <div className="searchResult">
                            <div className="content">

                                {!query ?
                                    <div className="boxGenre">

                                        <div className="contentGenre">
                                            <div>
                                                <Link to="/explorer?genre=female">
                                                    <img src={thumbF}></img>
                                                </Link>
                                            </div>
                                            <p>Feminino</p>
                                        </div>

                                        <div className="contentGenre">
                                            <Link to="/explorer?genre=male">
                                                <img src={thumbM}></img>
                                            </Link>
                                            <p>Masculino</p>
                                        </div>
                                    </div> :
                                    filterData.length ?
                                        <div style={{ overflowX: 'scroll', display: 'flex' }}>
                                            {
                                                filterData.map((f) => {
                                                    return (
                                                        <div className="container-products">
                                                            <ProductCard productData={f}></ProductCard>
                                                        </div>

                                                    )
                                                })
                                            }
                                        </div>

                                        : <p className="notFound">Desculpe, não encontrei esse produto :(</p>

                                }
                            </div>

                            <div className="explore">
                                <Link className="explore__button" to="/explorer">Explorar<BiRightArrowAlt size={20} /></Link>

                            </div>

                        </div>

                    </div > : false
            }
        </div >

    )
}