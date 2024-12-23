const CreditCardLoader = () => {
  return (
    <div
      className={`animate-pulse rounded-[25px] overflow-hidden font-lato w-full bg-gray-200`}
    >
      <div className="pt-5 md:pt-6 px-5 md:px-6">
        <div className="flex justify-between mb-5 md:mb-[33px]">
          <div>
            <p
              className={`text-[11px] md:text-xs h-3 w-[54px] bg-gray-300 rounded-full`}
            ></p>
            <p
              className={`text-base md:text-xl font-semibold h-[20px] rounded-full mt-1 w-[62px] bg-gray-300`}
            ></p>
          </div>
          <div className="w-[29px] md:w-[35px] h-[29px] md:h-[35px] bg-gray-300 rounded-lg" />
        </div>
        <div className="flex">
          <div className="w-1/2">
            <p
              className={`text-[10px] rounded-full md:text-xs bg-gray-300  h-3 w-[90px] mb-1`}
            ></p>
            <p
              className={`leading-[18px] rounded-full font-semibold  bg-gray-300 w-[95px] h-[18px] text-[13px] md:text-[15px] mt-px `}
            ></p>
          </div>
          <div className="w-1/2">
            <p
              className={`text-[10px] rounded-full md:text-xs bg-gray-300 h-3  w-[90px] mb-1`}
            ></p>
            <p
              className={`leading-[18px] rounded-full font-semibold  bg-gray-300 h-[18px] w-8 text-[13px] md:text-[15px] mt-px `}
            ></p>
          </div>
        </div>
      </div>
      <div
        className={`px-5 md:px-6 py-4 md:py-5 flex items-center justify-between  mt-[16.11px] md:mt-[35.11px]`}
      >
        <p
          className={`text-[15px] rounded-full md:text-[22px] w-[185px] h-[30px] bg-gray-300 font-semibold`}
        ></p>
        <div className="w-[27px] md:w-[44px] h-[18px] md:h-[30px]  bg-gray-300 rounded-full" />
      </div>
    </div>
  );
};

export default CreditCardLoader;
