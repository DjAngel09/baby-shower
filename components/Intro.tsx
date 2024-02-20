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
      <div style={{ backgroundColor: '#fff', borderRadius: '320px 320px 0 0', paddingTop: '74px', paddingBottom: '24px' }} >
        <p style={{ color: '#99C2CB', fontSize: '20px' }} >¡Te invitamos a mi bautizo!</p>
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
          <p className='pop' style={{ margin: '0 12px', fontSize: '52px', color:'#FFB14B', fontWeight: 'bold' }} >BAUTIZ</p>
          <img src="https://firebasestorage.googleapis.com/v0/b/babyshower-7ef8b.appspot.com/o/Captura%20de%20pantalla%202024-02-20%20164457.png?alt=media&token=4515be63-e7a1-43cf-966f-1e138b5d8901" alt="" />
        </div>
        <p className='pop' style={{margin: '0 12px', fontSize: '52px', color:'#FDA025', fontWeight: 'bold'}} >SKARLET</p>

        <div style={{display: 'flex'}} >
          <div style={{ border: '2px solid #99c2cb', margin: '14px', width: '50%'  }} ></div>
          <div style={{ border: '2px solid #99c2cb', margin: '14px', width: '50%' }} ></div>
        </div>


        <h2 style={{ fontSize: '24px' }} >
          Marzo 23 -
          <img src="https://firebasestorage.googleapis.com/v0/b/babyshower-7ef8b.appspot.com/o/Captura%20de%20pantalla%202024-02-20%20164457.png?alt=media&token=4515be63-e7a1-43cf-966f-1e138b5d8901" alt="" />
          - 14:00hrs
        </h2>

        <div style={{display: 'flex'}} >
          <div style={{ border: '2px solid #99c2cb', margin: '14px', width: '50%'  }} ></div>
          <div style={{ border: '2px solid #99c2cb', margin: '14px', width: '50%' }} ></div>
        </div>

        <p>Iglesia de San cayetano</p>
        <p>recepción en:</p>
        <p>Rio seco #9 col rio Lerma tic- ti 50456 colonia rio Lerma Atlacomulco “Salón el tejaban”</p>
        <a target='_blank' href="https://maps.app.goo.gl/79s62ZwhYMxCW6Nr6">Ver Mapa</a>

        <hr />

        <p>Mis Padrinos:</p>
        <p>Valeria Garduño Cárdenas</p>
        <p>Carlos Alberto Hernández Aceituno
</p>

        <p className='normal-text' >{`invitacion para: ${guest.adults} Adulto(s) ${guest.childrens > 0 ? 'y ' + guest.childrens + ' niño(s)' : ''}`}</p>
      </div>
    </div>
  )
}