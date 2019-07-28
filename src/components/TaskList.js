import React from "react";
import Task from "./Task";

const TaskList = props => {
  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);
  // console.log(active, done);

  // done.sort((a, b) => {
  //   return b.finishDate - a.finishDate;
  // });

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1;
      }
      if (a.finishDate > b.finishDate) {
        return -1;
      }
      return 0;
    });
  }

  if (active.length >= 2) {
    active.sort((a, b) => {
      if (a.date < b.date) {
        return -1;
      }
      if (a.date > b.date) {
        return 1;
      }
      return 0;
    });
  }
  const activeTasks = active.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const doneTasks = done.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <>
      <div className="active">
        <h2>
          Zadania do zrobienia <em>({active.length})</em>
        </h2>
        {activeTasks.length > 0 ? activeTasks : <p>Brak zadań</p>}
      </div>

      <hr />

      <div className="done">
        <h3>
          Zadania zrobione <em>({done.length})</em>
        </h3>
        {done.length > 5 && (
          <span style={{ fontSize: "12px" }}>
            wyświetlonych jest jedynie 5 ostatnich zadań
          </span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
