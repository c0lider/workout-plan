import React from 'react';
import TextTeaser from './TextTeaser';

const AddTeaser = ({ text, onClick }) => {
    return (
        <TextTeaser>
            <a
                onClick={() => onClick()}
                className="text-decoration-none text-primary cursor-pointer"
            >
                <i className="fa-solid fa-circle-plus me-4"></i>
                {text}
            </a>
        </TextTeaser>
    );
};

export default AddTeaser;
