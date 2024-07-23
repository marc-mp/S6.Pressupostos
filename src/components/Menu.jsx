import { Link } from "react-router-dom"

export default function Menu(){



    return (
        <div className="inline-flex content-center text-indigo-700 underline mt-5 mx-32">
            <nav className="me-10">
                <Link to={"/"}>Home</Link>
            </nav>
            <nav>
                <Link to={"/App"}>Calculadora</Link>    
            </nav>
        </div>
        
    )
}