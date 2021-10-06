
const initialState = {
    galleryImg: [
        {id: 1, name: 'Ferrari', url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'},
        {id: 2, name: 'Lamborghini',  url: 'https://images.unsplash.com/photo-1573950940509-d924ee3fd345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1696&q=80'},
        {id: 3, name: 'Camaro',  url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1694&q=80'},
        {id: 4, name: 'Aston',  url: 'https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'},

    ],
};

const galleryReducer = (state = initialState, action) => {
    return state
}

export default galleryReducer;