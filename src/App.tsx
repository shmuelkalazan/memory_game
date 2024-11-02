import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Deshbord from './components/Deshbord'

function App() {
  const [allopencards, setAllOpencards] = useState<Number[]>([])
  const [allow ,setAllow] = useState<boolean>(true)


  useEffect(()=>{
    console.log("allow : " + allow)
    setAllow(true)
  },[allow])

  return (
    <div className='app'>
      <h1>משחק הזיכרון</h1>
      {/* <h2>מספר נסיונות{}</h2> */}
      <Deshbord 
      allow={allow} 
      setAllow={setAllow} 
      setAllOpencards={setAllOpencards} 
      allopencards={allopencards}/>
    </div>
  )
}

export default App
