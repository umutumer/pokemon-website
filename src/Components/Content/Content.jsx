import React from 'react'
import Card from '../Card/Card'
import Filter from '../Filter/Filter'

const Content = ({data}) => {
  return (
    <div className='flex flex-col w-screen justify-center items-center '>
      <Filter />
      <div className=' w-[80%] flex flex-wrap'>
      <Card  data={data}/>
      </div>
    </div>
  )
}

export default Content
