import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DATA from '../Data.json';
import Background from './Background';

const List = () => {
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        document.title = "List of Drugs";
      },[]);
    return (
        <>
            <Background />
            <div className='container mt-5'>
                <h2 className='text-center mb-5'>List of Drugs</h2>
                <div className="main-search d-inline-flex justify-content-around w-100">
                    <div className='form-floating w-100'>
                        <input type="text" className="form-control w-100" id="floatingInput" placeholder=" " onChange={(event) => { setSearchTerm(event.target.value); }} autoComplete="off" />
                        <label htmlFor="floatingInput" className='text-center'>Search Drug Name</label>
                        <div className="list-search-box" id='display-sug-box'>
                            {DATA.filter((val) => {
                                if (searchTerm === "") {
                                    return val;
                                } else if (val.drug_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            }).map((val, key) => {
                                return (
                                    <Link to={val.link}>
                                        <div key={key} className="list-search">
                                            {val.drug_name}
                                        </div>
                                    </Link>
                                )}
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default List
