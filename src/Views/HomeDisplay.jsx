import SearchForm from "../components/SearchForm"
import { Outlet } from "react-router-dom"

const HomeDisplay = () => {
    return (
        <>
            <SearchForm />
            <Outlet />
        </>
    )
}

export default HomeDisplay