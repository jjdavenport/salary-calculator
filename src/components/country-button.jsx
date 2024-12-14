const CountriesButton = ({ button, flag }) => {
  return (
    <button className="flex">
      <img className="w-4 object-contain" src={flag} />
      {button}
      <div></div>
    </button>
  );
};

export default CountriesButton;
