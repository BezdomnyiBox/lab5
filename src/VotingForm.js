import React, { useState } from 'react';
import LogoCard from './LogoCard';


import './App.css';


const information = [
    {
        name: "Месси",
        description: "Аргентина. Интер Майами."
    },
    {
        name: "Мбаппе",
        description: "Франция. ПСЖ."
    },
    {
        name: "Холланд",
        description: "Норвегия. Манчестер Сити."
    }
];

function VotingForm() {
    return (
        <div class="VotingForm">
            <a className="text-logo" href="fifa.com">На главную</a>
            <LogoCard information={information} />
        </div>
    );
};

export default VotingForm;