import React, {useState} from "react";


const ProfileStatusWithHooks = (props) => {
    /*let stateWithSetState = useState(true);
   *let editMode =stateWithSetState[0];
    let setEditMode =stateWithSetState[1];*/


    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activeMode = () => {
        setEditMode(true)
    };

    const editModeDeActivate = () => {
        setEditMode(false);
         props.updateUserStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);




    };

    return <div>
        {!editMode &&
        <div onDoubleClick={activeMode}>{props.status}</div>
        }
        {editMode &&
        <div><input autoFocus={true} type={'text'}
                    onBlur={editModeDeActivate}
                    onChange={onStatusChange}
                    value={status || '-----'}
        /></div>
        }


    </div>


};

export default ProfileStatusWithHooks;