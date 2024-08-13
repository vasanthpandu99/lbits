import React, { useState } from 'react';
import "./drawing.css"
const DateFilter = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };


  return (
    <div>
        <div className='Select-Time-Period'>
      <div>
      <label>
        <input
          type="radio"
          value="byDate"
          checked={selectedOption === 'byDate'}
          onChange={handleRadioChange}
          className='radio-btn'
        />
        By Date
      </label>
      </div>
      <div>
      <label>
        <input
          type="radio"
          value="byMonth"
          checked={selectedOption === 'byMonth'}
          onChange={handleRadioChange}
          className='radio-btn-1'
        />
        By Month
      </label>
      </div>
      <div>
      
      <label>
        <input
          type="radio"
          value="last6Months"
          checked={selectedOption === 'last6Months'}
          onChange={handleRadioChange}
          className='radio-btn-1'
        />
        Last 6 Months
      </label>
     </div>
     <div>
      <label>
        <input
          type="radio"
          value="fromBeginning"
          checked={selectedOption === 'fromBeginning'}
          onChange={handleRadioChange}
          className='radio-btn-1'
        />
        From Beginning to Till Date
      </label>
      </div>
      
      </div>

      {selectedOption === 'byDate' && (
        <div className='Select-Time-Period'>
          <label className='radio-btn'>
            From: 
            <input type="date" />
          </label>
          <br />
          <label className='radio-btn'>
            To: 
            <input type="date"/>
          </label>
        </div>
      )}
        {selectedOption === 'byMonth' && (
            <div className='Select-Time-Period-1'>
              <label className='radio-btn-2'>
                Month: 
                <input type="date" />
              </label>
              <br />
              <label className='radio-btn-2'>
                Year:
                <input type="date"/>
              </label>
            </div>
      )}
    </div>
  );
};

export default DateFilter;



