import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {booksLoaded, booksRequested, fetchData, fetchError} from '../../../actions/actions';
import BooksService from '../../../services/booksService';
import BooksItem from '../../booksItem/booksItem';
import Error from '../../error/error';
import Spinner from '../../spinner/spinner';

import './booksListPage.scss';

const BooksListPage = ({booksLoaded, booksRequested,fetchData,fetchError, error, search, books, fetching, loading, searchError, totalItems}) => {
    const [booksIndex, setBooksIndex] = useState(0);
    
    function onHandleClick() {
        setBooksIndex(books.length);
        fetchData();
    }
    useEffect(() => {
        if (fetching) {
            booksRequested();
            new BooksService().getBooks(search, booksIndex)
            .then((res) => booksLoaded(res))
            .catch(() => fetchError(true));
        }
    }, [search, booksRequested, booksLoaded,fetchError, booksIndex, fetching]);

    const button = (
        <button 
            className="booksList__button button"
            onClick={onHandleClick}
        >Load more books</button>
    );
    if (searchError) {
        return (
            <div className="container">
                <h2 className="booksList__error">
                    {`There are no search results for "${search.searchValue}"`}
                </h2>
            </div>
        )   
    }
    if (error) {
        return <Error/>
    }

    return (
        <section className="booksList">
            <div className="container">
                <h2 className="booksList__title">
                    {books.length !== 0 ? `Found ${totalItems} results` : null}
                </h2>
                <div className="booksList__wrapper">
                    {books.map((item, i) => {
                        return (
                            <BooksItem 
                                key={i}
                                data={item}
                            />
                        );
                    })}
                </div>
                {loading ? <Spinner/>: null}
                {books.length === 0 || books.length === +totalItems ? null : button}
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        search: state.searchValues,
        books: state.books,
        loading: state.loading,
        searchError: state.searchError,
        totalItems: state.totalItems,
        fetching: state.fetching,
        error: state.fetchError
    }
}
const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    fetchData,
    fetchError
}

BooksListPage.propTypes = {
    search: PropTypes.object,
    books: PropTypes.array,
    loading: PropTypes.bool,
    searchError: PropTypes.bool,
    totalItems: PropTypes.number,
    fetching: PropTypes.bool,
    error: PropTypes.bool,
    booksLoaded: PropTypes.func,
    booksRequested: PropTypes.func,
    fetchData: PropTypes.func,
    fetchError: PropTypes.func
}



export default connect(mapStateToProps,mapDispatchToProps)(BooksListPage);


