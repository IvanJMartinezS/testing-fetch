import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const test = async () => {
    const res = await fetch("https://nxtfi-bucket-us-east-1.s3.amazonaws.com/blockchain/v2/test-001/_archive/__opensign__sc/d9562409b06ed33fa066d66dd65a26b239ea0b1cf459889ed451e802115920da.png")
    const buffer = await res.arrayBuffer();

    console.log("Buffer: ", buffer)
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button
            onClick={test}
              className="p-2 bg-[#4DB27F] border border-transparent flex justify-center text-center text-white rounded-md  hover:bg-[#31885C] duration-150 transition-all"
            >
            test
          </button>
    </>
  )
}

export default App
