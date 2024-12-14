import arrowIcon from "../assets/arrow-icon.svg";

const Type = ({ img, type }) => {
  return (
    <>
      <div className="flex justify-between p-4 outline-2 outline outline-white">
        <img className="w-4 object-contain" src={img} />
        <span>{type}</span>
        <img className="w-4 object-contain" src={arrowIcon} />
      </div>
    </>
  );
};

export default Type;
