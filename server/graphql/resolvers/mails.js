// const Post =require ('./models/Post');

// const resolvers={
//     Query:{
//         createPost:async(parent,args,context,info)=>{
//             const {to,subject,message}=args.post;
//             const post= await new Post({to,subject,message}).save();
//             return post;
//         },
//     },
// };
// module.exports=resolvers;