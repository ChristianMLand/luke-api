import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import typeMap from './typeMap.json'

//more advanced version that gets the homeworlds as well
const InfoDisplay = () => {
    const { type, id } = useParams();
    const [info, setInfo] = useState();
    const navigate = useNavigate()

    const fetchHomeworld = res => fetchInfo(
        res.data.homeworld, 
        homeworld => setInfo({...res.data, homeworldName: homeworld.data.name}),
        () => setInfo(res.data)
    )

    const fetchInfo = async (url, handleSuccess, handleError) => {
        try {
            const result = await axios.get(url)
            return handleSuccess(result)
        } catch(error) {
            return handleError()
        }
    }

    useEffect(() => {
        setInfo(null)
        fetchInfo(
            `https://swapi.dev/api/${ type }/${ id }`, 
            fetchHomeworld,
            () => navigate('/error')
        )
    }, [type, id, navigate])

    return (
        info ? 
        <div>
            <h1>{ info.name }</h1>
            <ul>
                { typeMap[type].map((attr, i) => <li key={ i }>{ attr }: { info[attr] }</li>) }
                { info.homeworld && <li>homeworld: <a href={ info.homeworld.split('/api')[1] }>{ info.homeworldName }</a></li> }
            </ul>
        </div>
        :
        <h1>Loading...</h1>
    )
}
export default InfoDisplay