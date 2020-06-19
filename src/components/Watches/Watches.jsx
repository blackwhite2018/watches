import React, { useState } from 'react';
import Form from './Form/Form';
import Clocks from './Clocks/Clocks';

const Watches = () => {
    const [clocks, setClocks] = useState([
        {
            name: 'Moscow',
            zone: 3
        }
    ]);

    const handleAddClock = clock => {
        console.log(clocks, clock)
        setClocks(prevValue => [...prevValue, clock]);
    };

    const handleRemoveClock = name => {
        setClocks(prevValue => {
            return [...clocks].filter(clock => clock.name !== name);
        });
    };

    return (
        <>
            <Form
                handleAddClock={ handleAddClock }
            />
            <Clocks
                clocks={ clocks }
                handleRemoveClock={ handleRemoveClock }
            />
        </>
    );
};

export default Watches;

