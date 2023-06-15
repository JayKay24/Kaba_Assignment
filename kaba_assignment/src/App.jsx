import React, { useState } from 'react';
import { Integration } from './components/integration'
import { Analyze } from './components/Analyze';

function App() {
  const [analysis, setAnalysis] = useState(null);

  return (
    <>
      <div>
        {analysis && <div>{analysis}</div>}
        <Analyze setAnalysis={setAnalysis} />
        <Integration />
      </div>
    </>
  )
}

export default App
