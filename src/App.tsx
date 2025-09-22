import { GameContextProvider } from "./hooks/contexts/GameContext";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <GameContextProvider>
        <MainRoutes />
      </GameContextProvider>
    </>
  );
}

export default App;
