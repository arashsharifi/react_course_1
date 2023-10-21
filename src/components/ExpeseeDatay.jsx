function ExpenseeDatay({ fName, date, price }) {
  return (
    <div className="bg-violet-600 mt-6 h-[50px] w-[70%] flex items-center justify-between gap-3 rounded-r-xl p-3 shadow-xl">
      <p className=" italic text-lg text-white">{date}</p>
      <h1 className="text-white">{fName}</h1>
      <span className="text-emerald-300 border-double border-4 border-fuchsia-700 px-4 py-1 bg-fuchsia-500 rounded-lg shadow-md">
        ${price}
      </span>
    </div>
  );
}
export default ExpenseeDatay;
