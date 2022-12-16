import React from 'react'
import { CardItem } from './CardItem'

export const CardList = () => {
    let tab=[

{name:'Tv',image:"",price:800},
{name:'Pc',image:"",price:1200},
{name:'PlayStation',image:"",price:'test'}

    ]

  return (
    <div>
{
    tab.map( ele => {

        return <CardItem element = {ele}/>
    })
}
       
    </div>
  )
}

