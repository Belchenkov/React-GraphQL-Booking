import React from 'react';
import { NavLink } from 'react-router-dom';

import AuthContext from '../../context/auth-context';
import './MainNavigation.css';

const mainNavigation = props => {
    return (
        <AuthContext.Consumer>
            {(context) => {
                return (
                    <header className="main-navigation">
                        <div className="main-navigation__logo">
                            <img src="https://img.icons8.com/color/48/000000/event-accepted.png" />

                            <h1>
                                EasyEvent
                            </h1>
                        </div>
                        <nav className="main-navigation-items">
                            <ul>
                                { !context.token &&
                                <li>
                                    <NavLink to="/auth">
                                        <img src="https://img.icons8.com/color/20/000000/key.png" alt="Authenticate" />
                                        Authenticate
                                    </NavLink>
                                </li> }


                                <li>
                                    <NavLink to="/events">
                                        <img src="https://img.icons8.com/color/20/000000/realtime-protection.png" alt="Events" />
                                        Events
                                    </NavLink>
                                </li>
                                { context.token &&
                                    <li>
                                        <NavLink to="/bookings">
                                            <img src="https://img.icons8.com/color/20/000000/books.png" alt="Bookings" />
                                            Bookings
                                        </NavLink>
                                    </li>
                                }
                            </ul>
                        </nav>
                    </header>
                );
            }}
        </AuthContext.Consumer>
    );
};

export default mainNavigation;