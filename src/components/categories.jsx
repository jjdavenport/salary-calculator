import Button from "./button";

const Categories = ({ data, type }) => {
  return (
    <div className="h-[185px] w-full overflow-hidden rounded-md bg-green-800 bg-opacity-10 p-2 backdrop-blur-md md:w-9/12 md:outline md:outline-1 md:outline-white">
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
