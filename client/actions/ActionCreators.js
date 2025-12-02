export function increment(index){
    return {
        type :'INCREMENT_LIKES',
        index 
    }
};

export function addComment (postId, author, actualComment){
    return {
        type :'ADD_COMMENT',
        postId,
        author,
        actualComment
    }
};

export function removeComments(postId, i){
    return {
        type :'REMOVE_COMMENT',
        postId,
        i,
     
    }
}

