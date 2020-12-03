import React, { Fragment, useState, useEffect } from 'react';
import { Portal, ModalContainer, Form } from 'components';
import styles from './Modal.module.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const Modal = ({modalOpen, closeModal, image_src, image_id}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    refreshPosts()
  }, []);

  const refreshPosts = async (newPostData) => {
    await axios(`https://tzfrontend.herokuapp.com/comments/${image_id}/`)
      .then((response) => setPosts(response.data))
      .catch((e) => console.error(e)) // TODO: handle HTTP error
  }

  return(
    <Fragment>
      { modalOpen &&
        <Portal>
          <div className={styles.modalOverlay}>
            <ModalContainer closeModal={closeModal}>
              <div className={styles.modalWindow}>
                <div className={styles.modalHeader}>
                  <img src={image_src} />
                  <FontAwesomeIcon onClick={closeModal} icon={faTimes} className={styles.icon_times} size='lg' aria-hidden="true" />
                </div>
                <div className={styles.modalPosts}>
                  {posts.length && posts.map(post => (
                    <div key={post.id}>
                      <span>{post.name}</span><br />
                      <span>{post.description}</span>
                    </div>
                  ))}
                </div>
                <Form image_id={image_id} refreshPosts={refreshPosts}/>
              </div>
            </ModalContainer>
          </div>
        </Portal>
      }
    </Fragment>
  )
}
