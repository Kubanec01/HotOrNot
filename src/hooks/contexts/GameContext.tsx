import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
} from "react";
import { maleCharactersData } from "../../data/animeCharacters/maleCharacters";
import type { CharactersData } from "../../data/animeCharacters/types";

type GameContextType = {
  hoveredCart: "male" | "female" | null;
  setHoveredCart: Dispatch<React.SetStateAction<"male" | "female" | null>>;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
  isGameRunning: boolean;
  setIsGameRunning: Dispatch<React.SetStateAction<boolean>>;
  setGameData: Dispatch<React.SetStateAction<CharactersData[]>>;
  gameData: CharactersData[];
};

const gameContext = createContext<GameContextType | undefined>(undefined);

// Data
const maleGameData = maleCharactersData;

export const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [hoveredCart, setHoveredCart] = useState<"male" | "female" | null>(
    null
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [gameData, setGameData] = useState<CharactersData[]>(maleGameData);

  return (
    <gameContext.Provider
      value={{
        hoveredCart,
        setHoveredCart,
        isModalOpen,
        setIsModalOpen,
        isGameRunning,
        setIsGameRunning,
        setGameData,
        gameData,
      }}
    >
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
