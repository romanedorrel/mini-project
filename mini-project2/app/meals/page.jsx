import Link from "next/link";

export default function Dash(){

    return(
        <div className="Dash">
            <h1>Dashboard</h1>
           <p> <Link href='/'>home</Link>.</p>
        </div>
    )
}