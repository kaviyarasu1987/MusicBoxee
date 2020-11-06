import { GET_ALL,GET_ALBUM,GET_WOOD,GET_LYRICS,REQUEST_DOCUMENT,RECEIVE_DOCUMENT ,UPDATE_ALBUM,UPDATE_WOOD,UPDATE_LYRICS,CREATE_ALBUM,CREATE_WOOD,CREATE_LYRICS} from './firebaseActions'

export default function type(state=GET_ALL,action)
{

switch(action.type)
{
  case GET_LYRICS:
   return GET_LYRICS;
  case UPDATE_LYRICS:
  //action.lyric
   return UPDATE_LYRICS;
  case CREATE_LYRICS:
   return CREATE_LYRICS;
  default:
  return state;


}

}
