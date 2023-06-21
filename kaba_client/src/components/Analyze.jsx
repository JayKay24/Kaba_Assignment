import axios from 'axios';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Analyze = ({ setAnalysis, setLoading }) => {
  const [csvFile, setCSVFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    if(csvFile) {
      const formData = new FormData();
      formData.append('csvFile', csvFile);

      setAnalysis('');
      setLoading(true);

      const { data } = await axios.post('http://127.0.0.1:5000/analyze', formData);
      console.log(data);

      setLoading(false);
      setAnalysis(data.analysis);
    }
  };

  return (
  <form onSubmit={submitHandler}>
    <label htmlFor='analyze'>
      <input type='file' className='analyze' onChange={(e) => setCSVFile(e.target.files[0])}  />
    </label>

    <button>Submit</button>
  </form>);
};

Analyze.propTypes = {
  setAnalysis: PropTypes.func,
  setLoading: PropTypes.func
}

export { Analyze };