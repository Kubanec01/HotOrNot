import { useMediaQuery } from "usehooks-ts";

export const useIsMobileView = () => {
  return useMediaQuery("(max-width: 800px)");
};
