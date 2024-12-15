import Button from "./button";

const Categories = ({ data, type }) => {
  return (
    <div className="relative h-[190px] overflow-hidden rounded-md bg-green-800 bg-opacity-10 p-2 backdrop-blur-md">
      <ul className="flex h-full flex-col gap-2 overflow-auto">
        {Object.entries(data).map(([key, value], index) =>
          type === "Role" ? (
            key !== "icon" && (
              <Button type={type} key={index} button={key} salary={value} />
            )
          ) : (
            <Button type={type} flag={value.icon} key={index} button={key} />
          ),
        )}
      </ul>
    </div>
  );
};

export default Categories;
