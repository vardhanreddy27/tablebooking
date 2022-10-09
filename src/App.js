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
      <div className='col-6'> </div>
       </div>
    </>
  )
}

export default App