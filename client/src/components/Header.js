import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

export default function Header() {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <header className="">
            <div className="">
                <Link to="/">
                    <h1>Honey Do List</h1>
                </Link>

                <nav className="">
                    {Auth.loggedIn() ? (
                        <>
                            <a href="/" onClick={logout}>Logout</a>
                            <a href="/mygroup">My Group</a>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}; 