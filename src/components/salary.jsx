const Salary = ({ salary }) => {
  return (
    <div className="-mt-11 flex flex-col items-center justify-center px-4 py-32 text-white">
      <div className="flex w-full flex-col items-center gap-2 rounded-lg bg-transparent px-2 pb-10 pt-2 outline outline-2 outline-white backdrop-blur-md">
        <h1 className="text-lg">Your Salary</h1>
        <span className="text-2xl">${salary}</span>
      </div>
    </div>
  );
};

export default Salary;
