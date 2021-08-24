import { useEffect, useRef, useState } from "react";
const TodoList = () => {
  const [todos, setTodos] = useState(["a", "b", "c"]);
  const [completed, setCompleted] = useState([]);
  //huks
  const inputRef = useRef(null);
  //poner todos los hooks al inicio
  useEffect(() => {
    console.log("TodoList Mounted");
  });
  const handleAddTask = () => {
    // const newTodo = document.querySelector("#todo").value;
    //setTodos((prevState) => [...prevState, newTodo]);
    //document.querySelector("#todo").value = "";

    //huks
    console.log("input.current", inputRef.current);
    const newTodo = inputRef.current.value;
    setTodos((prevState) => [...prevState, newTodo]);
    inputRef.current.value = "";
  };
  const handleDeleteTask = (index) => {
    console.log(index);
    const newTodos = todos.filter((todo, i) => i !== index);
    console.log("NewTodos", newTodos);
    setTodos(newTodos);
  };
  const handleCompleteTask = (positionComplete) => {
    console.log("positionComplete", positionComplete);
    const taskComplete = todos[positionComplete];
    console.log("taskComplete", taskComplete);
    handleDeleteTask(positionComplete);
    setCompleted((prevState) => [...prevState, taskComplete]);
  };
  //el ref={inputRef} es parte del huks
  return (
    <div>
      <div>
        <label htmlForm="Todo">Nombre de la Tarea</label>
        <input type="text" id="todo" ref={inputRef} />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
      <div>
        <h3>Tareas Pendientes</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Eliminar</th>
              <th>Completa</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo}</td>
                <td>
                  <button onClick={() => handleDeleteTask(index)}>
                    Eliminar Tarea
                  </button>
                </td>
                <td>
                  <button onClick={() => handleCompleteTask(index)}>
                    Tarea Completada
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3>Tareas Completadas</h3>
        <ul>
          {completed.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TodoList;
