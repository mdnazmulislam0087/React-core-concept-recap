
import './post.css';

// here post is props
export default function Post({post}){
    console.log(post)

    return(
        <div className="post1">
        <h5>Title: {post.title} </h5>
        <p><small>userID:{post.userId} </small></p>
        <p><small>postID:{post.id} </small></p>
        <p>Body: {post.body}</p>
        
        </div>
    )


}