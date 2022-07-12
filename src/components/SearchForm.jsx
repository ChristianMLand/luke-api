import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom"
import typeMap from '../views/typeMap.json'

const SearchForm = () => {
    const [formData, setFormData] = useState({ type : 'people', id : 1 });
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        navigate(`/${formData.type}/${formData.id}`)
    }

    const handleChange = e => setFormData({ ...formData, [e.target.name] : e.target.value });

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <label>Search For: </label>
                <select value={ formData['type'] } name="type" onChange={ handleChange }>
                    { Object.keys(typeMap).map((type, i) => <option key={ i }>{ type }</option>) }
                </select>
                <label>ID: </label>
                <input name="id" value={ formData['id'] } onChange={ handleChange } type="number"/>
                <button>Search</button>
            </form>
            <Outlet />
        </>
    )
}

export default SearchForm