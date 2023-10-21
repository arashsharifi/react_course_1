import ExpenseCompContainer from "./components/ExpenseCompContainer";
import ExpenseItem from "./components/Expenseltem";
import ExpenseeDatay from "./components/ExpeseeDatay";
import Mytext from "./components/Mytext";
import Myborder from "./components/Myborder";
// import CreateElement from "./components/CreateElement";

const userData = [
  {
    fName: "armain",
    price: 300,
    date: new Date(2020, 2, 15).toISOString(),
    dateOrder: new Date(2023, 8, 23).toISOString(),
    id: 1,
  },
  {
    fName: "massoud",
    price: 270,
    date: new Date(2022, 2, 15).toLocaleString("en-US", { month: "long" }),
    dateOrder: new Date(2023, 8, 23).toISOString(),
    id: 2,
  },
  {
    fName: "armain",
    price: 400,
    date: new Date(2018, 8, 25).toDateString("en-US", { day: "2-digit" }),
    dateOrder: new Date(2023, 8, 23).toISOString(),
    id: 3,
  },
];

function App() {
  return (
    <div className="container mx-auto pt-6 flex flex-col justify-center items-center">
      <p>component No data information </p>
      <ExpenseItem />

      <p> components with data </p>
      {userData.map((userPrson) => (
        <ExpenseeDatay
          key={userPrson.id}
          fName={userPrson.fName}
          date={userPrson.date}
          price={userPrson.price}
        />
      ))}
      <p>copmonnets to components</p>
      {userData.map((userPrson) => (
        <ExpenseCompContainer
          key={userPrson.id}
          fName={userPrson.fName}
          price={userPrson.price}
          date={userPrson.date}
        />
      ))}
      <p>components of childeren components</p>
      {/* حتما باید بین تگ زده بشود تا استفاده بشود  */}
      {/* 👇 */}
      <Myborder>
        <Mytext />
      </Myborder>
      <p>createElement react method</p>
    </div>
  );
}

export default App;
