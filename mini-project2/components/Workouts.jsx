'use client'
import { useState } from "react"

export default function Workouts() {
    const [workout,provideWorkout] = useState('');

    const handleWorkoutChoice = (e) => {
        provideWorkout(e.target.value);
    }
    return (
        <div className="Workouts">
            <form >
                <input 
                    type="radio" 
                    id="fullBody" 
                    name="fullBody" 
                    value='fullBody' 
                    checked={workout === 'fullBody'}
                    onChange={handleWorkoutChoice} />
                <label htmlFor="fullBody">FullBody</label><br />
                <input 
                    type="radio" 
                    id="back" 
                    name="back" 
                    value='back' 
                    checked={workout === 'back'}
                    onChange={handleWorkoutChoice} />
                <label htmlFor="back">Back/Bicep</label><br />
                <input 
                    type="radio" 
                    id="chest" 
                    name="chest" 
                    value='chest' 
                    checked={workout === 'chest'}
                    onChange={handleWorkoutChoice} />
                <label htmlFor="chest">Chest/Tricep</label><br />
                <input 
                    type="radio" 
                    id="shoulders" 
                    name="shoulders" 
                    value='shoulders' 
                    checked={workout === 'shoulders'}
                    onChange={handleWorkoutChoice} />
                <label htmlFor="shoulders">Shoulders/Traps</label><br />
                <input 
                    type="radio" 
                    id="legs" 
                    name="legs" 
                    value='legs' 
                    checked={workout === 'legs'}
                    onChange={handleWorkoutChoice} />
                <label htmlFor="legs">Legs/Glutes</label><br />
            </form>
            <p>{workout}</p>
        </div>
    )
}