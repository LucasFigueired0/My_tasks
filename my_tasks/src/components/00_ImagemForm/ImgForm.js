import React from 'react'
import image from "../../img/image2.svg"
import "./ImgForm.css"
const ImgForm = () => {
  return (
    <div className='imagemDiv'>
        <img src={image} alt="imagem principal" className='imgForm' />
    </div>
  )
}

export default ImgForm