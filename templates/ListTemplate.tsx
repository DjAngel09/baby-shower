'use client'
import { AddGuest } from '@/components/AddGuest';
import { ListGuests } from '@/components/ListGuests';
import React, { ChangeEvent, FormEvent, useState } from 'react'

export const ListTemplate = () => {

    const [Password, setPassword] = useState('');

    const pass = 'Holamundo09';
    const login = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(Password);

    }

    const changePass = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { value } = event.target;
        setPassword(value);
    };

    return (
        <>
            {
                Password === pass
                    ?
                    <>
                        <AddGuest />
                        <ListGuests />
                    </>
                    :
                    <div className="container">
                        <form className="row g-3" onSubmit={(e) => login(e)} >
                            <div className="col-auto">
                                <label className="visually-hidden">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                    placeholder="Password"
                                    name='password'
                                    value={Password || ""}
                                    onChange={changePass}
                                />
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-3">Entrar</button>
                            </div>
                        </form>
                    </div>
            }
        </>
    )
}
