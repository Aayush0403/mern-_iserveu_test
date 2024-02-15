import axios from 'axios'
import { useEffect, useState } from 'react'
import Userdetail from './Components/Userdetail'


function App() {
useEffect( () => {

      const callfun=async()=>{
        const gotdata=await axios.get('http://localhost:5000/api/v1/get-info')
        console.log(gotdata)
        setUserdata(gotdata)
      }
      callfun()

  },[])
  const [ Userdata , setUserdata] = useState([])
  return (
    <>
    <div>
      <p>hemlo doston!! here is the list of the users</p>
      {Userdata?.data?.map((item,idx) =>(
          <Userdetail name={item.name} dept={item.dept} id={idx} />
      ))}
    </div>
    </>
  );
}

export default App;
