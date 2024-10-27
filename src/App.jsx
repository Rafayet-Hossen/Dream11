import Header from './Header'
import Banner from './Banner'
import { useEffect, useState } from 'react';
import Players from './Players';
function App() {
  const [coins, setCoins] = useState(0);
  const handleAddCoins = () => {
    setCoins(coins + 1000000);
  };
  useEffect(() => {
    document.title = 'Welcome to Dream11'
  },[])
  return (
    <>
      <Header coins={coins}></Header>
      <Banner handleAddCoins = {handleAddCoins}></Banner>
      <Players></Players>
    </>
  )
}

export default App
