import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

export default function Dish({ dish }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState('big');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='shadow-1g p-3 mb-5 bg-white rounded'>
      <div onClick={handleShow}>
        <h1>{dish.name}</h1>
        <img src={dish.image} className="img-fluid" style={{ height: '200px', width: '200px' }} />
      </div>

      <div className="flex-container">
        <div className='w-100 m-1'>
          <p>Variants</p>
          <select
            className='form-control'
            value={varient}
            onChange={(e) => { setVarient(e.target.value) }}
          >
            {dish.varients.map((varient, index) => (
              <option key={index} value={varient}>{varient}</option>
            ))}
          </select>
        </div>

        <div className='w-100 m-1'>
          <p>Menge</p>
          <select
            className='form-control'
            value={quantity}
            onChange={(e) => { setQuantity(e.target.value) }}
          >
            {[...Array(10).keys()].map((x, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className='m-1 w-100'>
          <h1 className='mt-1'>Preis: {dish.prices[0][varient] * quantity}€</h1>
        </div>
        <div className='m-1 w-100'>
          <button className="btn btn-primary">IN DEN WARENKORB LEGEN</button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>Schließen</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
