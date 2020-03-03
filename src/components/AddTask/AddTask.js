import React from 'react';
import './AddTask.sass'

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskTitle: ''
        }
    }

    changeTaskTitleValue = e => this.setState({taskTitle: e.target.value});

    addItem = () => {
        const {taskTitle} = this.state;
        taskTitle && this.props.addItem(taskTitle.trim());
        this.setState({taskTitle: ''});        
    }

    addOnEnterPressed = e => e.key === 'Enter' && this.addItem();

    render() {
        return(
            <div className="add__task form-group">
                <input
                    onChange={this.changeTaskTitleValue}
                    onKeyPress={this.addOnEnterPressed}
                    value={this.state.taskTitle}
                    placeholder="Add new task"
                    type="search"
                    className="add__input form-control"
                    autoFocus
                />
                <button className="add__button btn btn-primary" onClick={this.addItem}>➕</button>
            </div>
        )
    }
}

export default AddTask;
