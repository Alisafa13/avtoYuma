import React from 'react';
import "./Xidmetler.css";

function Xidmetler() {
  return (
    <div className='all'>
        <h1 className='xidmetler-h1'>Xidmətlər</h1>
        <div className='elements'>
            <div className='element'>
                <h3>Xarici Yuma</h3>
                <p>Avtomobilin sadəcə xarici hissələrinin təmizlənməsi</p>
                <button>Rezerv</button>
            </div>
            <div className='element'>
            <h3>Daxili Yuma</h3>
                <p>Salonda olan oturacaqlar, xalçalar, döşəmə və digər yerlərin təmizlənməsi</p>
                <button>Rezerv</button>
            </div>
            <div className='element'>
            <h3>Tam Avto Yuma</h3>
                 <p>Xarici və daxili hissələrin bir yerdə tam təmizlənməsi.</p>
                <button>Rezerv</button>
            </div>
        </div>
    </div>
  )
}

export default Xidmetler