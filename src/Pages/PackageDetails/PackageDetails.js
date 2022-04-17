import React from 'react';
import { useParams } from 'react-router-dom';

const PackageDetails = () => {
    const { packageId } = useParams()
    return (
        <div>
            <h2>This is package details {packageId}</h2>
        </div>
    );
};

export default PackageDetails;