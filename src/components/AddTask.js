export const AddTask = ({ handlesubmit, editid, task, setTask }) => {
  return (
    <section className="addTask">
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          name="task"
          value={task.name || ""}
          autoComplete="off"
          placeholder="AddTask"
          maxLength="25"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{editid ? "UPDATE" : "ADD"}</button>
      </form>
    </section>
  );
};
