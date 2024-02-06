const cohortName = '2308-ACC-PT-WEB-PT-B';

const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export async function gettingPlayers() {
    try {
        const response = await fetch(`${APIURL}/players`)
        const playerData = await response.json()
        return (
            playerData.data.players
        )
    } catch (error) {
        console.log(error)
    }
}