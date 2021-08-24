const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT,
    newPostText: text});


const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            }
            state.post.push(newPost)
            state.newText = " ";
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state
        default:
            return state
    }

}

export default profileReducer;