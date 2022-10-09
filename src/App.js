import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io';
import { BsThreeDotsVertical } from 'react-icons/bs';
function App() {
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
    </>
  )
}

export default App