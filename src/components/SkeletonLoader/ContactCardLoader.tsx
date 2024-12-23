const ContactCardLoader = () => {
  return (
    <div className="animate-pulse flex flex-col items-center text-center w-[100px]">
      <div className="mb-4 w-[70px] h-[70px] rounded-full bg-gray-300" />
      <p
        className={`text-[16px] text-text rounded-full bg-gray-300 w-[93px] h-[22px]`}
      ></p>
      <p
        className={`text-[15px] text-text-label mt-[5px] rounded-full bg-gray-300 w-[56px] h-5 group-hover:font-bold `}
      ></p>
    </div>
  );
};

export default ContactCardLoader;
