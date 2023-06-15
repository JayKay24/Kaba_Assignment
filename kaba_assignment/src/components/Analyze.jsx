import axios from 'axios';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Analyze = ({ setAnalysis }) => {
  const [csvFile, setCSVFile] = useState(null);

  const submitHandler = async () => {
    const formData = new FormData();
    formData.append('csvFile', csvFile);

    const response = await axios.post('http://localhost:5000/analyze', csvFile);
    const data = await response.text();
    setAnalysis(data);
  };

  return (<form onSubmit={submitHandler}>
    <label htmlFor='analyze'>
      <input type='file' className='analyze' onChange={(e) => setCSVFile(e.target.files[0])}  />
    </label>

    <button>Submit</button>
  </form>);
};

Analyze.propTypes = {
  setAnalysis: PropTypes.func
}

export { Analyze };