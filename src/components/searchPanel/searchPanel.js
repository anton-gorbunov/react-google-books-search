import React, {useState} from 'react';
import {connect} from 'react-redux';
import {setSearchValues} from '../../actions/actions';

import './searchPanel.scss';

const SearchPanel = ({setSearchValues, }) => {
    const [inpValue, setInpValue] = useState('');
    const [category, setCategory] = useState('all');
    const [sort, setSort] = useState('relevance');
    const [activeClass, setActiveClass] = useState(false);
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
        setActiveClass(true);
    }
    return (
        <section className={`search ${activeClass ? 'search_active': ''}`}>
            <div className="container">
                <h1 className="search__title">Search for books</h1>
                <form className="search__form" onSubmit={onHandleSubmit}>
                    <div className="search__search">
                    <input 
                        type="text" 
                        className="search__input"
                        placeholder="Enter the name of the book"
                        value={inpValue}
                        onChange={(e) => setInpValue(e.target.value)}
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

export default connect(null, mapDispatchToProps)(SearchPanel);