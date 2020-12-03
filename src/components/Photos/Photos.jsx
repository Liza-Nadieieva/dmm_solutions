import React, { useState, useEffect } from 'react';
import { Photo } from 'components';
import axios from 'axios';
import styles from './Photos.module.css';

export const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(async () => {
    await axios(`https://tzfrontend.herokuapp.com/images/`)
      .then((response) => setPhotos(response.data))
      .catch((e) => console.error(e)) // TODO: handle HTTP error
  }, []);

  return(
    <div className={styles.container}>
      {photos.map(item => (
        <Photo {...item} key={item.image_id}/>
      ))}
    </div>
  )
}
