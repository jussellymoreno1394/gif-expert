import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h3>{category}</h3>
          <div className='card-grid'>
            {gifs.map((gif) => (
              <GifItem key={gif.id} {...gif} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
