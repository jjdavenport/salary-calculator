import { useState } from "react";
import Button from "./button";

const Categories = ({ data, type, setSalary }) => {
  const [active, setActive] = useState(null);

  const toggle = (button) => {
    const checkButton = active === button;
    const activeButton = checkButton ? null : button;

    setActive(activeButton);

    setSalary((prev) => {
      if (type === "Country") {
        return {
          ...prev,
          country: activeButton,
          amount:
            activeButton && prev.job && data[activeButton]
              ? data[activeButton][prev.job]
              : 0,
        };
      } else if (type === "Role") {
        return {
          ...prev,
          job: activeButton,
          amount:
            activeButton && prev.country && data[prev.country]
              ? data[prev.country][activeButton]
              : 0,
        };
      }
      return prev;
    });
  };

  return (
    <div className="h-[185px] w-full overflow-hidden rounded-md bg-green-800 bg-opacity-10 p-2 backdrop-blur-md md:w-9/12 md:outline md:outline-1 md:outline-white">
      <ul className="flex h-full flex-col gap-2 overflow-auto">
        {type === "Role"
          ? Object.keys(data.Palestine).map((role) =>
              role !== "icon" ? (
                <Button
                  active={active === role}
                  onClick={() => toggle(role)}
                  type={type}
                  key={role}
                  button={role}
                />
              ) : null,
            )
          : Object.entries(data).map(([country, value]) => (
              <Button
                active={active === country}
                onClick={() => toggle(country)}
                type={type}
                flag={value.icon}
                key={country}
                button={country}
              />
            ))}
      </ul>
    </div>
  );
};

export default Categories;
