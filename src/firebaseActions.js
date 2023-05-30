import firebase  from "./firebase";


export const GET_ALL ='GET_ALL'
export const GET_ALBUM ='GET_ALBUM'
export const GET_WOOD = 'GET_WOOD'
export const GET_LYRICS = 'GET_LYRICS'
export const REQUEST_DOCUMENT = 'REQUEST_DOCUMENT'
export const RECEIVE_DOCUMENT = 'RECEIVE_DOCUMENT'
export const UPDATE_ALBUM = 'UPDATE_ALBUM'
export const UPDATE_WOOD = 'UPDATE_WOOD'
export const UPDATE_LYRICS_MASTER = 'UPDATE_LYRICS_MASTER'
export const CREATE_ALBUM = 'CREATE_ALBUM'
export const CREATE_WOOD = 'CREATE_WOOD'
export const CREATE_LYRICS = 'CREATE_LYRICS'
export const SELECT_WOOD = 'SELECT_WOOD'
export const SELECT_ALBUM = 'SELECT_ALBUM'
export const DELETE_WOOD = 'DELETE_WOOD'
export const INSERT_LYRICS = 'INSERT_LYRICS'
export const GET_MUSIC_LIST = 'GET_MUSIC_LIST'
export const UPDATE_LYRICS = 'UPDATE_LYRICS'

const db = firebase.firestore();


export const createDocument = (objectToCreate,collectionName,typeToAct,currentState)=>
{
  return function (dispatch)
 {
   var errorOccured = false;
   var wood ={};
   if(typeToAct == "CREATE_WOOD")
   {
     wood = objectToCreate;

   }
   else {

     wood = currentState.woods[currentState.currentWoodIndex];

   }
   if(typeToAct != "INSERT_LYRICS")
   {
   db.collection('Users').add(wood).then(()=>{
   dispatch( receiveDocument({type:typeToAct,response:objectToCreate}));

}).catch((error)=>{
  errorOccured = true;

})

   }

   else 
   {
    db.collection('MusicList').doc().set(objectToCreate).then(()=>{
      dispatch( receiveDocument({type:typeToAct,response:objectToCreate}));
   
   }).catch((error)=>{
     errorOccured = true;
   
   })


   }





 }

}

export const createLyric = (objectToCreate) =>
{

  return function(dispatch)
  {
    db.collection('Lyrics').set(objectToCreate).then(()=>{
    dispatch(receiveDocument({type:"INSERT_LYRIC", response:objectToCreate}))

    })
  }
}

export const selectDocument = (selectedIndex,typeToAct,selectedDocument)=>
{

  return function (dispatch)
 {
   dispatch( receiveDocument({type:typeToAct,response:{selectedDocument,selectedIndex}}))

 }

}

export const deleteDocument = (...args)=>
{

  return function (dispatch)
  {
    
   db.collection(args[1]).doc(args[3].id?args[3].id:args[0].id).delete().then((success)=>{
  
      dispatch( receiveDocument({type:args[2],response:args[3]}));
  
    }).catch((excep)=>{
  
  
    })
  
  }


}

export const updateDocument = (...args)=>
{
  //debugger
return function (dispatch)
{
  
 db.collection(args[1]).doc(args[3].id?args[3].id:args[0].id).update(args[0]).then(()=> {
    dispatch( receiveDocument({type:args[2],response:args[0]}));
  }).catch((excep)=>{

  })

}
}




export const getDocument = (collectionName,typeToAct)=>
{
var responseData = [];
 return function (dispatch)
{
 db.collection(collectionName).get().then((snapshot)=>{
   const data = snapshot.docs.map(
     //debugger;
     doc => 
     {
       let tempDoc = {};
       tempDoc.id = doc.id; 
      
       Object.assign(tempDoc,doc.data())
       return tempDoc;
      }
     
     );
   console.log(data);
   dispatch( receiveDocument({type:typeToAct,response:data}))
}).catch((excep)=>{
   alert("error occured");

});


}

}

function receiveDocument(json) {
return json;
}
