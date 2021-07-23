import React from 'react';

import './searchPanel.scss';

const SearchPanel = () => {
    return (
        <section className="search">
            <h1 className="search__title">Search for books</h1>
                <form className="search__form">
                    <input 
                        type="text" 
                        className="search__input"
                        placeholder="Enter the name of the book"
                    />
                    <button className="search__button">Search</button>
                </form>
                <div className="search__filter">
                    <label htmlFor="categories">Catigories:</label>
                    <select className="search__select" name="categories">
                        <option>all</option>
                    </select>
                    <label htmlFor="sort">Sorting by:</label>
                    <select className="search__select" name="sort">
                        <option>relevance</option>
                    </select>
                </div>
        </section>
    )
}

export default SearchPanel;