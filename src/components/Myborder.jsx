function Myborder(props) {
  return (
    <div className="border-2 border-orange-600 text-center w-[90%] m-4">
      {/* 👇متد چیلدرن را باید بدهیم تا کار کند  */}
      {props.children}
    </div>
  );
}
export default Myborder;
