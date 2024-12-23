const TransactionCardLoader = () => {
  return (
    <div className="animate-pulse flex items-center gap-4 mb-[10px]">
      <div className="w-[50px] md:w-[55px] h-[50px] md:h-[55px] rounded-full flex items-center bg-gray-300 justify-center"></div>
      <div>
        <p className="text-text rounded-full font-medium text-sm md:text-base mb-1 md:mb-2 bg-gray-300 h-5 w-[165px]"></p>
        <p className="text-text-label rounded-full text-xs md:text-[15px] font-normal w-[140px] h-4 bg-gray-300"></p>
      </div>
      <p
        className={`ml-auto font-medium rounded-full text-[11px] md:text-base w-[52px] h-[22px] bg-gray-300`}
      ></p>
    </div>
  );
};

export default TransactionCardLoader;
