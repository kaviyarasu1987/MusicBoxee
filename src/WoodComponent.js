import DatePicker from "react-datepicker";
import ImageUploader from "react-images-upload";
import Dropdown from 'react-dropdown';
import React, { Component,ListView,Text,useState, useEffect } from 'react';
import "react-datepicker/dist/react-datepicker.css";
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
import Clear from '@material-ui/icons/Clear';


import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import {GET_WOOD,UPDATE_WOOD,CREATE_WOOD,SELECT_WOOD,DELETE_WOOD,UPDATE_LYRICS} from './firebaseActions'
//import React, { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


function WoodComponent(props)
{
   const classes = useStyles();
  const options = [
    'Hollywood', 'Bollywood', 'Nollywood'
  ];
  const columWoods = [
	  { title: 'Name',  type: 'text', field:'woodName' },
      { title: 'Country',  type:'text', field:'countryCode' },
      { title: 'Wood Descrption', type: 'text', field:'woodDescription' },
      { title: 'Western Image URL',  type: 'text', field:'woodImageURI' }

     ]
     useEffect(()=>{

         //console.log(props)
          console.log('for test from effect'+props)
       //  props.type = GET_WOOD
       //  props.onget('Woods',GET_WOOD)


     })
  const defaultOption = options[0];
  //const [state, setState] = React.useState({})
//  const woodSource = props.woodSource.woods;
//  const woods = props.woodSource.woods;
  const _posts = props.woodSource.woods || []
  const formStyle = {
  float:'left',
  color: 'blue',
  width:'30%',
  paddingLeft:'20px',
  maxHeight: "50px"
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

  props.woodSource.onselect(rowData.tableData.id,SELECT_WOOD,rowData.albums)


}

function _onSelect(data)
{


}

return (

  <div style={formStyle}>
  <h1>Woods</h1>
      <MaterialTable
        title="Wood Data Editor"
        onRowClick={handleRowClick}
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

        columns={columWoods}
        data={_posts.map(x =>Object.assign({}, x))}
        options={{
             search: false

             }}

        editable={{
          onRowAdd: (newData,index) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                newData.albums=[];
                //newData.albums=[{ 'albumName':'test'+props.woodSource.woods.length,'albumDescription':'test'+props.woodSource.woods.length,'albumDate':'test','albumDate':'test'+props.woodSource.woods.length,'albumImageURI':'test' }]
                props.woodSource.oncreate(newData,'Woods',CREATE_WOOD,props.woodSource)

              }, 600);
            }),
            onRowCLick:(selectedData)=>{
                debugger;
            },
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();

                props.woodSource.onupdate(newData,'Woods',UPDATE_WOOD,oldData)


              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                props.woodSource.onupdate(oldData,'Woods',DELETE_WOOD,oldData,true) 
              }, 600);
            }),
          onSelectionChange : (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();

                }, 600);
              }),
        }}
      />
        </div>
      );

}

export default WoodComponent;
