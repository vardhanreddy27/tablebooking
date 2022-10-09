import { IoMdArrowRoundBack } from 'react-icons/io';
import { BsThreeDotsVertical } from 'react-icons/bs';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [startDate, setStartDate] = useState(new Date());

  return (<>
    <div className='row mt-3'>
      <div className='col-6'> <div className="ps-1"><IoMdArrowRoundBack  size={30}/></div></div>
      <div className='col-6'><BsThreeDotsVertical size={30} style={{float: "right"}}/></div>
    </div>  
    <div className='row'>
    <div className='col-12'><h5 className="ps-2 text-secondary pt-2">Book a table</h5> </div>
    <div className='col-12'><h2 className="ps-2 ">Absolute Barbecue</h2> </div>
       </div>
       <div className='row mt-4'>
        <div className='col pt-5 text-center'><span className="circle"></span>
</div>
       </div>
       <div className='row pts banner'>
        <div className='col '>
          <h2 className='cp'>Schedule a visit</h2>
          <DatePicker className='my' selected={startDate} onChange={date => setStartDate(date)} />

        </div><div className='col-6'></div>
       </div>
    </>
  )
}

export default App