import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {setSearchValues} from '../../actions/actions';

import './searchPanel.scss';

const SearchPanel = ({setSearchValues}) => {
    const [inpValue, setInpValue] = useState('');
    const [category, setCategory] = useState('all');
    const [sort, setSort] = useState('relevance');
    const [activeClass, setActiveClass] = useState(true);
    const location = useLocation();

    const categoryValues = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
    const sortValues = ['relevance', 'newest'];
    
    function onHandleSubmit(e) {
        e.preventDefault();
        setSearchValues({
            searchValue: inpValue,
            category: category, 
            sort: sort
        });
        setInpValue('');
        setCategory('all');
        setSort('relevance');
        setActiveClass(false);
    }
    return (
        <section className={`search ${activeClass && location.pathname === '/' ? 'search_active': ''}`}>
            <div className="container">
                <h1 className="search__title">Search for books</h1>
                <form className="search__form" onSubmit={onHandleSubmit}>
                    <div className="search__search">
                    <input 
                        type="text" 
                        className="search__input"
                        placeholder="Search..."
                        value={inpValue}
                        onChange={(e) => setInpValue(e.target.value)}
                        required
                    />
                    <button className="search__button button">Search</button>
                    </div>
                    <div className="search__filter">
                        <label htmlFor="categories">Catigories:</label>
                        <select 
                            className="search__select" 
                            name="categories" 
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            {categoryValues.map(item => {
                                return <option key={item}>{item}</option>
                            })}
                        </select>
                        <label htmlFor="sort">Sorting by:</label>
                        <select 
                            className="search__select" 
                            name="sort"
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                        >
                            {sortValues.map(item => {
                                return <option key={item}>{item}</option>
                            })}
                        </select>
                    </div>
                </form>
            </div>
        </section>
    )
}

const mapDispatchToProps = {
    setSearchValues
}

SearchPanel.propTypes = {
    setSearchValues: PropTypes.func
}

export default connect(null, mapDispatchToProps)(SearchPanel);