import { useState } from 'react';
import PropTypes from 'prop-types';

const Analyze = ({ setAnalysis }) => {
  const [csvFile, setCSVFile] = useState(null);

  const submitHandler = async () => {
    const response = await fetch('http://localhost:5000/analyze');
    const data = await response.text();
    setAnalysis(data);
  };

  return (<form onSubmit={submitHandler}>
    <label htmlFor='analyze'>
      <input type='file' className='analyze' onChange={(e) => setCSVFile(e.target.value)}  />
    </label>
  </form>);
};

Analyze.propTypes = {
  setAnalysis: PropTypes.func
}

export { Analyze };