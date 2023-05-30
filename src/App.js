import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MusicDataComponent from './MusicDataComponent'
import MusicDataComponentMaster from './MusicDataComponentMaster'
import AlbumComponent from './AlbumComponent'
import WoodComponent from './WoodComponent'
import {GET_WOOD,GET_ALL,createDocument,updateDocument,getDocument,selectDocument,deleteDocument} from './firebaseActions'
import {connect} from 'react-redux';
//import React, { useState, useEffect } from 'react';

function App(props) {


  useEffect(() => {
  //we can use it if ir requires in future
  //props.onget('Users','GET_WOOD');
  props.onget('MusicList', 'GET_MUSIC_LIST')
},[props.initialLoad]);

  return (
    <div className="App">
        {/* <WoodComponent woodSource={props}/>
        <MusicDataComponent musicSource={props}/>
        <AlbumComponent albumSource={props}/> */}
        <MusicDataComponentMaster musicSource={props}/>

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
lyricsmaster:state.lyricsmaster,
initialLoad:true
//currentWoodTitle:state.woods.length>0?state.woods[state.currentWoodIndex]:"none"

}

}

const mappropstoactions =(dispatch,props)=>{
return {
oncreate: (objectToCreate,collectionName,typeToAct,woods)=>dispatch(createDocument(objectToCreate,collectionName,typeToAct,woods)),
onupdate: (objectToUpdate,collectionName,typeToAct,oldObject,isreUpdate)=>dispatch(updateDocument(objectToUpdate,collectionName,typeToAct,oldObject,isreUpdate)),
onget: (collectionName,typeToAct)=>dispatch(getDocument(collectionName,typeToAct)),
onselect:(selectedIndex,typeToAct,selectedData)=>dispatch(selectDocument(selectedIndex,typeToAct,selectedData)),
ondelete: (objectToDelete,collectionName,typeToAct,updatedObject)=>dispatch(deleteDocument(objectToDelete,collectionName,typeToAct,updatedObject))
}
}

export default connect(mapstatetoprops,mappropstoactions)(App);
