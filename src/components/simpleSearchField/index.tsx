import './style.sass'

import { FiSearch } from 'react-icons/fi'
import { useSearchParams } from 'react-router-dom';

export function SimpleSearchField() {

    const [searchParams, setSearchParams] = useSearchParams()

    return (
        <div id="simpleSearch">
            <div id="simpleSearchField" >
                <input type="text" onChange={(e) => setSearchParams({ name: e.target.value })} placeholder="Buscar..."></input>
                <div><FiSearch size="20" /></div>
            </div>
        </div >

    )
}