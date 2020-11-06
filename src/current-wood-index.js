import { SELECT_WOOD} from './firebaseActions'
export default function currentWoodIndex(state=0,action)
{

switch(action.type)
{
  case SELECT_WOOD:
   state = action.response.selectedIndex
   return state

  default:
   return state;


}

}
