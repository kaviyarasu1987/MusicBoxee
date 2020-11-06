import { SELECT_ALBUM} from './firebaseActions'
export default function currentAlbumIndex(state=0,action)
{

switch(action.type)
{
  case SELECT_ALBUM:
   state = action.response.selectedIndex
   return state

  default:
   return state;


}

}
