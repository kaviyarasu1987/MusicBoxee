import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import {applyMiddleware,compose,combineReducers,createStore} from 'redux';
import {Provider} from 'react-redux';
import React, { useState, useEffect } from 'react';
import woods from './wood-reducer'
import lyrics from './lyrics-reducer'
import albums from './album-reducer'
import type from './music-reducer'
import currentAlbumIndex from './current-album-index'
import currentWoodIndex from './current-wood-index'

const parentStyle = {
 width : '100%'

}


const allreducer = combineReducers(
{
  type,
  woods,
  albums,
  lyrics,
  currentWoodIndex,
  currentAlbumIndex

})

const allStoreEnhancer = compose(
applyMiddleware(thunk)
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);




const store = createStore(allreducer,
allStoreEnhancer
);


console.log(store.getState())
ReactDOM.render(<Provider store={store}><App aRandomprops='check' /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
