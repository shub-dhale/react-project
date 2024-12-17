import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-3xl bg-orange-500 font-bold underline text-center x-1 y-2'>Currency converter</h1>
    </>
  )
}

export default App
