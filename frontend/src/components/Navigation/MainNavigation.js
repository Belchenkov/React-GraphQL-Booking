import React from 'react';
import { NavLink } from 'react-router-dom';

import './MainNavigation.css';

const mainNavigation = props => {
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
                    <li>
                        <NavLink to="/auth">
                            <img src="https://img.icons8.com/color/20/000000/key.png" alt="Authenticate" />
                             Authenticate
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/events">
                            <img src="https://img.icons8.com/color/20/000000/realtime-protection.png" alt="Events" />
                            Events
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/bookings">
                            <img src="https://img.icons8.com/color/20/000000/books.png" alt="Bookings" />
                            Bookings
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default mainNavigation;