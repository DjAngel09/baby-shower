import { addDoc, collection } from 'firebase/firestore';
import React, { FormEvent, useState } from 'react';
import { firebase_app, database } from '../firebase';

interface guest {
  name: string;
  adults: number;
  childrens: number;
}

export const AddGuest = () => {

  const [guest, setGuest] = useState<guest>({ name: '', adults: 1, childrens: 0 });

  const change = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(guest);
    const dbInstance = collection(database, 'guests');
    addDoc(dbInstance, guest);
    setGuest({ name: '', adults: 1, childrens: 0 })
  }

  return (
    <div className='container' >
      <form action="" onSubmit={change} >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre del invitado</label>
          <input
            type="text"
            className="form-control"
            id="name" value={guest.name}
            onChange={(e) => setGuest({ ...guest, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="adult" className="form-label">Cuantos Adultos?</label>
          <input
            type="number"
            className="form-control"
            id="adult"
            value={guest.adults}
            onChange={(e) => setGuest({ ...guest, adults: parseInt(e.target.value) })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="children" className="form-label">Cuantos niños?</label>
          <input
            type="number"
            className="form-control"
            id="children"
            value={guest.childrens}
            onChange={(e) => setGuest({ ...guest, childrens: parseInt(e.target.value) })}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary" >Agregar invitado</button>
      </form>
    </div>
  )
}
