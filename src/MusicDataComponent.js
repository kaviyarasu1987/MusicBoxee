import React, { Component,ListView,Text } from 'react';
import MaterialTable from 'material-table';
import DatePicker from "react-datepicker";
import ImageUploader from "react-images-upload";
import Dropdown from 'react-dropdown';

import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
import SaveAlt from '@material-ui/icons/SaveAlt'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Add from '@material-ui/icons/Add'
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import Remove from '@material-ui/icons/Remove'
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import Clear from '@material-ui/icons/Clear';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import {GET_LYRICS,UPDATE_LYRICS,CREATE_LYRICS,UPDATE_WOOD} from './firebaseActions'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MusicDataComponent(props) {
 const classes = useStyles();
 const columLyrics = [
	  { title: 'Name',  type: 'text', field:'albumName' },
      { title: 'Lyric Description', type: 'text', field:'lyricsDescription' },
      { title: 'Lyric Value', type: 'text', field:'lyricsValue' },
    { title: 'Lyric Image',  type:'text', field:'lyricImageURI' }

     ]
  const formStyle = {
  float:'left',
  color: 'blue',
  width:'60%',
  paddingLeft:'20px'
  }
  const inputStyle = {

   width : '100%',
   marginBottom: '20px',
   height: '20px'

  }

  const options = [
    'Hollywood', 'Bollywood', 'Nollywood'
  ];
  const defaultOption = options[0];




  return (
    <div style={formStyle}>
    <h1>{props.musicSource.albums[props.musicSource.currentAlbumIndex]?props.musicSource.albums[props.musicSource.currentAlbumIndex].albumName:"Music Name" }</h1>
    <MaterialTable
      title={props.musicSource.albums[props.musicSource.currentAlbumIndex]?props.musicSource.albums[props.musicSource.currentAlbumIndex].albumName:"Music Name" }
      icons={{
                 Check: Check,
                 DetailPanel: ChevronRight,
                 Export: SaveAlt,
                 Filter: FilterList,
                 FirstPage: FirstPage,
                 LastPage: LastPage,
                 NextPage: ChevronRight,
                 PreviousPage: ChevronLeft,
                 Search: Search,
                 ThirdStateCheck: Remove,
                 Delete: DeleteOutline,
                 Edit:Edit,
                 Add:Add,
                 Clear:Clear
               }}

      columns={columLyrics}
      data={props.musicSource.lyrics.map(x =>Object.assign({}, x))}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
                props.musicSource.albums[props.musicSource.currentAlbumIndex].lyrics.push(newData)
              props.musicSource.oncreate(newData,'Lyrics',CREATE_LYRICS,props.musicSource)
            //  props.woodSource.push(newData);
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
           props.musicSource.woods[props.musicSource.currentWoodIndex]
           .albums[props.musicSource.currentAlbumIndex]
           .lyrics[oldData.tableData.id] = newData

          // props.musicSource.onudpate(props.musicSource.woods,'Lyrics',CREATE_LYRICS,props.musicSource)
          

         //   console.log(newData)
          //  console.log(oldData)
            setTimeout(() => {
              resolve();
              props.musicSource.onupdate(props.musicSource.woods[props.musicSource.currentWoodIndex],'Woods',UPDATE_LYRICS, props.musicSource.woods[props.musicSource.currentWoodIndex]
              .albums[props.musicSource.currentAlbumIndex].lyrics)

            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            props.musicSource.woods[props.musicSource.currentWoodIndex]
            .albums[props.musicSource.currentAlbumIndex]
            .lyrics.splice(oldData.tableData.id,1)

            setTimeout(() => {
              resolve();
              props.musicSource.onupdate(props.musicSource.woods[props.musicSource.currentWoodIndex],'Woods',UPDATE_LYRICS, props.musicSource.woods[props.musicSource.currentWoodIndex]
              .albums[props.musicSource.currentAlbumIndex].lyrics)

            }, 600);
          }),
        onSelectionChange : (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();

              }, 600);
            })
      }}
    />

</div>  );
}
