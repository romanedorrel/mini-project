'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavBar() {
    const path = usePathname();

    return (
        <nav className='NavBar'style={{backgroundColor: '#09193b', color: '#14bbe5'}}>
        <ul className='menu'> 
           <li><Link href='/mypage' className={path.startsWith('/mypage') ? 'active' : null}>Home Page</Link></li>
           <li><Link href='/workouts' className={path.startsWith('/about') ? 'active' : null}>Workouts</Link></li> 
           <li><Link href='/meals' className={path.startsWith('/meals') ? 'active' : null}>Meals</Link></li>
           <li><Link href='/'>Sign Out</Link></li>
        </ul>
        </nav>
    )
}

export default NavBar;