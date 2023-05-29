import React from 'react';

const DescriptionCard = ({label, value}) => {

    return (
        <div className='description_card'>
            <div className='description_key'>{label}</div>
            <div className='description_value'>{value}</div>
        </div>
    );
}

export default DescriptionCard;