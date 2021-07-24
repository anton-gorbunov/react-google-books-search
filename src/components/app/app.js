import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SearchPanel from '../searchPanel/searchPanel';
import {BookSListPage, BookPage} from '../pages';

const App = () => {
    return (
        <>
            <SearchPanel/>
            <Switch>
                <Route path='/' exact component={BookSListPage}/>
                <Route path="/book/:id" component={BookPage}/>
            </Switch>
        </>
    );
}

export default App;