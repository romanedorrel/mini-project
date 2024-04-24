import Link from 'next/link'
import Workouts from '@/components/Workouts'

export default function About() {
    return (
        
            <div className='About'>
                <h1>Choose your Workout</h1>
                
                <Workouts/>
            </div>
        
    )
}