import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Form.module.css';

export const Form = ({image_id, refreshPosts}) => {
  let textInputName = React.createRef();
  let textInputPost = React.createRef();

  const ADD_COMENT_URL = `https://tzfrontend.herokuapp.com/comments/add/`

  const createPost = () => {
    // TODO: Possibly add fields presence validation, although backend doesn't have it
    axios.post(
      ADD_COMENT_URL,
      {
        "name": textInputName.current.value,
        "description": textInputPost.current.value,
        "image_id": image_id
      }
    ).then((response) => {
      if (response.status == 200) {
        refreshPosts();
        textInputName.current.value = '';
        textInputPost.current.value = '';
      } else {
        console.error('Can not add post', response)
      }
    }).catch((e) => console.error(e)) // TODO: handle HTTP error
  }

  return(
    <div className={styles.block}>
      <input className={styles.block__input} ref={textInputName} type="text" placeholder='Your name' /><br />
      <input className={styles.block__input} ref={textInputPost} type="text" placeholder='Your post'/><br />
      <button className={styles.block__button} onClick={createPost}>Send Post</button>
    </div>
  )
}
