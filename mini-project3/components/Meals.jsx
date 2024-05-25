'use client'
import { useState } from "react"

export default function Meals() {
    const [meal,provideMeal] = useState('');

    const handleMealSelection = (e) => {
        provideMeal(e.target.value);
    }
    return (
        <div className="Meal">
            <h1>Select your options for auto-generated meal</h1>
            <form >
                <input 
                    type="radio" 
                    id="breakfast" 
                    name="breakfast" 
                    value='breakfast' 
                    checked={meal === 'breakfast'}
                    onChange={handleMealSelection} />
                <label htmlFor="breakfast"><h2>Breakfast</h2></label><br />
                <input 
                    type="radio" 
                    id="lunch" 
                    name="lunch" 
                    value='lunch' 
                    checked={meal === 'lunch'}
                    onChange={handleMealSelection} />
                <label htmlFor="lunch"><h2>Lunch</h2></label><br />
                <input 
                    type="radio" 
                    id="dinner" 
                    name="dinner" 
                    value='dinner' 
                    checked={meal === 'dinner'}
                    onChange={handleMealSelection} />
                <label htmlFor="dinner"><h2>Dinner</h2></label><br />
            </form>
            <p>{meal}</p>
        </div>
    )
}