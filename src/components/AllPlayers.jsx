import { useState, useEffect } from "react"
import { gettingPlayers } from "../API"

export default function AllPlayers() {
    const [players, setPlayers] = useState([])
    useEffect(
        () => {
            async function getPuppies() {
                const puppies = await gettingPlayers()
                setPlayers(puppies)
            }
            getPuppies()
        }, []
    )


    return (
        <>
            {players.map(
                (player) => {
                    return (
                        <div>
                            <h2>{player.name}</h2>
                            {/* <img src=""/> */}
                            <p>Breed: {player.breed}</p>
                            <p>Status: {player.status}</p>
                            <p>Team ID: {player.teamId}</p>
                            <button class="delete-button" data-player-id="{player.id}">Delete</button>
                            <button class="details-button" data-player-id="{player.id}">See Details</button>
                        </div>
                    )
                }
            )}
        </>
    )
}