const Cart = ({ image, text }: { image: string; text: string }) => {
  return (
    <div
      className="w-[310px] h-[440px] rounded-[14px] bg-no-repeat bg-cover bg-center border-[6px] border-pink-primary
        flex justify-center items-end
        "
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="w-full h-[56%] bg-linear-to-t from-pink-primary via-[#ffc0cbc6] via-50% to-[#ffc0cb00] to-90% flex justify-start items-end">
        <h1 className="text-[26px] font-semibold text-[white] ml-[20px] mb-[48px]">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default Cart;
