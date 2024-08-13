import "./drawing.css"
import {useState} from "react" 
import DateFilter from "./dataFilter"
import React from 'react';


const DrawingReport=()=> {
    const PDF_FILE_URL="http://localhost:3000/file_pdf.pdf"

    const downloadFileAtURL=(url)=>{
        const filename=url.split("/").pop();
        const aTag=document.createElement("a")
        aTag.href=url
        aTag.setAttribute("download",filename);
        document.body.appendChild(aTag);
        aTag.click()
        aTag.remove()

    }
    
    const[report,setReport]=useState("")
    const [value,setValue]=useState("")
    const [selectedOption, setSelectedOption] = useState('');

    const options=[
        {label:"pdformat",value:1},
        {label:"excelformat",value:2},
        {label:"csvformat",value:3},
    ]
    const options1=[
        {label:"pdformat",value:1},
        {label:"excelformat",value:2},
        {label:"csvformat",value:3},
    ]

    const selectHandleReport=(e)=>{
        setReport(e.target.value)
    }

    const selectHandle=(e)=>{
        setValue(e.target.value)
    }
    
    const handleRadioChange=(e)=>{
        setSelectedOption(e.target.value)
    }

    return(
        <div className="background-conatiner-1">
            <div className="background-conatiner-2">
                
             <h1 className="heading">Drawing Report Analysis</h1>
             <div className="report-container">
                <h1 className="report-head">Report Type:</h1>
                <select className="select-form" onChange={selectHandleReport} >
                  {options.map(option=>(
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select> 
                <h1 className="report-head" >Design Consultant:</h1>
                <select className="select-form" onChange={selectHandle} >
                {options1.map(option=>(
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select> 
             </div>
             <h1 className="time-head">Select Time Period</h1>
             <DateFilter/>
             <h1 className="time-head">Select appropriate options to view/Download the Report</h1>
             <div className="Select-Time-Period">
             <div>
      <label>
        <input
          type="radio"
          value="download"
          checked={selectedOption === 'download'}
          onChange={handleRadioChange}
          className="radio-btn"
        />
        Download
      </label>
      </div>
      <div>
      <label>
        <input
          type="radio"
          value="view"
          checked={selectedOption === 'view'}
          onChange={handleRadioChange}
           className="radio-btn-1"
        />
        View
      </label>
      </div>
      </div>
      <div className="Select-Time-Period-3">
        <h1 className="head-one">Download in PD formart</h1>
        <h1 className="head-one">Download in MS Excel format</h1>
        <h1 className="head-one">Download in CSV format</h1>
      </div>
       
       <div className="Select-Time-Period-2">
        <button className="button" onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}>Go</button>
        <button className="button-2">Reset</button>

       </div>
      

            </div>

        </div>

    )

}

export default DrawingReport