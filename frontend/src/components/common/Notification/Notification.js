import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const Notification = ({ message, showToast, onClose }) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <ToastContainer position="top-end" className="p-3">
            <Toast
                show={showToast}
                onClose={handleClose}
                delay={3000}
                className="bg-info text-white border-0 rounded-3 p-3"
                autohide
            >
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Planner</strong>
                    <small>just now</small>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
};

export default Notification;
