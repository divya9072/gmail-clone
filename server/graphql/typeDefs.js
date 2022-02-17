const {gql}=require('apollo-server')
const typeDefs=gql`

type User{
    id:ID!
    email:String!
    token:String!
    createdAt:String!
    username:String!
}

type Post{
    id:ID
    to:String!
    subject:String!
    message:String!
}

input RegisterInput{
    username:String!
    password:String!
    confirmPassword:String!
    email:String!
}
type Query{
    hello:String
    getPosts:[User] 
    getMails:[Post]
}
input PostInput{
    to:String
    subject:String
    message:String
}
type Mutation{
    register(registerInput:RegisterInput):User!
    login(username: String!, password: String!): User!
    createPost(post:PostInput):Post
}
`
module.exports=typeDefs;