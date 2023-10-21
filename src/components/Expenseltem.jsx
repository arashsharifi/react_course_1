function ExpenseItem() {
  const price = 200;
  const now = new Date().toISOString();
  const txtOrder = "this is myorder";
  return (
    <div className="bg-lime-300 mt-6 h-[50px] w-[70%] flex items-center justify-between gap-3 rounded-r-xl p-3 shadow-xl">
      <p className="text-gray-600 italic text-lg ">{now}</p>
      <h1 className="text-blue-900">{txtOrder}</h1>
      <span className="text-emerald-300 border-double border-4 border-fuchsia-700 px-4 py-1 bg-fuchsia-500 rounded-lg shadow-md">
        ${price}
      </span>
    </div>
  );
}
export default ExpenseItem;
