import GifGridItem from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

function GifGrid({ category }) {

    const { data:images, loading } = useFetchGifs(category)

  return (
    <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>
        <div className='card-grid'>    
        {loading && <p className='animated__animated animate__flash'>Loading...</p>}
            {
                images.map((img) => (
                    <GifGridItem 
                        key={img.id}
                        // img={img}
                        {...img}
                    />
                ))
            }
        </div>
    </>
  )
}

export default GifGrid
