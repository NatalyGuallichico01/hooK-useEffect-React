import { useEffect, useRef, useState } from "react";
import "../styles/todoList.css";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [darkMode, setDarkMode] = useState([false]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); //window.innerWidth da el tamaño actual de la ventana
  //huks
  const inputRef = useRef(null);
  //poner todos los hooks al inicio
  useEffect(() => {
    console.log("useEffect TodoList (en cada renderizada) ");
  }); //se ejecuta en cada renderizada del componente
  useEffect(() => {
    console.log("useEffect TodoList (solo cuando se monta)");
  }, []); //si la lista de dependencias es vacia {[]} el arreglo vacio se ejecuta solo cuando se montan un componente
  useEffect(() => {
    console.log("useEffect TodoList (completed)");
  }, [completed]); //se ejecuta solo cuando se actualiza la variable de estado "completed"
  useEffect(() => {
    console.log("useEffect TodoList (completed, todo)");
    if (todos.length > 0) {
      document.title = `tienes ${todos.length} tareas pendientes`;
    } else {
      document.title = "No tienes  tareas pendientes";
    }
  }, [todos]); //se ejecuta solo cuando se actualiza la variable de estado "completed" y "todos"
  useEffect(() => {
    if (darkMode) {
      console.log("DARK");
    } else {
      console.log("LIGHT");
    }
  }, [darkMode]);

  useEffect(() => {
    console.log("SE MONTO EL COMPONENTE");
    window.addEventListener("resize", handleResize);
    return () => {
      console.log("SE DESMONTO EL COMPONENTE");
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleResize = () => {
    console.log("handleResize", window.innerWidth);
    setWindowWidth(window.innerWidth);
  };
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
  const handleSetDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark-mood" : ""}>
      <button onClick={handleSetDarkMode}>
        {darkMode ? "Desactivar" : "Activar"} modo oscuro
      </button>
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
      <h1>Ancho de la ventana: {windowWidth}</h1>
    </div>
  );
};
export default TodoList;
