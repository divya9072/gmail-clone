import gql from 'graphql-tag'; 
export const CREATE_POST=gql`
 mutation createPost($to:String,$subject:String,$message:String){
     createPost(post:{to:$to,subject:$subject,message:$message}){
         id
         to
         subject
         message
     }
 }

`;
export const DELETE_MAIL=gql`
 mutation deletePost($id:String!){
     deletePost(id:$id)
 }
`;


