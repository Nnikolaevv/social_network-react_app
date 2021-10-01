import React, {useEffect, useState} from "react";
import {TextField, Typography} from "@material-ui/core";

const ProfileStatus = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

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

  const onChangeStatus = (e) => {
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
                <TextField onBlur={deActiveEditMode}
                       autoFocus={true}
                       value={status}
                       onChange={onChangeStatus}/>
            </div>
            }
        </div>
    )


}

export default ProfileStatus;