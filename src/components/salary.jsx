const Salary = ({ salary }) => {
  const formatSalary = salary.amount.toLocaleString();
  return (
    <main className="flex w-full flex-col items-center justify-center px-4 py-32 text-white md:w-9/12 md:py-0">
      <div className="flex w-full flex-col items-center rounded-lg bg-transparent px-2 pb-10 pt-2 outline outline-2 outline-white backdrop-blur-md ~sm/md:~gap-2/0 md:px-0 md:pb-0">
        <h1 className="~sm/md:~text-lg/2xl">Your Salary</h1>
        <span className="~sm/md:~text-2xl/6xl ~sm/md:~p-0/40">
          ${formatSalary}
        </span>
      </div>
    </main>
  );
};

export default Salary;
