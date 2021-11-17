import React, {ChangeEvent, FC, useEffect, useState} from "react";
import {TextField, Typography} from "@material-ui/core";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatus: FC<PropsType> = (props) => {

    const [editMode, setEditMode] = useState<boolean>(false);
    const [status, setStatus] = useState<string>(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activeEditMode = () => {
        setEditMode(true)
    };

    const deActiveEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value)
    };

    return (
        <div>
            {!editMode &&
            <div>
                <Typography onDoubleClick={activeEditMode}>{props.status || "NO STATUS"}</Typography>
            </div>
            }
            {editMode &&
            <div>
                <TextField
                    onBlur={deActiveEditMode}
                    autoFocus={true}
                    value={status}
                    onChange={onChangeStatus}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatus;