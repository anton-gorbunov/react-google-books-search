import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {booksRequested, bookLoaded, fetchError} from '../../../actions/actions';
import BooksService from '../../../services/booksService';
import Spinner from '../../spinner/spinner';
import Error from '../../error/error';

import './bookPage.scss';

const BookPage = ({match, booksRequested,fetchError, loading, error, bookLoaded, book, fetching}) => {
    useEffect(() => {
        booksRequested();
        new BooksService().getBook(match.params.id)
        .then(res => bookLoaded(res))
        .catch(() => fetchError());
    }, [match.params.id, booksRequested, bookLoaded, fetchError]);
    
    if (fetching) {
        return <Redirect to='/'/>
    }
    if (loading) {
        return <Spinner/>
    }
    if (error) {
        return <Error/>
    }

    const {authors, category, descr, img, language, publishedDate, title} = book;
   
    return (
        <section className="book">
            <div className="container">
                <h2 className="book__title">{title}</h2>
                <div className="book__wrapper">
                    <div className="book__img">
                        <img src={img} alt="bookImg"/>
                    </div>
                    <div className="book__info">
                        <table className="book__descr">
                            <tbody>
                                <tr>
                                    <td>Category:</td>
                                    <td>{category}</td>
                                </tr>
                                <tr>
                                    <td>Title:</td>
                                    <td>{title}</td>
                                </tr>
                                <tr>
                                    <td>Language:</td>
                                    <td>{language}</td>
                                </tr>
                                <tr>
                                    <td>Author:</td>
                                    <td>{authors}</td>
                                </tr>
                                <tr>
                                    <td>Published date:</td>
                                    <td>{publishedDate}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="book__text">{descr}</div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        book: state.book,
        loading: state.loading,
        fetching:state.fetching,
        error: state.fetchError
    }
}
const mapDispatchToProps = {
    booksRequested,
    bookLoaded, 
    fetchError
}

BookPage.propTypes = {
    booksRequested: PropTypes.func,
    bookLoaded: PropTypes.func,
    fetchError: PropTypes.func,
    book: PropTypes.object,
    loading: PropTypes.bool,
    fetching: PropTypes.bool,
    error: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);