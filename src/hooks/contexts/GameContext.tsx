import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactElement,
} from "react";

type GameContextType = {
  hoveredCart: "male" | "female" | null;
  setHoveredCart: Dispatch<React.SetStateAction<"male" | "female" | null>>;
};

const gameContext = createContext<GameContextType | undefined>(undefined);

export const GameContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [hoveredCart, setHoveredCart] = useState<"male" | "female" | null>(
    null
  );

  return (
    <gameContext.Provider value={{ hoveredCart, setHoveredCart }}>
      {children}
    </gameContext.Provider>
  );
};

export const useGameContext = (): GameContextType => {
  const context = useContext(gameContext);

  if (!context) {
    throw new Error("useGameContext must be used in GameContextProvider");
  }
  return context;
};
