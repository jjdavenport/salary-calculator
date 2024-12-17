import { useState } from "react";
import Button from "./button";

const Categories = ({ data, type }) => {
  const [active, setActive] = useState(null);

  const toggle = (button) => {
    setActive((prev) => (prev === button ? null : button));
  };

  return (
    <div className="h-[185px] w-full overflow-hidden rounded-md bg-green-800 bg-opacity-10 p-2 backdrop-blur-md md:w-9/12 md:outline md:outline-1 md:outline-white">
      <ul className="flex h-full flex-col gap-2 overflow-auto">
        {Object.entries(data).map(([i, value], index) =>
          type === "Role" ? (
            i !== "icon" && (
              <Button
                active={active === i}
                onClick={() => toggle(i)}
                type={type}
                key={index}
                button={i}
                salary={value}
              />
            )
          ) : (
            <Button
              active={active === i}
              onClick={() => toggle(i)}
              type={type}
              flag={value.icon}
              key={index}
              button={i}
            />
          ),
        )}
      </ul>
    </div>
  );
};

export default Categories;
