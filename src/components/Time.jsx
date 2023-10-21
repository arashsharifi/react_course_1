function Time() {
  const TimeDay = new Date(2020, 8, 15).getDay().toString();
  const TimeMounth = new Date(2020, 8, 15).getMonth().toString();
  const TimeYear = new Date(2020, 8, 15).getFullYear().toString();
  return (
    <div className="flex flex-row self-center gap-2">
      <span className="bg-green-600 px-3 py-2 rounded-lg">{TimeYear}</span>
      <span className="bg-green-600 px-3 py-2 rounded-lg">{TimeMounth}</span>
      <span className="bg-green-600 px-3 py-2 rounded-lg">{TimeDay}</span>
    </div>
  );
}
export default Time;
