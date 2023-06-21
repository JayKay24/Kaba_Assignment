import { useState } from 'react';
import { Integration } from './components/integration'
import { Analyze } from './components/Analyze';

function App() {
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div>
        { loading && <div>Loading...</div> }
        { analysis && <div>{analysis}</div> }
        <Integration />
        <Analyze setAnalysis={setAnalysis} setLoading={setLoading} />
      </div>
    </>
  )
}

export default App
