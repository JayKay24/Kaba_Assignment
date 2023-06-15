import React, { useState, useEffect } from 'react';

const Integration = () => {
  const [apiKey, setApiKey] = useState('');
  let URL = `https://data.nasdaq.com/api/v3/datatables/ETFG/FUND.csv?ticker=SPY&api_key=${apiKey}`;

  return (<div>
    NasDaq

    <label htmlFor='integration'>
      <input type='password' value={apiKey} onChange={(e) => setApiKey(e.target.value)} className='integration' />
    </label>

    <hr />

    <a href={URL} type='csv' download>Integrate</a>
  </div>);
};

export { Integration };