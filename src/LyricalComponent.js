import DatePicker from "react-datepicker";
import ImageUploader from "react-images-upload";
import Dropdown from 'react-dropdown';
import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";



function LyricalComponent(props)
{
  const options = [
    'Hollywood', 'Bollywood', 'Nollywood'
  ];
  const defaultOption = options[0];
  const formStyle = {
  color: 'blue',
  width:'70%'
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

function _onSelect(data)
{


}

return (

  <div style={formStyle}>

        <form >
        <h1 style={inputStyle}>Upload Wood </h1>
          <label style={inputStyle}>
            Lyrical Name:
                </label>
            <input value="dsdf"  style={inputStyle} />
            <label style={inputStyle}>
              Lyrical Description:
                  </label>
              <input value="dsdf"  style={inputStyle} />

          <label style={inputStyle}>
            Lyrical  Picture:
              </label>
            <ImageUploader  withIcon={true} buttonText="Choose images"  imgExtension={[".jpg", ".gif", ".png", ".gif"]} maxFileSize={5242880} />

          <label style={inputStyle}>
            Lyrical Description:

          </label>

          <input value="sfdsdf" style={inputStyle} />

          <input type="submit" value="Submit" />
        </form>
        </div>
      );

}

export default LyricalComponent;
