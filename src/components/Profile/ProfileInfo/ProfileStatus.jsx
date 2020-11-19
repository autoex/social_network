import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };
    editModeActivate = () => {
        this.setState({
            editMode: true
        })

    };

    editModeDeActivate = () => {
        this.setState({
            editMode: false
        });

        this.props.updateUserStatus(this.state.status)

    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })


    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return <div>

            {this.state.editMode ?
                <div><input onChange={this.onStatusChange} autoFocus={true} type={'text'} value={this.state.status || '-----'}
                            onBlur={this.editModeDeActivate}/></div> :
                <span onDoubleClick={this.editModeActivate}>{this.props.status}</span>}


        </div>
    }

}

export default ProfileStatus;