import React, { useContext } from 'react'
import useMap from '../hooks/useMap'
import { MyApiContext } from './ApiContext'

function Api() {
  const { data } = useContext(MyApiContext)
  const [getData] = useMap(data)

  return (
    <>
      {getData}
    </>
  )
}

export default Api