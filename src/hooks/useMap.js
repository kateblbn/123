import React, { useContext } from 'react'
import { MyApiContext } from '../api/ApiContext'
import BrandCard from '../layouts/BrandCard'
import ColorsBlock from '../layouts/ColorsBlock'

function useMap() {
  const { data } = useContext(MyApiContext)

  const getData = data.map((el, i) => {
    const colors = el.product_colors;
    const getColors = colors.map(e => {
      return <ColorsBlock nameColor={e.colour_name} hexV={e.hex_value} />
    })

    return <BrandCard key={i} name={el.name} img={el.image_link}
      price={el.price} description={el.description}
      brand={el.brand} rating={el.rating}
      type={el.product_type} prodLink={el.product_link}
      webLink={el.website_link} getColors={getColors} />
  })

  return [getData]
}

export default useMap