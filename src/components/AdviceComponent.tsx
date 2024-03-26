import React, { useEffect, useState } from 'react';
import { mySolidAdvice } from '../interfaces/interface.js';
import { getData } from '../DataServices/DataServices';
import spedicey from '../assets/images/icon-dice.svg'; //for whatever reason this would refuse to load and give an error unless i put it inside of another folder

const AdviceComponent = () => {
    const [adviceData, setAdviceData] = useState<mySolidAdvice>();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setAdviceData(data);
        };
        fetchData();
    }, []);

    const changeAdvice = async () => {
        const data = await getData();
        setAdviceData(data);
    };

    return (
        <div className='flex-container'>
        <div className='advice-box'>
            <p className='advice-id'>{`ADVICE #${adviceData?.slip.id}`}</p>
            <p className='advice-text'>{`"${adviceData?.slip.advice}"`}</p>
            <div className='image-container'>
                <div className='patternBackground'></div>
            </div>
            <div className='button-container'>
                <div onClick={changeAdvice} className='action-button'>
                    <img src={spedicey} alt="jackSpedicey" className='dice-icon' />
                </div>
            </div>
        </div>
    </div>
    );
};

export default AdviceComponent;