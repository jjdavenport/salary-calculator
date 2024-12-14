import RolesButton from "./roles-button";
import CountriesButton from "./country-button";

const Categories = ({ data, type }) => {
  return (
    <>
      <ul className="flex flex-col">
        {Object.entries(data).map(([key, value], index) =>
          type === "Role" ? (
            <RolesButton key={index} button={key} salary={value} />
          ) : (
            <CountriesButton flag={value.icon} key={index} button={key} />
          ),
        )}
      </ul>
    </>
  );
};

export default Categories;
