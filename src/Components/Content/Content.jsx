import React from 'react'
import Card from '../Card/Card'
import Filter from '../Filter/Filter'

const Content = ({data}) => {
  return (
    <div className='w-screen flex flex-col  justify-center items-center '>
      <Filter />
      <div className=' w-[70%] flex flex-wrap'>
      <Card  data={data}/>
      </div>
    </div>
  )
}

export default Content
