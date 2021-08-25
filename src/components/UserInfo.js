/*const user = {
  id: 1,
  name: "Laime Brahair",
  username: "Brut",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suit: "Apt. 556",
    city: "Emburgosia",
    zipcode: "92998-3874",
    goo: {
      lat: "-37.1359",
      lng: "81.1496",
    },
  },
  phone: "1-568-465-854",
  website: "hildegard.org",
  company: {
    name: "Camaguerra Croma",
    catchPhrase: "Multi-layered client-server neural-set",
    bs: "barces real.line a-rarkets",
  },
};
*/
import { useEffect, useState } from "react";

const UserInfo = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    /*fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        setUser(data);
      });*/
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();
      setUser(data);
    };

    /*.then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        setUser(data);
      });*/
    getData();
  }, []);

  if (!user) {
    return "cargando datos...";
  }
  return (
    <div>
      <div>
        <strong>Nombre:</strong>
        {user.name}
      </div>
      <div>
        <strong>Username:</strong>
        {user.username}
      </div>
      <div>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </div>
      <div>
        <strong>Direccion:</strong>
        {user.address.street},{user.address.suit}, {user.address.city},
        {user.address.zipcode}
      </div>
      <div>
        <strong>Telefono:</strong>
        {user.phone}
      </div>
      <div>
        <strong>Website:</strong>
        <a href={user.website}>{user.website}</a>
      </div>
    </div>
  );
};
export default UserInfo;
