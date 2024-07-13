import { useState } from 'react'
import Header from './components/Header'
import Meteors from './components/magicui/meteors'
import Particles from './components/magicui/particles'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=" w-full h-full bg-black   " >      
      <Header />
      <Meteors  />       
      <Particles/>
      
    </div>
    </>
  )
}

export default App
