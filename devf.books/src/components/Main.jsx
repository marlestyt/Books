import React, {useEffect, useState} from "react";
import axios from 'axios'
import "./styles.css"

export default function Main(){
    const[data, setData] = useState([])

    useEffect(() =>{
        axios.get('https://render-books-backend.onrender.com')
        .then(response => {
            setData(response.data)
        })
        .catch(err => {
            console.log('Erros al obtener los datos', err)
        })
    }, [])

    return(
        <div className="container">
            <h2>Biblioteca</h2>

                <ul>
                    {data.map(item => (
                        <div className="item-books" key={item._id}>
                            <img src={item.image_url} alt={item.author} />

                            <h3>{item.title}</h3>
                            <p>{item.author}</p>
                        </div>
                    ))}
                </ul>

        </div>
    )
}