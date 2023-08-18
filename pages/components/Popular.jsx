const Popular = () => {
  const services = ["Hair", "Nails", "Coloring", "Message", "Facials", "Hair"];
  return (
    <div className="px-5 mt-4">
      <p className="text-xl">
        Popular Search{" "}
        <span className="float-right text-[#E092D3] hover:text-[#f073db]">
          View all
        </span>
      </p>
      <div className="flex flex-wrap mt-3">
        {services.map((service, index) => (
          <span
            key={index}
            className={`bg-[#E1F5FA] text-sm text-[#2E7887] hover:bg-[#bbdce3] rounded-2xl px-7 py-1.5 mb-2 ${
              index % 3 !== 2 ? "mr-2" : ""
            } ${index >= 3 ? "mt-2" : ""}`}
          >
            {service}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Popular;
