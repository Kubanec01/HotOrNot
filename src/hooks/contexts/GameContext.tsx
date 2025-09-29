import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
} from "react";

type GameContextType = {
  hoveredCart: "male" | "female" | null;
  setHoveredCart: Dispatch<React.SetStateAction<"male" | "female" | null>>;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
  isGameRunning: boolean;
  setIsGameRunning: Dispatch<React.SetStateAction<boolean>>;
};

const gameContext = createContext<GameContextType | undefined>(undefined);

export const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [hoveredCart, setHoveredCart] = useState<"male" | "female" | null>(
    null
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGameRunning, setIsGameRunning] = useState(false);

  return (
    <gameContext.Provider
      value={{
        hoveredCart,
        setHoveredCart,
        isModalOpen,
        setIsModalOpen,
        isGameRunning,
        setIsGameRunning,
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
