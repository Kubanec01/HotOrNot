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
      className={`w-[310px] h-[440px] rounded-[14px] bg-no-repeat bg-cover bg-center border-[6px] border-pink-primary
        flex justify-center items-end cursor-pointer`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    ></button>
  );
};

export default CartButton;
