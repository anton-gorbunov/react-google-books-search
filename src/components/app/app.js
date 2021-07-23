import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SearchPanel from '../searchPanel/searchPanel';
import {BookSListPage, BookPage} from '../pages';

import './app.scss';

const App = () => {
    return (
        <div className="app">
            <div className="container">
                <SearchPanel/>
                <Switch>
                    <Route path='/' exact component={BookSListPage}/>
                    <Route path="/book/1"  component={BookPage}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;