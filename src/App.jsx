import Header from "./Header";
import Banner from "./Banner";
import { useEffect, useState } from "react";
import Players from "./Players";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "./Button";
import SelectedPlayers from "./SelectedPlayers";

function App() {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [view, setView] = useState("available");

  const handleAddCoins = (event) => {
    event.preventDefault();
    setCoins(coins + 1000000);
    notifySuccess();
  };

  const notifySuccess = () => {
    toast.success("Coin Added successfully!", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSelectPlayer = (player) => {
    setSelectedPlayers((prev) => [...prev, player]);
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };

  useEffect(() => {
    document.title = "Welcome to Dream11";
  }, []);

  return (
    <>
      <Header coins={coins} />
      <Banner handleAddCoins={handleAddCoins} />
      <Button onViewChange={handleViewChange} view={view} />
      {view === "available" ? (
        <Players
          coins={coins}
          setCoins={setCoins}
          onSelectPlayer={handleSelectPlayer}
        />
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          onViewChange={handleViewChange}
        />
      )}
      <ToastContainer />
    </>
  );
}

export default App;
