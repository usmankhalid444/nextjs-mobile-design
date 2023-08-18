const Timings = () => {
  return (
    <div className="px-5 mt-5">
      <p className="font-semibold">Opening Hours</p>
      <div className="grid grid-cols-2 mt-3">
        <div className="text-sm relative">
          <span className="inline-block absolute top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-[#19697A] rounded-full"></span>
          <p className="text-[#797f86] pl-3">Monday - Friday</p>
          <p className="font-semibold pl-3">08:00am - 03-00pm</p>
        </div>
        <div className="text-sm relative">
          <span className="inline-block absolute top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-[#19697A] rounded-full"></span>
          <p className="text-[#797f86] pl-3">Saturday - Sunday</p>
          <p className="font-semibold pl-3">09:00am - 02-00pm</p>
        </div>
      </div>
    </div>
  );
};

export default Timings;
