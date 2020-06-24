import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Ship } from '../components/Ship'
import GET_SHIPS from '../graphql/get-ship'

function ShipsContainer() {

    const {data: {ships = []} = {} } = useQuery(GET_SHIPS, {
        variables: { limit: 10},

    });


    return(
        <div className="container">
            {ships && ships.map(ship => <Ship key={ship.id} ship={ship} />)}
        </div>
    );
}

export default ShipsContainer;