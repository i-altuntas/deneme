import React from 'react'
import "./app.css"

function menüler() {
  return (
    <div className='menuclass'>
        <div className='container'>
            <ul className='list'>
                <li key={1} className="ItemList"><a href='#'>Ana menü</a></li>
                <li key={2} className="ItemList"><a href='#'>Hakkımızda</a></li>
                <li key={3} className="ItemList"><a href='#'>İşlemler</a></li>
                <li key={4} className="ItemList"><a href='#'>İletişim</a></li>
            </ul>
        </div>



    </div>
  )
}

export default menüler