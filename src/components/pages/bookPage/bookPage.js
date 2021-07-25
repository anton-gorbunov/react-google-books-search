import React, {useEffect} from 'react';
import BooksService from '../../../services/booksService';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {booksRequested, bookLoaded} from '../../../actions/actions';
import Spinner from '../../spinner/spinner';
import {getStrFromArr} from '../../../libs/functions';

import './bookPage.scss';

const BookPage = ({match, booksRequested, loading, bookLoaded, book, fetching}) => {
    useEffect(() => {
        booksRequested();
        new BooksService().getBook(match.params.id)
        .then(res => bookLoaded(res));
    }, [match.params.id, booksRequested, bookLoaded]);
    
    const {authors, category, descr, img, language, publishedDate, title} = book;

    if (fetching) {
        return <Redirect to='/'/>
    }
    if (loading) {
        return <Spinner/>
    }

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
                                    <td>{getStrFromArr(category)}</td>
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
        fetching:state.fetching
    }
}
const mapDispatchToProps = {
    booksRequested,
    bookLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);