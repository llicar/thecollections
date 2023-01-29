import './style.sass'


import { SearchField } from '../../components/searchField'
import { useAppContext } from '../../context/searchIsVisible'
import Header from '../../components/header'

export function Home() {

    const { searchIsVisible } = useAppContext()

    return (
        <div id="home">
            <Header titleColor="white" bg="none"></Header>
            <div className={searchIsVisible ? "topContainer containerFocused" : "topContainer"}>
                <SearchField />
            </div>
        </div>

    )
}