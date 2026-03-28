import React, { useContext, useEffect, useState } from 'react'
import './SearchBar.css'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const { searchBar, setSearchBar, url } = useContext(StoreContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url + '/api/product/list');
                setData(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={searchBar ? "search-bar" : "hidden"}>
            <div className="input-box">
                <input
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    value={searchTerm}
                    placeholder='Search here...'
                />
                {filteredData.length > 0 ?
                    <div className={searchTerm !== "" ? "search-results" : "hidden"}>
                        <ul>
                            {filteredData.map((item) => (
                                <li onClick={() => { navigate("/products/", setSearchBar(false), setSearchTerm("")) }} key={item.id}>{item.name}</li>
                            ))}
                        </ul>


                    </div>
                    : ""
                }
            </div>
            <div className='close-btn'>
                <i className='bx bx-x' onClick={() => setSearchBar(false)}></i>
            </div>
        </div>
    )
}

export default SearchBar