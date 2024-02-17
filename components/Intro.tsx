'use client'

import React, { useEffect, useState } from 'react';
import styles from '../app/page.module.css';
import { collection, onSnapshot, doc, deleteDoc, getDoc } from 'firebase/firestore';
import { database } from '@/firebase';
import { usePathname, useSearchParams, useParams } from 'next/navigation'


export const Intro = () => {

  const { id } = useParams()

  const docRef = doc(database, "guests", id as string);
  const [guest, setguest] = useState<any>({});

  useEffect(() => {
    const getGuest = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setguest(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    getGuest();
  }, [])


  return (
    <div className='text-center m-auto' style={{ maxWidth: '600px' }} >
      <img style={{ width: '100%' }} src="https://firebasestorage.googleapis.com/v0/b/babyshower-7ef8b.appspot.com/o/3e8cdc2fd0c14af97ca24499d5dce5f7.png?alt=media&token=18058541-77cb-4b7a-86e3-f69d1782e0a9" alt="" />
      <img className='m-auto' style={{ width: '100%' }} src="https://firebasestorage.googleapis.com/v0/b/babyshower-7ef8b.appspot.com/o/PngItem_102946.png?alt=media&token=65a14c8c-a7f4-4ad5-ae33-489f968bc912" alt="" />
      <h2
        className='text-center'
        style={
          {
            fontSize: '36px'
          }
        }
      >
        {`Hola ${guest.name}, acompáñanos a celebrar mi bautizo.`}
      </h2>
      <p className='name' >Scarlett</p>
      <br />
      <h2 style={{ fontSize: '24px' }} >
        Marzo 23 -
        <img style={{ width: '40px' }} src="https://firebasestorage.googleapis.com/v0/b/babyshower-7ef8b.appspot.com/o/0d0fc-elefante-bebe-para-baby-shower.png?alt=media&token=477b9a7b-5519-49bf-8c9f-cb2091d4176b" alt="" />
        - 3:00pm
      </h2>

      <h3 style={{ fontSize: '24px' }} >Río Seco 9, Col Río Lerma Tic Ti, 50456 Col. Río Lerma, Atlacomulco</h3>
      <a target='_blank' href="https://maps.app.goo.gl/79s62ZwhYMxCW6Nr6">Ver Mapa</a>
      <br /><br />
      <p className='normal-text' >{`invitacion para: ${guest.adults} Adulto(s) ${guest.childrens > 0 ? 'y ' + guest.childrens + ' niño(s)' : ''}`}</p>

    </div>
  )
}
