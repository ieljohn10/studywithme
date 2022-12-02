import { useState } from 'react';
import CallbackFunction from './topics/callback/callback.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CallbackFunction />
    </div>
  )
}

export default App
