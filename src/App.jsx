import Header from "./Header";
import Banner from "./Banner";
import { useEffect, useState } from "react";
import Players from "./Players";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [coins, setCoins] = useState(0);
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

  useEffect(() => {
    document.title = "Welcome to Dream11";
  }, []);

  return (
    <>
      <Header coins={coins} />
      <Banner handleAddCoins={handleAddCoins} />
      <Players coins={coins} setCoins={setCoins} />
      <ToastContainer />
    </>
  );
}

export default App;
