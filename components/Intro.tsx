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
      <img style={{ width: '100%' }} src="https://firebasestorage.googleapis.com/v0/b/babyshower-7ef8b.appspot.com/o/vecteezy_baby-shower_1201306.png?alt=media&token=e0dec3fe-aaa6-494b-b85b-3464a36b75c6" alt="" />
      <img className='m-auto' style={{ width: '100%' }} src="https://firebasestorage.googleapis.com/v0/b/babyshower-7ef8b.appspot.com/o/lindo-bebe-elefante-globos_159446-324-removebg-preview.png?alt=media&token=78201db3-2373-4f0a-878f-b8737c384d3a" alt="" />
      <h2
        className='text-center'
        style={
          {
            fontSize: '36px'
          }
        }
      >
        {`Hola ${guest.name}, acompáñanos a celebrar la llegada de nuestra bebé`}
      </h2>
      <p className='name' >Regina</p>
      <br />
      <h2 style={{ fontSize: '24px' }} >
        Septiembre 30 -
        <img style={{ width: '40px' }} src="https://firebasestorage.googleapis.com/v0/b/babyshower-7ef8b.appspot.com/o/0d0fc-elefante-bebe-para-baby-shower.png?alt=media&token=477b9a7b-5519-49bf-8c9f-cb2091d4176b" alt="" />
        - 1:00pm
      </h2>

      <h3 style={{ fontSize: '24px' }} >Buenaventura García Manzana 035, Ixtlahuaca</h3>
      <a target='_blank' href="https://goo.gl/maps/5nTb4nQXuCmERfZX8">Ver Mapa</a>
      <br /><br />
      <p className='normal-text' >{`invitacion para: ${guest.adults} Adulto(s) ${guest.childrens > 0 ? 'y ' + guest.childrens + ' niño(s)' : ''}`}</p>

      <p >Mesa de Regalos (Opcional): <a href="https://www.amazon.com.mx/baby-reg/belen-hernandez-noviembre-2023-atlacomulco/319BB835WNAO0?ref_=cm_sw_r_cp_ud_dp_BHHRQPWECVJQZQTZRX9B">Ver Mesa</a></p>
    </div>
  )
}
