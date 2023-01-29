import './style.sass'

import { useState, ChangeEvent } from 'react';
import { FiSearch } from 'react-icons/Fi'
import { products } from '../../data/products';
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