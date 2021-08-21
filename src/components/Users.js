import { useState } from "react";
import "../styles/users.css";
const Users = () => {
  //declaracion arreglo de usuarios
  const initialUsers = [
    { id: 1, name: "Chalo", lastname: "Salvador" },
    { id: 2, name: "María", lastname: "Morales" },
    { id: 3, name: "Andrés", lastname: "Andrade" },
  ];
  //lista dinamica de usuarios declarar como variable de usuario
  //const state = useState(null);
  //  console.log("state", state);
  const [users, setUsers] = useState(initialUsers);
  const [error, setError] = useState(null);
  console.log("users", users);
  //console.log("setusers", setUsers);

  const handleAddUser = () => {
    console.log("handleAddUser");
    const name = document.querySelector("#name").value;
    const lastname = document.querySelector("#lastname").value;

    //si la palabra escrita es numero no me deja continuar

    if (name === "" || lastname === "") {
      //alert("Ingrese todos los datos");
      setError("Ingrese todos los campos");
      return;
    }

    const regex = /[0-9]/;
    const containsNumber = regex.test(name + lastname);
    if (containsNumber) {
      setError("Los campos no pueden contener numeros");
      return;
    }

    setError(null);
    const newUser = {
      id: users.length + 1,
      name,
      lastname,
    };
    const newUsersList = [...users, newUser];

    setUsers(newUsersList);
    document.querySelector("#name").value = "";
    document.querySelector("#lastname").value = "";
  };

  return (
    <div>
      <h1>Crear nuevo Usuario</h1>
      <div>
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="lastname">Apellido</label>
          <input type="text" id="lastname" />
        </div>
        {error && <div className="error">{error}</div>}

        <div>
          <button onClick={handleAddUser}>Agregar usuario</button>
        </div>
      </div>

      <h1>Lista de Usuarios ({users.length} usuarios)</h1>
      <ul>
        {users.map((user: { id: number, lastname: string, name: string }) => (
          <li key={user.id}>
            {user.id} {user.name} {user.lastname}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Users;
