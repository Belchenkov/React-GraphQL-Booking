import React from 'react';

import './Modal.css';

const modal = props => (
    <div className="modal">
        <header className="modal__header">{props.title}</header>
        <section className="modal__content">
            <h1>{props.children}</h1>
        </section>
        <section className="modal__actions">
            {props.canCancel && <button className="btn" onClick={props.onCancel}>Cancel</button>}
            {props.canConfirm && <button className="btn" onClick={props.onConfirm}>{props.confirmText}</button>}
        </section>
    </div>
);

export default modal;