import React from "react";

class ProfileStatus extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    state = {
        editMode: false,
        status: this.props.status,
    }

    activeEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deActiveEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)
    }

    onChange = (e) => {
        let value = e.target.value;
        this.setState({
            status: value,
        })

    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={ this.activeEditMode }>{this.props.status || "NO STATUS"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onBlur={ this.deActiveEditMode }
                           autoFocus={true}
                           value={this.state.status}
                           onChange={this.onChange}/>
                </div>
                }
            </div>
        )
    }


}

export default ProfileStatus;