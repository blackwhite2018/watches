import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Clock from './Clock/Clock';

const Clocks = ({ clocks, handleRemoveClock }) => {
    const clockIds = [...clocks].map(clock => {
        return {
            _id: shortid.generate(),
            ...clock
        };
    });

    return (
        <>
            {
                clockIds.map(({ _id, name, zone }) => {
                    return (
                        <Clock 
                            key={ _id }
                            clock={ { name, zone } }
                            handleRemoveClock={ handleRemoveClock }   
                        />
                    );
                })
            }
        </>
    );
};

Clocks.propTypes = {

};

export default Clocks;

