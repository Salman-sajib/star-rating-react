import { FaStar } from 'react-icons/fa';
import { nanoid } from 'nanoid';
import { useState } from 'react';

function App() {
  const numberOfStars = 5;

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClidk(index) {
    setRating(index);
  }

  function handleMouseEnter(index) {
    setHover(index);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className='app'>
      <h1 className='title'>Rate This</h1>
      <h2 className='star-rating'>
        {Array.from({ length: numberOfStars }).map(
          (_, index) => (
            (index += 1),
            (
              <FaStar
                key={nanoid()}
                style={{
                  cursor: 'pointer',
                }}
                className={index <= (hover || rating) ? 'active' : 'inactive'}
                onClick={() => handleClidk(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
                size={30}
              />
            )
          )
        )}
      </h2>
    </div>
  );
}

export default App;
