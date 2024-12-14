import Type from "./components/type";
import roleIcon from "./assets/role-icon.svg";
import Calculator from "./components/calculator";
import Categories from "./components/categories";
import data from "./assets/data.json";
import Salary from "./components/salary";
import { useState } from "react";
import flagIcon from "./assets/flag-icon.svg";

function App() {
  const [salary, setSalary] = useState(0);
  return (
    <>
      <div>
        <section className="bg-role bg-no-repeat flex flex-col gap-2 p-4">
          <Type img={roleIcon} type="Role" />
          <Categories type="Role" data={data.countries.Palestine} />
          <Type img={flagIcon} type="Country" />
          <Categories type="Country" data={data.countries} />
        </section>
        <Calculator />
        <section className="bg-salary bg-no-repeat">
          <Salary salary={salary} />
        </section>
      </div>
    </>
  );
}

export default App;
