import firebase  from "./firebase";


export const GET_ALL ='GET_ALL'
export const GET_ALBUM ='GET_ALBUM'
export const GET_WOOD = 'GET_WOOD'
export const GET_LYRICS = 'GET_LYRICS'
export const REQUEST_DOCUMENT = 'REQUEST_DOCUMENT'
export const RECEIVE_DOCUMENT = 'RECEIVE_DOCUMENT'
export const UPDATE_ALBUM = 'UPDATE_ALBUM'
export const UPDATE_WOOD = 'UPDATE_WOOD'
export const UPDATE_LYRICS = 'UPDATE_LYRICS'
export const CREATE_ALBUM = 'CREATE_ALBUM'
export const CREATE_WOOD = 'CREATE_WOOD'
export const CREATE_LYRICS = 'CREATE_LYRICS'
export const SELECT_WOOD = 'SELECT_WOOD'
export const SELECT_ALBUM = 'SELECT_ALBUM'

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
   db.collection('MusicList').doc(wood.woodName).set(wood).then(()=>{
   dispatch( receiveDocument({type:typeToAct,response:objectToCreate}));

}).catch((error)=>{
  errorOccured = true;

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

export const updateDocument = (objectToUpdate,collectionName,typeToAct)=>
{
  db.collection(collectionName).add(objectToUpdate)
  return {
    type:typeToAct,
    response:objectToUpdate
  }
}

export const getDocument = (collectionName,typeToAct)=>
{
var responseData = [];
 return function (dispatch)
{
 db.collection(collectionName).get().then((snapshot)=>{
   const data = snapshot.docs.map(doc => doc.data());
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
