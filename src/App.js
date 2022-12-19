import React from 'react'
import { Veri } from "./isimler";
import "./app.css"
import Adi from './Adi';

const App = () => {


console.log(Veri[0].adi)

  return (

    <div>
      <Adi Veri={Veri}/>
      <input />
      <tr>
            <th>Adı</th>
            <th>Soyadı</th>
            <th>Yaşı</th>
      </tr>
      
        {Veri.map(
          (e)=>
          <tr key={e.id}>
            <th>{e.adi}</th>
            <th>{e.soyadi}</th>
            <th>{e.yasi}</th>
            </tr> 

        )}
        
      
      
      </div>
  )
}

export default App


