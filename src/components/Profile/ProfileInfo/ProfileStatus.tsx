import React, {ChangeEvent, FC, useEffect, useState} from "react";
import {TextField, Typography} from "@material-ui/core";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatus: FC<PropsType> = ({status, updateStatus}) => {

    const [editMode, setEditMode] = useState<boolean>(false);
    const [statusMsg, setStatusMsg] = useState<string>(status);

    useEffect(() => {
        setStatusMsg(status);
    }, [status])

    const activeEditMode = () => {
        setEditMode(true)
    };

    const deActiveEditMode = () => {
        setEditMode(false);
        updateStatus(statusMsg)
    };

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatusMsg(e.target.value)
    };

    return (
        <div>
            {!editMode &&
            <div>
                <Typography onDoubleClick={activeEditMode}>{statusMsg || "NO STATUS"}</Typography>
            </div>
            }
            {editMode &&
            <div>
                <TextField
                    onBlur={deActiveEditMode}
                    autoFocus={true}
                    value={statusMsg}
                    onChange={onChangeStatus}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatus;