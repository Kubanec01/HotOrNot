import { Link } from "react-router";
import logoImg from "../../../assets/Logo-Title-SM.png";
import { IoArrowBack } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="bg-pink-primary w-full h-[78px] flex justify-center items-center fixed">
      {/* Back Navigate Button */}
      <Link
        to="/"
        replace
        className="absolute left-[58px] top-2/4 -translate-y-[50%] text-[30px] text-customWhite hover:bg-pink-tertiary duration-150 ease-linear p-[7px] rounded-[50px]"
      >
        <IoArrowBack />
      </Link>
      {/* Logo Img */}
      <img
        src={logoImg}
        className="object-cover w-[160px] h-auto mt-4 -ml-12"
        alt=""
      />
    </div>
  );
};

export default Navbar;
