import Users from "./Users";
import Counter from "./Counter";

function App({ name, lastname, age, subjects, ...props }) {
  //antes App(props)
  //const name="Natilu";
  //const lastname="Guallichico";

  //console.log("PROPS", props);
  //destructuring assigment
  //const { name, lastname, age, subjects } = props;

  const arr1 = [2, 2, 2];
  const arr2 = [2, 4, 5];

  const arr3 = arr1.map((x, index) => x + arr2[index]);
  //console.log("arr3", arr3);

  const hasTwo = arr1.some((x) => x === 2);
  // console.log("hasTwo", hasTwo);

  const allTwo = arr1.every((x) => x === 2);
  //console.log("allTwo", allTwo);

  return (
    <>
      <div className={"greeting"}>
        Hola {name} {lastname} !!!
      </div>
      <div className={"age"}>Edad: {age}</div>
      <div>Subjects: </div>
      <ul>
        {subjects.map((subject, index) => {
          return <li key={index}>{subject}</li>;
        })}
      </ul>
      <ul>
        {arr3.map((number, index: number) => {
          return <li key={index}>{number}</li>;
        })}
      </ul>
      {hasTwo && "si contiene el numero 2"}
      {hasTwo ? "si contiene el numero 2" : "no contiene el numero 2"}

      <Counter />
      <Users />
    </>
  );
}

export default App;
