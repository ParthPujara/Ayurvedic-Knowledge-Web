import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DATA from '../Data.json';
import Background from './Background';

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        document.title = "Ayurvedic Description";
      },[]);
    return (
        <>
        <Background/>
             <div className='home-search'>
                <div className="container mb-3 main-heading">
                    <div className="text-center txt">
                        Search for any drug
                    </div>
                </div>
                <div className='container mt-5'>
                    <div className="main-search d-inline-flex justify-content-around w-100">
                        <div className='form-floating w-100'>
                            <input type="text" className="form-control w-100" id="floatingInput" placeholder=" " onChange={(event) => { setSearchTerm(event.target.value); }} autoComplete="off"/>
                            <label htmlFor="floatingInput" className='text-center'>Drug Name</label>
                            <div className="box" id='display-sug-box'>
                                {DATA.filter((val) => {
                                    if (searchTerm === "") {
                                        return 0;
                                    } else if (val.drug_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return val;
                                    }
                                }).map((val, key) => {
                                    return (
                                        <Link to={val.link}>
                                            <div key={key} className="sug">
                                                {val.drug_name}
                                            </div>
                                        </Link>
                                    )}
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Searchbar
