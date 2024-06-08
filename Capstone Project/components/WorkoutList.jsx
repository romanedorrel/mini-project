'use client'
import { useState, useEffect } from "react";
import React from "react";
import WorkoutCard from "./WorkoutCard";
import { Grid } from "@mui/material";
import Workouts from "./WorkoutForm";


async function getWorkoutsData() {
    const res = await fetch('https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json');
    if (!res.ok) { // Recommendation: handle errors
    throw new Error("Failed to fetch workouts")
    }
    return res.json()
    }

export default function WorkoutList() {
    const [workouts, setWorkouts] = useState([]);
    const [filteredWorkout,setFilteredWorkout] = useState([]);
    const backBicep = ['lats', 'middle back', 'lower back', 'biceps'];
    const chestTricep = ['chest','triceps'];
    const legsGlutes = ['glutes','hamstrings','quadriceps','abductors','adductors'];
    const shouldersTraps = ['shoulders','traps'];

    useEffect(() => {
        async function fetchWorkouts() {
            try {
                const workoutsData = await getWorkoutsData(); // default limit is 5
                setWorkouts(workoutsData);
                //setFilteredWorkout(workoutsData);
            } catch (error) {
                console.error(error);
            }
        }
        fetchWorkouts();
    }, []);

    const handleFormSubmit = (selectedWorkout,numberofWorkouts,fitnessLevel) => {

        let filteredList;
        let displayList;
        if(selectedWorkout === 'back'){
            filteredList = workouts.filter(workout => workout.primaryMuscles.some(muscle => backBicep.includes(muscle)));
        }else if(selectedWorkout === 'legs'){
            filteredList = workouts.filter(workout => workout.primaryMuscles.some(muscle => legsGlutes.includes(muscle)));
        }else if(selectedWorkout === 'chest'){
            filteredList = workouts.filter(workout => workout.primaryMuscles.some(muscle => chestTricep.includes(muscle)));
        }else if(selectedWorkout === 'shoulders'){
            filteredList = workouts.filter(workout => workout.primaryMuscles.some(muscle => shouldersTraps.includes(muscle)));
        }else if(selectedWorkout === 'stretching'){
            filteredList = workouts.filter(workout => workout.category.includes(selectedWorkout));
        }else{
        filteredList = workouts.filter(workout => workout.primaryMuscles.includes(selectedWorkout));
        }
        displayList = filteredList.filter(result => result.level.includes(fitnessLevel));
        for (let i = displayList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [displayList[i], displayList[j]] = [displayList[j], displayList[i]];
        }
        let limitedResults = displayList.slice(0,numberofWorkouts);
        setFilteredWorkout(limitedResults);
    }
    

return (
    <div>
        <div className="forms">
            <Workouts onFormSubmit={handleFormSubmit} />
        </div>
        <div className="workouts">  
            <Grid container spacing={2}>        
                {filteredWorkout.map(workout => (
                    <Grid item key={[workout.id]} xs={12} sm={6}>
                        <WorkoutCard
                            id={workout.id}
                            title={workout.name}
                            subtitle={workout.equipment}
                            description={workout.instructions}/>
                    </Grid>
                    ))}
            </Grid>
        </div>
    </div>
)
}
