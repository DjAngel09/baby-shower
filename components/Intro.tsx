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
    <div className='text-center m-auto' style={{ maxWidth: '600px', padding: '54px 24px' }} >
      <div style={{ backgroundColor: '#fff', borderRadius: '320px 320px 0 0', paddingTop: '74px', paddingBottom: '24px', paddingLeft: '24px', paddingRight: '24px' }} >
        <p style={{ color: '#99C2CB', fontSize: '20px' }} >¡Te invitamos a mi cumpleños!</p>
        <p
          className='text-center'
          style={
            {
              fontSize: '20px'
            }
          }
        >
          {`Hola ${guest.name}, acompáñanos a celebrar`}
        </p>
        <h2 className='mi' style={{ textAlign: 'center', fontSize: '36px' }} >Mi</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <p className='pop' style={{ margin: '0 12px', fontSize: '44px', color:'#FFB14B', fontWeight: 'bold' }} >CUMPLEAÑOS</p>
        </div>
        <img style={{maxWidth: '54px'}} src="https://firebasestorage.googleapis.com/v0/b/babyshower-7ef8b.appspot.com/o/pngtree-cute-unicorn-rainbow-fantasy-png-image_11928024.png?alt=media&token=7e62b31d-1c65-49ac-828a-76400eed224f" alt="" />
        <p className='pop' style={{margin: '0 12px', fontSize: '52px', color:'#FDA025', fontWeight: 'bold'}} >SOPHIA</p>

        <div style={{display: 'flex'}} >
          <div style={{ border: '2px solid #99c2cb', margin: '14px', width: '50%'  }} ></div>
          <div style={{ border: '2px solid #99c2cb', margin: '14px', width: '50%' }} ></div>
        </div>


        <h2 style={{ fontSize: '24px' }} >
          Noviembre 2 -
          <img style={{maxWidth: '54px'}} src="https://firebasestorage.googleapis.com/v0/b/babyshower-7ef8b.appspot.com/o/pngtree-cute-unicorn-rainbow-fantasy-png-image_11928024.png?alt=media&token=7e62b31d-1c65-49ac-828a-76400eed224f" alt="" />
          - 15:00hrs
        </h2>

        <div style={{display: 'flex'}} >
          <div style={{ border: '2px solid #99c2cb', margin: '14px', width: '50%'  }} ></div>
          <div style={{ border: '2px solid #99c2cb', margin: '14px', width: '50%' }} ></div>
        </div>

        <p>recepción en:</p>
        <p>Salón de Eventos Jardín Español</p>
        <p>Av san juan, san luis boro, 50475 Atlacomulco de Fabela, Méx.</p>
        <a target='_blank' href="https://maps.app.goo.gl/Y7QPJLZ93b2qax8E8">Ver Mapa</a>

        <hr />

        <p className='normal-text' >{`invitacion para: ${guest.adults} Adulto(s) ${guest.childrens > 0 ? 'y ' + guest.childrens + ' niño(s)' : ''}`}</p>
      </div>
    </div>
  )
}