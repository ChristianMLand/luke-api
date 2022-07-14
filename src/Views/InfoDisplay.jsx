import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import typeMap from "./typeMap.json";

const fetchInfo = async (type, id) => {
    const res = await axios.get(`https://swapi.dev/api/${ type }/${ id }`);
    try {
        const homeworld = await axios.get(res.data.homeworld);
        res.data.homeworldName = homeworld.data.name;
    } finally {
        return res.data;
    }
};

const InfoDisplay = () => {
    const { type, id } = useParams();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        setInfo(null)
        fetchInfo(type, id).then(setInfo).catch(() => navigate('/404'))
    }, [type, id, navigate]);

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
    );
};
export default InfoDisplay;