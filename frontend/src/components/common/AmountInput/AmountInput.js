import React from 'react';
import { Form } from 'react-bootstrap';

const AmountInput = ({ text, exercise, value, onChange }) => {
    return (
        <Form>
            <Form.Group controlId={exercise.id}>
                <Form.Label className="fs-5 p-0 m-0">{text}</Form.Label>
                <Form.Control
                    type="number"
                    className="text-info"
                    value={value}
                    onChange={(e) => {
                        onChange(e.target.value, exercise.id);
                    }}
                />
            </Form.Group>
        </Form>
    );
};

export default AmountInput;
