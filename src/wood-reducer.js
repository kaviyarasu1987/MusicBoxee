import {GET_WOOD,UPDATE_WOOD,CREATE_WOOD,DELETE_WOOD} from './firebaseActions'
import { act } from 'react-dom/test-utils';

export default function woods(state=[],action)
{

switch(action.type)
{
  case GET_WOOD:
  {

    if(action.response)
    {
       state = action.response
       return Object.assign([],state)

    }
    return state;

 }
  case UPDATE_WOOD:
    {
      if(action.response)
      state.forEach((...args)=>{ 
        
      if(args[0].id == action.oldObject.id)
      {
          state[args[1]]= action.response
          

      }
      
      });



      return Object.assign([],state)

    }
  // return musiccomponents.woods.filter(wood=>wood.isUpdateRequired == true);
  case CREATE_WOOD:
  {
    if(action.response)
    {
       state.push(action.response)
       return Object.assign([],state)

     }

    return [];
  }

  case DELETE_WOOD:

  {
    if(action.response)
    {
      state.forEach((...args)=>{ 
        
        if(args[0].name == action.oldObject.name)
        {
            state.splice(args[1],1)
            
  
        }
        
        });
        return Object.assign([],state)

    }

    return []

  }


  // return musiccomponents.woods.filter(wood=>wood.isSync == false);
  default:
   return state;


}

}
