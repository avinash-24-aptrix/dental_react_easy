import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Suppelier from '../Suppelier/Suppelier';

const Dashboard = () => {

    const params = useParams();
    const openParameter = params.params;
    console.log(openParameter);
    return (
        <div>

        </div>
    );
};

export default Dashboard;
