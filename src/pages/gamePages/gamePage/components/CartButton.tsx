const CartButton = ({
  onClickFunction,
  image,
}: {
  image: string;
  onClickFunction: () => void;
}) => {
  return (
    <button
      onClick={onClickFunction}
      className={`lg:w-[19.375rem] md:w-[17.125rem] w-[16.125rem] lg:h-[27.5rem] md:h-[25rem] sm:h-[22rem] h-[20rem] rounded-[14px] bg-no-repeat bg-cover bg-center border-[6px] border-pink-primary
        flex justify-center items-end cursor-pointer`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    ></button>
  );
};

export default CartButton;
