import React from 'react';

import './bookPage.scss';

const BookPage = () => {
    return (
        <section className="book">
            <h2 className="book__title">something...</h2>
            <div className="book__wrapper">
                <div className="book__img">
                    <img src="http://vnikitskom.ru/wp-content/uploads/132-038-966-D-60-D112046.jpg" alt="bookImg"/>
                </div>
                <table className="book__descr">
                    <tbody>
                        <tr>
                            <td>Category:</td>
                            <td>General</td>
                        </tr>
                        <tr>
                            <td>Title:</td>
                            <td>something...</td>
                        </tr>
                        <tr>
                            <td>Language:</td>
                            <td>ru</td>
                        </tr>
                        <tr>
                            <td>Author:</td>
                            <td>Kendall Durelle</td>
                        </tr>
                        <tr>
                            <td>Published date:</td>
                            <td>21.07.2011</td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td>text about this book...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default BookPage;