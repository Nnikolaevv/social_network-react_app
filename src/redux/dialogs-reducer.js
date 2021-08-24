const SEND_MSG = 'SEND-MSG';
const UPDATE_NEW_MSG_TEXT = 'UPDATE-NEW-MSG-TEXT';

export const sendMsgActionCreator = () => ({type: SEND_MSG});
export const updateMsgTextActionCreator = (inputMsg) => (
    {type: UPDATE_NEW_MSG_TEXT,
     newMsgText: inputMsg});

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MSG:
            const newMsg = {
                id: 5,
                message: state.newMsgText,
            }
            state.outcomeMessages.push(newMsg)
            state.newMsgText = ""
            return state
        case UPDATE_NEW_MSG_TEXT:
            state.newMsgText = action.newMsgText;
            return state
        default:
            return state
    }


}


export default dialogsReducer;