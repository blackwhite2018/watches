import React, { useState } from 'react';
import PropTypes from 'prop-types';

const defaultClock = {
    name: '',
    zone: 0
};

const Form = ({ handleAddClock }) => {
    const [clock, setClock] = useState(defaultClock);

    const handleChange = ({ target: { name, value } }) => {
        setClock(prevValue => ({...prevValue, [name]: value}));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        handleAddClock(clock);
        setClock(defaultClock);
    };

    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor="name">Название</label>
            <input type="text" onChange={ handleChange } name="name" id="name" />
            <label htmlFor="zone">Временная зона</label>
            <input type="text" onChange={ handleChange } name="zone" id="zone" />
            <input type="submit" value="Добавить" />
        </form>
    );
};

Form.propTypes = {
    props: PropTypes.shape({
        handleAddClock: PropTypes.func.isRequired
    })
};

export default Form;

