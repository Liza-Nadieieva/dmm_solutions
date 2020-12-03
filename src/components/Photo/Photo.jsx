import React, { useState, useEffect } from 'react';
import styles from '../Photos/Photos.module.css';
import { Modal } from 'components';

export const Photo = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return(
    <div>
      <div className={styles.block} onClick={() => setModalOpen(true)}>
        <img src={props.src} />
      </div>
      <Modal modalOpen={modalOpen} closeModal={() => setModalOpen(false)} image_src={props.src} image_id={props.image_id}/>
    </div>
  )
}
