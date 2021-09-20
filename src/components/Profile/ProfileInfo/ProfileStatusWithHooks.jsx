import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

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
               <b>Status</b>: <span onDoubleClick={activeEditMode}>{props.status || "NO STATUS"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onBlur={deActiveEditMode}
                       autoFocus={true}
                       value={status}
                       onChange={onChangeStatus}/>
            </div>
            }
        </div>
    )


}

export default ProfileStatusWithHooks;