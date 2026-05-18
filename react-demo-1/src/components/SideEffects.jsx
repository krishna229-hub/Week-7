import React, { use, useEffect } from 'react'

function SideEffects() {
    const [count,setUsers]=React.useState(0);

    useEffect(()=>{
        async function getData(){
            const response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
            const usersData = await response.json();
            console.log(usersData);
            setUsers(usersData);
        }
        getData();
    }, [])//dependency array
    //side effect
  return (
    <div></div>
  )
}

export default SideEffects