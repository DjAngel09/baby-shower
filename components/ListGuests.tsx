import { database } from '@/firebase';
import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

export const ListGuests = () => {

    const dbInstance = collection(database, 'guests');

    const [guests, setGuest] = useState<Array<any>>([]);
    const [totla, settotla] = useState(0)

    const getGuest = () => {
        onSnapshot(dbInstance, (data) => {
            let predata: Array<any> = [];
            let pretotal = 0
            data.docs.map((item) => {
                predata.push({ ...item.data(), id: item.id });
                pretotal = pretotal + item.data().adults;
                pretotal = pretotal + item.data().childrens;
            });
            console.log(predata);
            setGuest(predata);
            settotla(pretotal);
        })
    }

    const deleteGuest = async (id: any) => {
        await deleteDoc(doc(database, 'guests', id));
    }

    useEffect(() => {
        getGuest()
        console.log(guests);
    }, []);

    return (
        <div className='container table-responsive' >
            <br />
            <table className="table table-bordered border-primary align-middle">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Adultos</th>
                        <th scope="col">Niños</th>
                        <th scope='col'>Ver</th>
                        <th scope='col' >Compartir</th>
                        <th scope='col' >Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        guests.map((guest, index) => (
                            <tr key={guest.id} >
                                <th scope="row">{index + 1}</th>
                                <td>{guest.name}</td>
                                <td>{guest.adults}</td>
                                <td>{guest.childrens}</td>
                                <td><a href={`/${guest.id}`} className='btn btn-outline-info' >Ver</a></td>
                                <td>
                                    <a target='_blank' className='btn btn-outline-primary' href={`https://api.whatsapp.com/send/?text=https://invitaciones-web-blush.vercel.app/${guest.id}`} >Compartir</a>
                                </td>
                                <td>
                                    <button className='btn btn-outline-danger' type='button' onClick={() => deleteGuest(guest.id)} >Borrar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div>
                <h5>Total de invitados: {totla}</h5>
            </div>

        </div>
    )
}
