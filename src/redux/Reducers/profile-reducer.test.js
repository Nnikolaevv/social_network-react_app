import profileReducer, {addPost, deletePost} from "./profile-reducer";

const state = {
    post: [
        {id: 1, message: 'Hello, how are you?', likeCount: 10},
        {id: 2, message: 'It\'s my first post', likeCount: 15},
        {id: 3, message: 'POST POST', likeCount: 15},
    ],
    profile: null,
    status: ''
};

it('length of posts should be increment', () => {
    const action = addPost('New post TEXT')
    const newState = profileReducer(state, action)

    expect(newState.post.length).toBe(4)
})

it('message of new posts should be New post TEXT', () => {
    const action = addPost('New post TEXT')
    const newState = profileReducer(state, action)

    expect(newState.post[4].message).toBe('New post TEXT')
})

it('after deleting length of message should be decrement', () => {
    const action = deletePost(1)
    const newState = profileReducer(state, action)

    expect(newState.post.length).toBe(3)
})

it('after deleting length should not be decrement if id is incorrect', () => {
    const action = deletePost(1000)
    const newState = profileReducer(state, action)

    expect(newState.post.length).toBe(4)
})


