import React from 'react';
import styles from '../app/page.module.css';

export const Intro = () => {
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
        Hola Jose Angel, acompáñanos a celebrar la llegada de nuestra bebé
      </h2>
      <p className='name' >Regina</p>
      <br />
      <h2 style={{ fontSize: '24px' }} >
        Septiembre 23 -
        <img style={{ width: '40px' }} src="https://firebasestorage.googleapis.com/v0/b/babyshower-7ef8b.appspot.com/o/0d0fc-elefante-bebe-para-baby-shower.png?alt=media&token=477b9a7b-5519-49bf-8c9f-cb2091d4176b" alt="" />
        - 5:00pm
      </h2>

      <h3 style={{ fontSize: '24px' }} >Direccion: Sierra nevada 244 col. Bongoni, Atlacomuclo</h3>
      <a target='_blank' href="https://www.google.com/maps/place/Sierra+Nevada+244,+Bongoni,+50453+Atlacomulco,+M%C3%A9x./@19.7725425,-99.8699636,13.5z/data=!4m6!3m5!1s0x85d258fa3aeda8d7:0xd76b4a29c4efd3d3!8m2!3d19.8119748!4d-99.8663052!16s%2Fg%2F11c29wjzjd?entry=ttu">Ver Mapa</a>
      <br /><br />
      <p className='normal-text' >invitacion para: 2 Adultos y 2 niños</p>

      <p >Mesa de Regalos (Opcional): <a href="https://www.amazon.com.mx/baby-reg/2ZL2PYATUH2VU?ref=br_search_v2_desktop_res_2">Ver Mesa</a></p>
    </div>
  )
}
