import React, { useEffect, useState } from 'react'
import ContentLoader from 'react-content-loader'

const GoodSceleton:React.FC = () => {
  const [width, setWidth] = useState<number>(280)
  const [height, setHeight] = useState<number>(190)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setWidth(210)
        setHeight(170)
      } else {
        setWidth(280)
        setHeight(190)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize() 
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <ContentLoader
      speed={2}
      width={width}
      height={height}
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect className='skeleton_title' x='1' y='10' rx='0' ry='0' />
      <rect className='skeleton__main' x='0' y='55' rx='19' ry='19' />
      <rect className='skeleton_price' x='0' y='150' rx='15' ry='15' />
      <rect className='skeleton_add' x='140' y='150' rx='30' ry='30' />
    </ContentLoader>
  )
}

export default GoodSceleton
