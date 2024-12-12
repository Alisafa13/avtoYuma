import React from 'react';
import "./MainPage.css";
import { Link } from 'react-router-dom';
function MainPage() {
  return (
    <div className='all'>
        <div className='header'>
        <h1>Məhəllə AvtoYuma</h1>
        <div className='xidmetler'>
            <Link to={'/xidmetler'}><p>Xidmətlər</p></Link>
            <Link to={'/qiymetler'}><p>Qiymətlər</p></Link>
            <Link to={'/haqqimizda'}><p>Haqqimizda</p></Link>
        </div>
        <h1>Xoş Gəlmisiniz!</h1>
        </div>
    </div>
  )
}

export default MainPage