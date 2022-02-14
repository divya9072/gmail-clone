const {ApolloServer}=require('apollo-server')
const mongoose=require('mongoose');
const typeDefs=require('./graphql/typeDefs')
const resolvers=require('./graphql/resolvers')

const PORT=process.env.PORT||5000;

const server=new ApolloServer({
    typeDefs,
    resolvers,
    context:({req})=>({req})
})

mongoose.connect('mongodb+srv://Divya9072:Divimg9072@cluster0.dvcx3.mongodb.net/gmail_clone?retryWrites=true&w=majority',()=>console.log("Database Connected"));

server.listen({port:PORT})
.then(res=>{
    console.log("Server Running");
})
.catch(err=>{
    console.error(err)
})