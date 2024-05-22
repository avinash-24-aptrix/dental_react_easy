import React from 'react';
import { useParams } from 'react-router-dom';
import Suppelier from '../Suppelier/Suppelier';
import DashboardInner from './DashboardInner';

const Dashboard = () => {

    // using useparams hook to get data from URL
    const params = useParams();
    const openParameter = params.params;

    // rendering Component from data of URL
    const componentMap = {
        suppeliers: <Suppelier />,
        dashboard: <DashboardInner />,
    }

    // for opening the component based on Object
    const toBeOpened = componentMap[openParameter] || <p>not made this component yet defined</p>;

    return (
        <div>
            {toBeOpened}
        </div>
    );
};

export default Dashboard;
