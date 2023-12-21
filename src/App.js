import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/Showtask";

function App() {
  const [task, setTask] = useState({});

  const [editid, setEditid] = useState(0);

  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "medium"
  );

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const handlesubmit = (e) => {
    e.preventDefault();

    if (editid) {
      const date = new Date();
      const selectedTask = tasklist.find((task) => task.id === editid);
      const updateTask = tasklist.map((e) =>
        e.id === selectedTask.id
          ? (e = {
              id: e.id,
              name: task.name,
              time: `${date.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}   ${date.toLocaleDateString()}`,
            })
          : { id: e.id, name: e.name, time: e.time }
      );

      setTasklist([...updateTask]);
      setEditid(0);
      setTask("");
      return;
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: task.name,
        time: `${date.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}   ${date.toLocaleDateString()}`,
      };
      setTasklist([...tasklist, newTask]);
      e.target.task.value = "";
      setTask("");
    }
  };
  return (
    <div className={"App " + theme}>
      <div className="container">
        <Header setTheme={setTheme} theme={theme} />
        <AddTask
          handlesubmit={handlesubmit}
          task={task}
          setTask={setTask}
          editid={editid}
          setEditid={setEditid}
        />
        <ShowTask
          tasklist={tasklist}
          setTasklist={setTasklist}
          task={task}
          setTask={setTask}
          editid={editid}
          setEditid={setEditid}
        />
      </div>
    </div>
  );
}

export default App;
