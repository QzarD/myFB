import React from "react";

export default class ProfileStatus extends React.Component{
    state={
        editMode: false
    }

    activateMode(){
        this.setState({
            editMode: true
        })
    }
    deactivateMode(){
        this.setState({
            editMode: false
        })
    }
    render(){
        return (
            <div>
                {!this.state.editMode
                 ?   <div>
                        <span
                            onDoubleClick={this.activateMode.bind(this)}>
                            {this.props.status}</span>
                    </div>

                :
                    <div>
                        <input
                            autoFocus={true}
                            onBlur={this.deactivateMode.bind(this)}
                            value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}