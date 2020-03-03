import React from 'react';
import TaskItem from './components/TaskItem/TaskItem'
import AddTask from './components/AddTask/AddTask'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor(props){
        super(props);
        !localStorage.length && localStorage.setItem('tasks', '[]');
        this.state = {
            taskItems: JSON.parse(localStorage.getItem('tasks'))
        }
    }

    addItem = taskTitle => {
        this.setState(state =>
            state.taskItems.push(
                {
                    id: Date.now(),
                    text: taskTitle,
                    done: false,
                }
            )
        )
    };

    checkItem = id => this.setState(state => {
        const checked = this.state.taskItems.find(item => item.id == id);
        return checked.done = !checked.done;
    });

    deleteItem = id => this.setState({taskItems: this.state.taskItems.filter(item => item.id != id)});

    render() {
        localStorage.setItem('tasks', JSON.stringify(this.state.taskItems));
        return(
            <div className="app">
                {this.state.taskItems.map(item =>
                    <TaskItem
                        checkItem={() => this.checkItem(item.id)}
                        deleteItem={() => this.deleteItem(item.id)}
                        text={item.text}
                        done={item.done}
                        key={item.id}
                    />
                )}
                <AddTask addItem={this.addItem}/>
            </div>
        )
    }
}

export default App;
