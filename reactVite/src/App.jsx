import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [number, setnumber] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passGenerator = useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) {
      string = string + "0123456789"
    }
    if (charAllowed) {
      string = string + "!@$%^&*_-+=[]{}~"
    }

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1)

      pass += string.charAt(char);
    }
    setPassword(pass);

  }, [length, number, charAllowed, setPassword])

  const copyPassword = useCallback (() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,25)
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => {
    passGenerator();
  }, [length, number, charAllowed, passGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-400 bg-orange-500'>
        <h1 className='text-center text-white'>Password Generator</h1>
        <div className='flex items-center shadow rounded-lg overflow-hidden mb-4 my-3 '>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPassword} className='outline-none bg-blue-500 text-white px-1 py-1 shrink-0'>
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 text-white'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label htmlFor="length">Length: {length} </label>
          </div>

          <div className='flex items-center gap-x-1 text-white'>
            <input type="checkbox"
              defaultChecked={number}
              onChange={() => {
                setnumber((prev) => !prev);
              }}
            />
            <label htmlFor="numbers">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1 text-white'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numbers">Charachters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
