import React,{useState,useEffect} from "react";

const ProfileStatus =(props)=>{

    let [editMode, setEditMode]=useState(false);
    let [status, setStatus]=useState(props.status);

    useEffect(()=>{
        setStatus(props.status);
    }, [props.status]);

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
        return (<>
                {!editMode
                 ?   <span
                            onDoubleClick={activateEditMode}>
                            {status || "Change status"}</span>

                :   <input
                            onChange={onStatusChange}
                            autoFocus={true}
                            onBlur={deactivateEditMode}
                            value={status}/>
                }
            </>
        )
}

export default ProfileStatus;