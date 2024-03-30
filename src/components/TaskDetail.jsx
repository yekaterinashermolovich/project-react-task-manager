/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";

export const TaskDetail = ({ taskId, onClose }) => {
  const tasks = useSelector((state) => state.tasks);
  const task = tasks.find((item) => item.id === parseInt(taskId));

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div 
       style={{
        margin: "10px"
       }}>
      <h2>{task.name}</h2>
      <p>{task.description}</p>
      <p>Status: {task.completed ? "Completed" : "Not completed"}</p>
      <button
        onClick={() => {
          onClose();
          window.history.replaceState(null, "Home", "/");
          // null - состояние данных, которое будем ассоциировать с указанным URL,состояние передавать и менять ненужно поэтому указываем null
          // "Home" страница на которую происходит переход,
          //   путь который будет указываться в адресной строке
        }}
      >
        Закрыть
      </button>
      {/* Вывод деталей задачи */}
    </div>
  );
};
