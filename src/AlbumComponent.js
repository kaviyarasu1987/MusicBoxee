import DatePicker from "react-datepicker";
import ImageUploader from "react-images-upload";
import Dropdown from 'react-dropdown';
import React, { Component  } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import 'react-dropdown/style.css';
import MaterialTable from 'material-table';


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
import Clear from '@material-ui/icons/Clear'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import {GET_ALBUM,UPDATE_ALBUM,CREATE_ALBUM,SELECT_ALBUM} from './firebaseActions'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function AlbumComponent(props)
{
   const classes = useStyles();
  const options = [
    'Hollywood', 'Bollywood', 'Nollywood'
  ];

  const columAlbums = [
  	  { title: 'Name',  type: 'text', field:'albumName' },

        { title: 'album Description', type: 'text', field:'albumDescription' },
        { title: 'album Date',  type: 'date', field:'albumDate' },
  	  { title: 'album Image',  type:'text', field:'albumImageURI' }

       ]
  const defaultOption = options[0];
  const formStyle = {

  color: 'blue',
  width:'30%',
  paddingLeft:'20px',
  height:'100px',
  display:'none'
  
  }
  const inputStyle = {

   width : '100%',
   marginBottom: '20px',
   height: '20px'

  }


function handleSubmit(data)
{


}

function handleChange(data)
{


}
function handleRowClick(event, rowData)  {

  props.albumSource.onselect(rowData.tableData.id,SELECT_ALBUM,rowData.lyrics)


}

function _onSelect(data)
{


}

return (

  <div style={formStyle}>
  <h1>{props.albumSource.woods[props.albumSource.currentWoodIndex]?props.albumSource.woods[props.albumSource.currentWoodIndex].woodName:"Album Name" }</h1>
  <MaterialTable
    title={props.albumSource.woods[props.albumSource.currentWoodIndex]?props.albumSource.woods[props.albumSource.currentWoodIndex].woodName:"Album Name" }
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

    columns={columAlbums}
    data={props.albumSource.albums.map(x =>Object.assign({}, x))}
    onRowClick={handleRowClick}
    editable={{
      onRowAdd: (newData) =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve();
            newData.lyrics = []
            props.albumSource.woods[props.albumSource.currentWoodIndex].albums.push(newData)
            props.albumSource.oncreate(newData,'Albums',CREATE_ALBUM,props.albumSource)
          //  props.woodSource.push(newData);
          }, 600);
        }),
      onRowUpdate: (newData, oldData) =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve();

            props.albumSource.woods[props.albumSource.currentWoodIndex].albums[oldData.tableData.id] = newData
            props.albumSource.onupdate(props.albumSource.woods[props.albumSource.currentWoodIndex],'Woods',UPDATE_ALBUM,props.albumSource.woods[props.albumSource.currentWoodIndex].albums)  


          }, 600);
        }),
      onRowDelete: (oldData) =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve();
            props.albumSource.woods[props.albumSource.currentWoodIndex].albums.splice(oldData.tableData.id,1)
            props.albumSource.onupdate(props.albumSource.woods[props.albumSource.currentWoodIndex],'Woods',UPDATE_ALBUM,props.albumSource.woods[props.albumSource.currentWoodIndex].albums)

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
        </div>
      );

}

export default AlbumComponent;
