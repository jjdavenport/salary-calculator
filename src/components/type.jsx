const Type = ({ svg, type, desktop }) => {
  return (
    <>
      <div className="z-10 flex w-full items-end justify-between rounded-md bg-transparent text-white outline outline-1 outline-white backdrop-blur-md ~sm/md:~px-6/2 ~sm/md:~py-6/4 md:w-9/12 md:justify-start md:gap-3">
        {svg}
        <span>{type}</span>
        {!desktop && (
          <>
            <svg
              className="w-4 fill-white"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 330 330"
            >
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              />
            </svg>
          </>
        )}
      </div>
    </>
  );
};

export default Type;
