import { useState } from "react";
import PropTypes from "prop-types";
import "./AddTask.css";

const AddTask = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onAddTask({ title });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          placeholder="New Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
};

AddTask.propTypes = {
  onAddTask: PropTypes.func,
};

export default AddTask;
