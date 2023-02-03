import { useEffect, useState } from 'react'
import './app.scss'
import Code from './components/code';

function App() {
  const [count, setCount] = useState(0);
  const [code, setCode] = useState(0);

  useEffect(() => {
    setCode(count);
  }, [count])

  return (
    <div className="app">
      <h2 style={{marginBottom: 'auto'}}>
        Playground: Vite+React
      </h2>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count + 1
        </button>
        <Code lang="js" code={code} debug/>
      </div>

      <small style={{marginTop: 'auto'}}>
        <a href="https://derianandre.com">DerianAndre</a>
      </small>
    </div>
  )
}

export default App
