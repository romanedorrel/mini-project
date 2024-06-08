
import { useState, useEffect } from "react";
import React from "react";
import MealCard from "./MealsCard";
import { Grid } from "@mui/material";
import MealsForm from "./MealsForm";
import { set } from "mongoose";


async function getMeal(category){
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    if(!res.ok){
        throw new Error('Failed to fetch category');
    }else{
        return res.json()
    }
}
async function getIngredients(id){
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    if(!res.ok){
        throw new Error('Failed to fetch Ingredients');
    }else{
        return res.json()
    }
}
export default function Meal(){
    const [meals, setMeals] = useState([]);
    const [meal, setMeal] = useState(null);
    const [category, setCategory] = useState('Vegan');
    


    
    useEffect(()=> {
        async function fetchMeals(){
         try{
            const mealsData = await getMeal(category);
            setMeals(mealsData.meals);
         } catch(error) {
            console.error(error);
         }  
        }
        fetchMeals();  
        
    },[category]);

    useEffect(()=> {
        async function fetchIngredients(){
            if(meals.length > 0 ){
                for (let i = meals.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [meals[i], meals[j]] = [meals[j], meals[i]];
                }
            }
         try{
            const fullMeal = await getIngredients(meals[0].idMeal);
            setMeal(fullMeal.meals[0]);
         } catch(error) {
            console.error(error);
         }  
        }
        fetchIngredients();  
        
    },[meals]);

const handleFormSubmit=(selectedCategory) => {
    setCategory(selectedCategory);
    }

    return (
        <div>
            <div className="forms">
                <MealsForm onFormSubmit={handleFormSubmit}/>
            </div>
              <div className="meal">
                 {meal && (    <MealCard 
                    name={meal.strMeal}
                    id={meal.strInstructions}
                    image={meal.strMealThumb}
                /> 
                 )}
            </div>     
        </div>
    )
}