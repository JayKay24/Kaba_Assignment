import { useState } from 'react';

const Analyze = () => {
  const [csvFile, setCSVFile] = useState(null);

  return (<div>
    <label htmlFor='analyze'>
      <input type='file' className='analyze' onChange={(e) => setCSVFile(e.target.value)}  />
    </label>
  </div>);
};

export { Analyze };