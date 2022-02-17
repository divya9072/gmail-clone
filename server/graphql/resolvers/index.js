const userResolvers=require('./users');
const User=require('../../models/userModel')
const Post =require ('../../models/Post');

module.exports={
    Query:{
        hello:()=>{
            return 'Hello World';
        },
        getPosts:async()=>{
            return await User.find()
            
        },
        getMails:async()=>{
            return await Post.find()
        },
    },
    Mutation:{
        ...userResolvers.Mutation,
        createPost:async(parent,args,context,info)=>{
            const {to,subject,message}=args.post;
            const post= await new Post({to,subject,message}).save();
            return post;
        },
    },
    
}