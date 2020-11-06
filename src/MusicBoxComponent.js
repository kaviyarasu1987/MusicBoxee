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
import {GET_LYRICS,UPDATE_LYRICS,CREATE_LYRICS} from './firebaseActions'

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
      { title: 'Lyric Date',  type: 'date', field:'lyricalDate' },
	  { title: 'Lyric Image',  type:'text', field:'lyricImageURI' }

     ]
  const formStyle = {

  width:'100%'

  }
  const barStyle = {

  width:'12.5%'
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
    <div>
    <div style={formStyle}>
  <div style={barStyle}></div>
  <div style={barStyle}></div>
  <div style={barStyle}></div>
  <div style={barStyle}></div>
  <div style={barStyle}></div>
  <div style={barStyle}></div>
  <div style={barStyle}></div>
  <div style={barStyle}></div>

</div>
<div>

</div>
</div>

 );
}
