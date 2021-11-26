import React, {FC} from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Avatar, Box, Card, CardContent, Grid, makeStyles, Typography} from "@material-ui/core";
import {DialogType, MessageType} from "../../redux/Reducers/dialogs-reducer";

const useStyles = makeStyles(theme => ({
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    dialogsHeader: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: theme.spacing(1),
        fontSize: 20,
        fontWeight: 500,
        color: '#555',
    }

}))

type PropsType = {
    dialogs: Array<DialogType>
    incomeMessages: Array<MessageType>
    outcomeMessages: Array<MessageType>
    sendMsg: (message: string) => void
}

const Dialogs: FC<PropsType> = ({dialogs, incomeMessages, outcomeMessages, sendMsg}) => {
    const classes = useStyles();

    const dialogsElement = dialogs.map(d => <DialogItem name={d.name}
                                                        key={d.id}
                                                        id={d.id}
                                                        avatarImg={d.avatarImg}/>);

    const outcomeMessagesElement = outcomeMessages.map(m => <Message message={m.message} key={m.id}/>);

    const addNewMessage = (message: {newMessage: string}) => {
        sendMsg(message.newMessage)
    }

    return (
        <Grid container justifyContent='center' alignItems='center'>
            <Grid item xs={12} >
                <Typography className={classes.dialogsHeader}
                            component='span'
                            gutterBottom
                            align='center'>
                    Dialogs List
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <CardContent className={classes.cardContent}>
                        <Box>
                            <Avatar src={''}/>
                            <Typography component='span'
                                        variant='body1'
                                        color="textPrimary"
                                        gutterBottom>
                                Name
                            </Typography>
                        </Box>
                        <Typography component='span'
                                    variant='body1'
                                    color="textPrimary"
                                    gutterBottom>
                            Message
                        </Typography>
                        <Typography component='span'
                                    variant='body1'
                                    color="textPrimary"
                                    gutterBottom>
                            Data
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

        // <div className='dialogs'>
        //     {/*<div className='dialogsItems'>*/}
        //     {/*    {dialogsElement}*/}
        //     {/*</div>*/}
        //     {/*<div className='messages'>*/}
        //
        //     {/*    <div className='outcomeMessages'>*/}
        //     {/*        {outcomeMessagesElement}*/}
        //     {/*    </div>*/}
        //     {/* <AddMessageFormRedux onSubmit={addNewMessage}/>*/}
        //     {/*</div>*/}
        // </div>
    )
};


export default Dialogs
