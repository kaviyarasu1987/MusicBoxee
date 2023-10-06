import React, { Component, ListView, Text } from 'react';
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
import { GET_LYRICS, CREATE_LYRICS, UPDATE_WOOD, INSERT_LYRICS, GET_MUSIC_LIST, UPDATE_LYRICS_MASTER } from './firebaseActions'
import Select from "react-select";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MusicDataComponent(props) {
  const classes = useStyles();
  const languageList = [
    { "value": "en", "label": "English" },
    { "value": "hi", "label": "Hindi" },
    { "value": "ta", "label": "Tamil" },
    { "value": "te", "label": "Telugu" },
    { "value": "ml", "label": "Malayalam" },
    { "value": "ar", "label": "Arabic" }
  ]

  const columLyrics = [
    { title: 'Name', type: 'text', field: 'albumName' },
    { title: 'Lyric Description', type: 'text', field: 'lyricsDescription' },
    { title: 'Lyric Text', type: 'text', field: 'lyricsText' },
    { title: 'Lyric Value', type: 'text', field: 'lyricsValue' },
    { title: 'Speed', type: 'numeric', field: 'lyricSpeed' },
    { title: 'Video/Audio', type: 'text', field: 'lyricImageURI' },
    {
      title: "Choose a Language",
      field: "language",
      editComponent: ({ value, onChange }) => (
        <Select
          options={languageList}
          name="language list"
          onChange={(selectedOption) => onChange(selectedOption.value)}
          value={value ? value.value : value}
        />
      )
    }

  ]
  const formStyle = {
    float: 'left',
    color: 'blue',
    width: '95%',
    paddingLeft: '20px'
  }
  const inputStyle = {

    width: '100%',
    marginBottom: '20px',
    height: '20px'

  }

  const options = [
    'Hollywood', 'Bollywood', 'Nollywood'
  ];
  const defaultOption = options[0];



  return (
    <div style={formStyle}>
      <h1>Music Lists</h1>
      <MaterialTable
        title="Music Lists"
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
          Edit: Edit,
          Add: Add,
          Clear: Clear
        }}

        columns={columLyrics}
        data={props.musicSource.lyricsmaster.map(x => Object.assign({}, x))}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {

                if (!newData.lyricsValue) {
                  alert('Lyric value should not be empty')
                  reject()
                  return
                }
                if (!newData.lyricsText) {
                  alert('Lyric text should not be empty')
                  reject()
                  return
                }

                if (!newData.lyricsDescription) {
                  alert('Lyric descrypton should not be empty')
                  reject()
                  return
                }

                if (!newData.albumName) {
                  alert('Lyric name should not be empty')
                  reject()
                  return
                }
                if (newData.lyricsValue.split(" ").length != newData.lyricsText.split(" ").length) {
                  alert('Lyric value and text spaces should be same')
                  reject()
                  return

                }


                //  props.musicSource.lyricsmaster.push(newData)  
                props.musicSource.oncreate(newData, 'Lyrics', INSERT_LYRICS, props.musicSource)
                resolve();
                //  props.woodSource.push(newData);
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {

              if (!newData.lyricsValue) {
                alert('Lyric value should not be empty')
                reject()
                return
              }
              if (!newData.lyricsText) {
                alert('Lyric text should not be empty')
                reject()
                return
              }

              if (!newData.lyricsDescription) {
                alert('Lyric descrypton should not be empty')
                reject()
                return
              }

              if (!newData.albumName) {
                alert('Lyric name should not be empty')
                reject()
                return
              }
              if (newData.lyricsValue.split(" ").length != newData.lyricsText.split(" ").length) {
                alert('Lyric value and text spaces should be same')
                reject()
                return

              }


              setTimeout(() => {
                resolve();
                props.musicSource.onupdate(newData, 'MusicList', UPDATE_LYRICS_MASTER, oldData)

              }, 600);


            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {


              // setTimeout(() => {
              //   resolve();
              //   props.musicSource.onupdate(props.musicSource.lyricsmaster,'Woods',UPDATE_LYRICS, props.musicSource.lyricsmaster)

              // }, 600);

              props.musicSource.lyricsmaster.splice(oldData.tableData.id, 1)


              setTimeout(() => {
                resolve();

                props.musicSource.ondelete(oldData, 'MusicList', GET_MUSIC_LIST, props.musicSource.lyricsmaster)

              }, 600);
            }),
          onSelectionChange: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();

              }, 600);
            })
        }}
      />

    </div>);
}
