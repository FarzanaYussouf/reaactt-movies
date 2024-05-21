import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='container-fluid mt-5 bg-secondary-subtle'>
        <div className='row text-center '>
<div className='col-lg-4 col-md-6 col-sm-12 col-12'>
<img className='home2-img mb-5' src="/images/logo2.jfif" alt="" />

</div>
<div className='col-lg-4 col-md-6 col-sm-12 col-12 mt-5'>
    <i className='	fa fa-facebook-f me-4'style={{fontSize:"30px"}}></i>
   <i className='	fa fa-linkedin me-4'style={{fontSize:"30px"}}></i>
   <i className='	fa fa-facebook-f me-4'style={{fontSize:"30px"}}></i>
   <i className='		fa fa-youtube-square me-4'style={{fontSize:"30px"}}></i>
   <i className='	fa fa-facebook-f'style={{fontSize:"30px"}}></i>



</div>
<div className='col-lg-4 col-md-6 col-sm-12 col-12'>
    < h2 className='fw-bold'>TOP MOVIES</h2>
    <p className='fw-bold fs-5 mt-2'>Movie 1</p>
   <p className='fw-bold fs-5'> Movie 2</p>
   <p className='fw-bold fs-5'> Movie 3</p>
   <p className='fw-bold fs-5'> Movie 4</p>
   <p className='fw-bold fs-5'> Movie 5</p>
   

</div>
        </div>
    
    </div>
  )
}

export default Footer
