import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <h1>WorldWise</h1>
            <Link to="/pricing">Pricing</Link>
        </div>
    )
}

export default Home
