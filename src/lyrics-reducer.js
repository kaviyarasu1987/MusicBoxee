import {GET_LYRICS,UPDATE_LYRICS_MASTER,CREATE_LYRICS,SELECT_ALBUM} from './firebaseActions'

export default function lyrics(state=[],action)
{

switch(action.type)
{
  case GET_LYRICS:
  return action.response?action.response:[];
  case UPDATE_LYRICS_MASTER:
  //action.lyric
  {
    state = action.oldObject

    return Object.assign([],state)

  }
  case CREATE_LYRICS:
  if(action.response)
  {
     state.push(action.response)
     return Object.assign([],state)

   }

  return Object.assign([],state)
   case SELECT_ALBUM:
    state = action.response.selectedDocument
    return Object.assign([],state)

  default:
  return state;


}

}
