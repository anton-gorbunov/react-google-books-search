import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SearchPanel from '../searchPanel/searchPanel';
import {BooksListPage, BookPage} from '../pages';

const App = () => {
    return (
        <>
            <SearchPanel/>
            <Switch>
                <Route path='/' exact component={BooksListPage}/>
                <Route path="/book/:id" component={BookPage}/>
            </Switch>
        </>
    );
}

export default App;