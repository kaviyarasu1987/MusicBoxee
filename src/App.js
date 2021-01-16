import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MusicDataComponent from './MusicDataComponent'
import AlbumComponent from './AlbumComponent'
import WoodComponent from './WoodComponent'
import {GET_WOOD,GET_ALL,createDocument,updateDocument,getDocument,selectDocument} from './firebaseActions'
import {connect} from 'react-redux';
//import React, { useState, useEffect } from 'react';

function App(props) {


  useEffect(() => {
     // Update the document title using the browser API
  props.onget('MusicList','GET_WOOD');
},[props.initialLoad]);

  return (
    <div className="App">
        <WoodComponent woodSource={props}/>
        <MusicDataComponent musicSource={props}/>
        <AlbumComponent albumSource={props}/>

  </div>
  );
}
const mapstatetoprops=(state,props)=>{

console.log('state params'+state);

return {
type : state.type,
albums:state.albums,
woods:state.woods,
lyrics:state.lyrics,
currentWoodIndex:state.currentWoodIndex,
currentAlbumIndex:state.currentAlbumIndex,
initialLoad:true
//currentWoodTitle:state.woods.length>0?state.woods[state.currentWoodIndex]:"none"

}

}

const mappropstoactions =(dispatch,props)=>{
return {
oncreate: (objectToCreate,collectionName,typeToAct,woods)=>dispatch(createDocument(objectToCreate,collectionName,typeToAct,woods)),
onupdate: (objectToUpdate,collectionName,typeToAct,oldObject)=>dispatch(updateDocument(objectToUpdate,collectionName,typeToAct,oldObject)),
onget: (collectionName,typeToAct)=>dispatch(getDocument(collectionName,typeToAct)),
onselect:(selectedIndex,typeToAct,selectedData)=>dispatch(selectDocument(selectedIndex,typeToAct,selectedData))
}
}

export default connect(mapstatetoprops,mappropstoactions)(App);
