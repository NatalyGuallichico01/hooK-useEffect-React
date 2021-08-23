import { useRef, useState } from "react";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  //huks
  const inputRef = useRef(null);

  const handleAddTask = () => {
    // const newTodo = document.querySelector("#todo").value;
    //setTodos((prevState) => [...prevState, newTodo]);
    //document.querySelector("#todo").value = "";

    //huks
    const newTodo = inputRef.current.value;
    setTodos((prevState) => [...prevState, newTodo]);
    inputRef.current.value = "";
  };
  const handleDeleteTask = (index) => {
    console.log("index", index);
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
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Eliminar</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TodoList;
