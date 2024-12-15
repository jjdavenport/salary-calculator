const Button = ({ button, flag, type }) => {
  return (
    <li>
      <button className="flex w-[98%] items-center justify-between rounded-lg border border-white bg-white bg-opacity-20 p-3 text-white backdrop-blur-md">
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
        <div className="h-4 w-4 rounded-full bg-white bg-opacity-20 outline outline-1 outline-white"></div>
      </button>
    </li>
  );
};

export default Button;
