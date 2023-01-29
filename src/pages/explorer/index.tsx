import './style.sass'

import { SimpleSearchField } from '../../components/simpleSearchField'
import ProductCard from '../../components/productCard'
import Header from '../../components/header'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


import { products, ProductTypes } from '../../data/products'

export function Explorer() {

    const [searchParams, setSearchParams] = useSearchParams()
    const [productsFilter, setProductsFilter] = useState<ProductTypes[]>(products)

    useEffect(() => {

        function getFilterData() {
            let filterData: ProductTypes[]
            if (searchParams.get("name")) {
                filterData = products.filter(p => {
                    return searchParams.get("name") ? p.name.toLowerCase().includes(searchParams.get("name")!.toLowerCase()) : null
                })
            } else if (searchParams.get('genre')) {
                filterData = products.filter(p => p.genre == searchParams.get('genre'))
            } else {
                filterData = products
                setSearchParams('')
            }
            setProductsFilter(filterData)

        }

        getFilterData()

    }, [searchParams])

    return (
        <div>
            <Header titleColor='black' bg="white" />
            <div className="simpleSearchContainer">
                <SimpleSearchField />
                <div className="categoriesContainer">
                    <button onClick={() => {
                        if (searchParams.get('genre') == 'male')
                            setSearchParams('')
                        else
                            setSearchParams({ genre: "male" }, { replace: true })
                    }
                    }>
                        Masculino
                    </button>

                    <button onClick={() => {
                        if (searchParams.get('genre') == 'female')
                            setSearchParams('')
                        else
                            setSearchParams({ genre: "female" }, { replace: true })
                    }
                    }>
                        Feminino
                    </button>

                </div>
            </div>

            <div className="containerProducts">
                {
                    productsFilter.map((p, i) => {
                        return (
                            <div className="currentProduct" key={i}>
                                <ProductCard productData={p} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
} 