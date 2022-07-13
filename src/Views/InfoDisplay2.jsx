import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import typeMap from './typeMap.json'


// simple version without getting the homeworlds
const InfoDisplay = () => {
    const { type, id } = useParams();
    const [info, setInfo] = useState();
    const navigate = useNavigate()

    useEffect(() => fetchInfo(type, id).then(setInfo), [type, id]);

    const fetchInfo = async (type, id) => {
        try {
            setInfo(null)
            const result = await axios.get(`https://swapi.dev/api/${ type }/${ id }`)
            return result.data
        } catch(error) {
            navigate('/404')
        }
    }

    return (
        info ? 
        <div>
            <h1>{info.name}</h1>
            <ul>{typeMap[type].map((attr, i) => <li key={ i }>{ attr }: { info[attr] }</li>)}</ul>
        </div>
        :
        <h1>Loading...</h1>
    )
}
export default InfoDisplay