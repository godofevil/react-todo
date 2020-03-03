import React from 'react';
import './TaskItem.sass'

const TaskItem = (props) =>
    <div
        className={!props.done ? "task__item alert alert-success" : "task__item alert alert-secondary"}
    >
        <input
            type="checkbox"
            checked={props.done && "checked"}
            onChange={props.checkItem}
            className="task__checkbox"
        />
        <span
            onClick={props.checkItem}
            className={!props.done ? "task__text" : "task__text task__text--checked"}
        >
            {props.text}
        </span>
        <span onClick={props.deleteItem} className="task__button btn btn-danger">
            ×
        </span>
    </div>

export default TaskItem;
