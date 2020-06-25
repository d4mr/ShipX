import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Ship from '../components/Ship'
import GET_SHIPS from '../graphql/get-ship'
import { Grid, Container, TextField, Button } from '@material-ui/core';

function ShipsContainer() {

    const [count, setCount] = useState(10)
    const [shipName, setShipName] = useState("");
    const { data: { ships = [] } = {} } = useQuery(GET_SHIPS, {
        variables: { limit: count },

    });

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }


    return <>
        <Container>
            <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", height: "300px" }}>
                <TextField variant="outlined" style={{width:"50%"}} value={shipName} placeholder="Ship Name" onChange={(event) => setShipName(event.target.value)} />
            </div>
            <Grid container justify="space-evenly" spacing={2} alignItems="stretch">
                {ships && ships.filter(ship => ship.name.toLowerCase().includes(shipName.toLowerCase()))
                    .map(ship => <Grid item xs={12} sm={6} md={4}> <Ship key={ship.id} ship={ship} /> </Grid>)}
            </Grid>

            <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-evenly", height: "300px" }}>
                <Button variant="outlined" color="primary" size="large" onClick={decrement}>Show less</Button>
                <Button variant="contained" color="primary" size="large" onClick={increment}>Show More</Button>
            </div>

        </Container>
    </>
}

export default ShipsContainer;

