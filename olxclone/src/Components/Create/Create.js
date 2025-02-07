import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, authContext } from '../../store/FirebaseContext'
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [condition, setCondition] = useState('')
  const [image, setImage] = useState(null)
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(authContext)

  const history = useHistory()

  const handleSubmit = () => {
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref}) => {
      ref.getDownloadURL().then((url) => {
          firebase.firestore().collection('products').add({
            name,
            category,
            price,
            condition,
            url,
            userId: user.uid,
            createdAt:new Date().toDateString()
          })
          history.push('/')
      })
    })
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <br />
            <input
              className="input"
              type="text"
              placeholder='Name'
              id="fname"
              name="Name"
              defaultValue="John"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
            <br />
            <br />
            <input
              className="input"
              type="text"
              placeholder='Category'
              id="fname"
              name="category"
              defaultValue="John"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
              }}
            />
            <br />
            <br />
            <input 
            className="input" 
            type="text" 
            id="fname" 
            placeholder='Price'
            name="Price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value)
            }}
            />
            <br />
          <br />
          <input
              className="input"
              type="text"
              placeholder='Condition'
              id="condition"
              name="condition"
              defaultValue="New"
              value={condition}
              onChange={(e) => {
                setCondition(e.target.value)
              }}
            />
          <br />
          <br />
          {image && <img src={image ? URL.createObjectURL(image) : ''} alt='Product Image' width="170px" height="120px"></img> }
            <br />
            <input type="file"
              onChange={(e) => {
                setImage(e.target.files[0])
              }}
            />
            <br />
            <button 
            className="uploadBtn"
            onClick={handleSubmit}
            >Upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;