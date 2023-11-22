import PropTypes from "prop-types";
import "./TaskList.css";

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task._id} className="card task-list-item">
          <div className="card-body">
            <h5 className="card-title task-text">{task.title}</h5>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onDeleteTask(task._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  onDeleteTask: PropTypes.func,
};

export default TaskList;
