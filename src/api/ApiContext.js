import React, { createContext, useEffect, useState } from 'react'
import { LINK } from './apiUrl'
import brandCard from '../style/brandCard.module.css'

export const MyApiContext = createContext()

function ApiContext(props) {
  const [data, setData] = useState([])
  useEffect(() => {
    try {
      const context = async () => {
        await fetch(LINK, {
          method: 'GET'
        })
          .then(response => response.json())
          .then(elem => setData(elem))
      }
      context()
    } catch (err) {
      console.log('Found Errors')
    }
  }, []);
  const values = { data }
  return (
    <div className={brandCard.container}>
      <MyApiContext.Provider value={values}>{props.children}</MyApiContext.Provider>
    </div>
  )
}

export default ApiContext