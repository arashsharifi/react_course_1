import Time from "./Time";

function ExpenseCompContainer({ fName, date, price }) {
  return (
    <div className="flex flex-col  gap-2 w-[70%] p-2">
      <Time />
      <div className="flex px-3 py-2 flex-row items-center justify-between gap-2 bg-orange-400 shadow-xl rounded-r-xl">
        <p className="text-white">{date}</p>
        <h1 className="text-white">{fName}</h1>
        <span className="text-emerald-300 border-double border-4 border-fuchsia-700 px-4 py-1 bg-fuchsia-500 rounded-lg shadow-md">
          ${price}
        </span>
      </div>
    </div>
  );
}
export default ExpenseCompContainer;
