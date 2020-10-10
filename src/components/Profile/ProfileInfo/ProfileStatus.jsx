import React from "react";


class ProfileStatus extends React.Component {

    state = {
        status: 'Text status',
        editMode: false
    };
    editModeToggle = () => {
        this.setState({
            editMode: !this.state.editMode
        })

    };

    statusChange = (e) => {
        let txt = e.target.value;
        this.setState({
            status: txt
        })
    };

    render() {
        return <div>
            {this.state.editMode ?
                <div><input autoFocus={true} type={'text'} value={this.state.status}
                            onChange={this.statusChange} onBlur={this.editModeToggle}/></div> :
                <div onDoubleClick={this.editModeToggle}>{this.state.status}</div>}


        </div>
    }

}

export default ProfileStatus;