const Cart = ({
  image,
  text,
  id,
}: {
  image: string;
  text: string;
  id: "male" | "female";
}) => {
  let cartStyle = "";

  return (
    <div
      key={id}
      className={`w-[310px] h-[440px] rounded-[14px] bg-no-repeat bg-cover bg-center border-[6px] border-pink-primary
        flex justify-center items-end cursor-pointer ${cartStyle}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* TEXT */}
      <div className="w-full h-[56%] bg-linear-to-t from-pink-primary via-[#ffc0cbc6] via-50% to-[#ffc0cb00] to-90% flex justify-start items-end">
        <h1 className="text-[26px] font-semibold text-[white] ml-[20px] mb-[48px]">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default Cart;
