import React,{useState,useEffect} from "react";

const ProfileStatus =(props)=>{

    let [editMode, setEditMode]=useState(false);
    let [status, setStatus]=useState(props.status);


    let activateEditMode=()=>{
        setEditMode(true)
    }
    let deactivateEditMode=()=>{
        setEditMode(false)
        props.updateStatus(status)
    }
    let onStatusChange=(e)=>{
        setStatus(e.currentTarget.value)
    }
/*    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }*/
        return (
            <div>
                {!editMode
                 ?   <div>
                        <span
                            onDoubleClick={activateEditMode}>
                            {status || "Change status"}</span>
                    </div>

                :
                    <div>
                        <input
                            onChange={onStatusChange}
                            autoFocus={true}
                            onBlur={deactivateEditMode}
                            value={status}/>
                    </div>
                }
            </div>
        )
}

export default ProfileStatus;