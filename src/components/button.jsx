const Button = ({ button, flag, type, onClick, active }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={`${active ? "bg-opacity-100 text-green-700" : "bg-opacity-20 text-white"} flex w-[98%] items-center justify-between rounded-lg border border-white bg-white p-3 backdrop-blur-md transition-all duration-300 ease-in-out focus:outline-none`}
      >
        {type === "Country" && (
          <div className="flex gap-4">
            <img
              className="w-8 rounded-md object-contain"
              src={flag}
              alt={button}
            />
            {button}
          </div>
        )}
        {type !== "Country" && button}
        <div
          className={`${active ? "scale-110 border-green-900 bg-green-900 bg-opacity-100 outline-none" : "scale-100 bg-white bg-opacity-20 outline outline-1 outline-white"} flex h-4 w-4 items-center justify-center rounded-full transition-all duration-300 ease-in-out`}
        >
          {active && (
            <div className="h-[6px] w-[6px] rounded-full bg-white"></div>
          )}
        </div>
      </button>
    </li>
  );
};

export default Button;
