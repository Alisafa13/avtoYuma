import React from 'react'
import "./Qiymetler.css"

function Qiymetler() {
  return (
    <div className='all'>
        <h1 className='qiymetler-h1'>Qiymətlər</h1>
        <div>
            <div className='element1'>
                <h3>Xarici Yuma</h3>
                <h3>8 Manat</h3>
            </div>
            <div className='element1'>
                <h3>Daxili Yuma</h3>
                <h3>12 Manat</h3>
            </div>
            <div className='element1'>
                <h3>Tam Avto Yuma</h3>
                <h3>16 Manat</h3>
            </div>
        </div>
    </div>
  )
}

export default Qiymetler