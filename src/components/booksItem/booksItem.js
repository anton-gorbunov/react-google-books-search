import React from 'react';
import {Link} from 'react-router-dom';

import './booksItem.scss';

const BooksItem = () => {
    return (
            <div className="bookItem">
                <Link to={`/book/${1}`} className="bookItem__link">
                    <div className="bookItem__img">
                        <img src="http://vnikitskom.ru/wp-content/uploads/132-038-966-D-60-D112046.jpg" alt="book"/>
                    </div>
                    <div className="bookItem__category">Computers</div>
                    <h2 className="bookItem__title">Title</h2>
                    <div className="bookItem__author">Дэвид Херрон</div>
                </Link>
            </div>
        
    )
}

export default BooksItem;