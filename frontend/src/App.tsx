import {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios';

export default function App() {
  const [value, setValue] = useState<string>()

    useEffect(() => {
        axios.get("/api")
            .then((response)=> {
                console.log(response);
                setValue(response.data)
            })
            .catch((error) => {
                console.log(error.status);
                console.log(error.message);
            })
    }, [])

  return (
    <>
      <h1>{value}</h1>
    </>
  )
}
