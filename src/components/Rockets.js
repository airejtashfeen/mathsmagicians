// Rockets.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from './rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error loading data: {error}</div>;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <img
            src={rocket.flickr_images[0]} // Assuming that flickr_images is an array in the API response
            alt={rocket.name}
            style={{ marginTop: '100px', height: '200px', width: 'auto' }}
          />
          <h2 className="my-3">{rocket.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
