import Link from 'next/link'
import Workouts from '@/components/Workouts'

export default function Workout() {
    return (
        
            <div className='Workout'>
                <h1>Choose your Workout</h1>
                
                <Workouts/>
            </div>
        
    )
}