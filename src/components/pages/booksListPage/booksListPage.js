import React, {useEffect} from 'react';
import BooksService from '../../../services/booksService';
import BooksItem from '../../booksItem/booksItem';

import './booksListPage.scss';

const BookSListPage = () => {
    const bookService = new BooksService();
    useEffect(() => {
        bookService.getResource('js')
        .then((res) => console.log(res.items));
    })
    return (
        <section className="booksList">
            <div className="booksList__wrapper">
                    <BooksItem/>
                    <BooksItem/>
                    <BooksItem/>
                    <BooksItem/>
                    <BooksItem/>
                    <BooksItem/>
                    <BooksItem/>
                    <BooksItem/>
                    <BooksItem/>
                    <BooksItem/>
            </div>
        </section>
    )
}

export default BookSListPage;