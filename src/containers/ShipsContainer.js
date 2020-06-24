import React , {useState} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Ship } from '../components/Ship'
import GET_SHIPS from '../graphql/get-ship'

function ShipsContainer() {

    const[count , setCount] = useState(10)

    const {data: {ships = []} = {} } = useQuery(GET_SHIPS, {
        variables: { limit : count},

    });

    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }


    return(
        <div className="container">
            <button onClick={decrement}>Show less</button>
            {ships && ships.map(ship => <Ship key={ship.id} ship={ship} />)}
            <button onClick={increment}>Show More</button>
        </div>
        
    );
}

export default ShipsContainer;

