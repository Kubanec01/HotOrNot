import { FaGithub } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const PagesButtons = () => {
  return (
    <div className="w-11/12 max-w-[70.50rem] mx-auto flex items-center justify-center md:gap-[6.25rem] gap-[2.25rem] lg:mt-[0.5rem] md:mt-[0.9rem] mt-10">
      {/* GitHub Link Button */}
      <a
        className="md:px-[0.563rem] px-2 md:py-[6px] py-1 lg:text-[1.063rem] md:text-[0.875rem] text-sm font-semibold flex items-center justify-center gap-[0.188rem] rounded-[10px] bg-pink-primary
      text-customWhite hover:scale-[0.9] active:scale-100 duration-150"
        href="https://github.com/Kubanec01"
        target="_blank"
      >
        GitHub{" "}
        <span>
          <FaGithub />
        </span>
      </a>
      {/* Portfolio Link Button */}
      <a
        className="md:px-[0.5rem] px-2 md:py-[0.313rem] py-1 lg:text-[1rem] md:text-[0.875rem] text-sm font-semibold flex items-center justify-center rounded-[10px] text-pink-primary border-pink-primary border-2 hover:scale-[0.9] active:scale-100 duration-150"
        href="https://jakubroman.xyz/"
        target="_blank"
      >
        My Web{" "}
        <span className="translate-y-[0.063rem]">
          <IoIosArrowForward />
        </span>
      </a>
    </div>
  );
};

export default PagesButtons;
