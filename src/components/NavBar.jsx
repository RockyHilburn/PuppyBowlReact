import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/AllPlayers">All Players</Link>
            <Link to="/NewPlayerForm">New Player Form</Link>
            <Link to="/SinglePlayer"> Single Player</Link>
        </nav>
    )
}