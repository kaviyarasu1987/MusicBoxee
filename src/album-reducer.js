import {GET_ALBUM,UPDATE_ALBUM,CREATE_ALBUM,SELECT_WOOD} from './firebaseActions'

export default function albums(state=[],action)
{

switch(action.type)
{
  case GET_ALBUM:
   return [];
  case UPDATE_ALBUM:
  return [];
  // return musiccomponents.albums.filter(album=>album.isUpdateRequired == true);
  case CREATE_ALBUM:
  state.push(action.response)

  return Object.assign([],state)

  // return musiccomponents.albums.filter(album=>album.isSync == false);
  case SELECT_WOOD:
   state = action.response.selectedDocument
   for(var i=0;i<state.length;i++)
   {
     if(state[i].albumDate)
      if(state[i].albumDate.seconds)
      state[i].albumDate = new Date(state[i].albumDate.seconds*1000)

   }
   return Object.assign([],state)

  default:
   return state;


}

}
