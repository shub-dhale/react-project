import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch("https://github.com/shubham-dhale")
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setdata(data);
        })
    },[])
  return (
    <div className='text-center m-4 bg-orange-400 text-white p-4 text-3xl'>Github followers:{data.followers}</div>
  )
}

export default Github