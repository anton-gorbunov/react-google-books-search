import React from 'react';
import {Link} from 'react-router-dom';
import {getFirstCategory, getShortTitle} from '../../libs/functions';

import './booksItem.scss';

const BooksItem = ({data}) => {
    const {id, authors, category, img, title} = data;
    return (
            <div className="bookItem">
                <Link to={`/book/${id}`} className="bookItem__link">
                    <div className="bookItem__img">
                        <img src={img} alt="book"/>
                    </div>
                    <div className="bookItem__category">{getFirstCategory(category)}</div>
                    <h2 className="bookItem__title">{getShortTitle(title)}</h2>
                    <div className="bookItem__author">{authors}</div>
                </Link>
            </div>
        
    )
}

export default BooksItem;