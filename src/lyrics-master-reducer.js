import {GET_LYRICS,UPDATE_LYRICS_MASTER,INSERT_LYRICS,SELECT_ALBUM,GET_MUSIC_LIST} from './firebaseActions'

export default function lyricsmaster(state=[],action)
{

switch(action.type)
{
  
  case INSERT_LYRICS:
  if(action.response)
  {
     state.push(action.response)
     return Object.assign([],state)

   }

  return Object.assign([],state)
   
  case GET_MUSIC_LIST:
    if(action.response)
    {
       state = action.response
       return Object.assign([],state)

    }
    return state;

  case UPDATE_LYRICS_MASTER:
    if(action.response)
    {
       let updatedIndex = state.findIndex((element) => element.id == action.response.id )
       state[updatedIndex] = action.response
       return Object.assign([],state)

    }
    return state;  
  
  default:
  return state;


}

}
