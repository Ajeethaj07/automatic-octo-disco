import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"
import {useNavigate} from "react-router";
import "./Table.css"

const Table = () => {
    const[data,setData]= useState("");
    const[loading, setLoading] = useState(true);
    const[error,setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    },[]);

       const fetchData = () => {
            axios.get('/data.json')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
        }
        const handleDelete = (id) => {
           const newData = data.filter(item => item.id !==id);
           setData(newData)
        }
        const handleLogout = () => {
            navigate("/");
        }
        return(
            <div>
                <h2 className="head">Table</h2>
                {loading ? ( <p>Loading..</p>) : error ? (<p>Failed: {error.message}</p>
                ) : ( 
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="headerStyle">ID</th>
                                <th className="headerStyle">NAME</th>
                                <th className="headerStyle">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => ( <tr key={item.id}>
                                <td className="cellStyle">{item.id}</td>
                                <td className="cellStyle">{item.name}</td>
                                <td>
                                    <button className="buttonStyle" onClick={() => handleDelete(item.id)}>Delete</button> 
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        <button className="logout "  onClick= {handleLogout}>Logout</button>
                    </table>
                )}
            </div>
        )
}
export default Table;


