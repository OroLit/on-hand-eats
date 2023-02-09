import React from "react";
import classes from './addRecipe.module.css'
import Button from "../../UI/Button"
import Wrapper from "../Helpers/Wrapper";
import Card from "../../UI/Card";
import { useState } from "react";
import { RiSave3Line } from "react-icons/ri";
import ErrorModal from "../../UI/ErrorModal";


function AddRecipe(props) {
    //const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState();
    const [enteredRecipeName, setEnteredRecipeName] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredNote, setEnteredNote] = useState('');
    const [enteredNutrition, setEnteredNutrition] = useState('');
    //const [file, setFile] = useState();

    const recipeChangeHandler = (event) => {
        setEnteredRecipeName(event.target.value)
    }
    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value)
    }
    const noteChangeHandler = (event) => {
        setEnteredNote(event.target.value)
    }
    const nutritionChangeHandler = (event) => {
        setEnteredNutrition(event.target.value)
    }
    //file, setFile arguement?

    /*function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    } <img src={file} />
    
    */

    

    const submitHandler = (event) => {
        event.preventDefault();
        const recipeData = {
            name: enteredRecipeName,
            description: enteredDescription,
            note: enteredNote,
            nutrition: enteredNutrition,
        };
        //id: Math.random().toString() with nutrition object? 
        props.onSaveRecipeData(recipeData);
        setEnteredDescription('')
        setEnteredRecipeName('')
        setEnteredNote('')
        setEnteredNutrition('')
    }
    if (enteredRecipeName.length === 0 || enteredDescription.length === 0 || enteredNote.length === 0 || enteredNutrition.length === 0) {
        setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and description (non-empty values)'
        })
    }
    const errorHandler = () => {
        setError(null);
    }
    
    return (
        <Wrapper>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <Button type='submit'><RiSave3Line />Save</Button>
                    <label>Name</label>
                    <input
                        type='text'
                        placeholder="Beef Ramen"
                        value={enteredRecipeName}
                        onChange={recipeChangeHandler}
                    />
                    <label>Descriptioin</label>
                    <input
                        type='text'
                        placeholder="Earthy beef ramen for comfort eating"
                        value={enteredDescription}
                        onChange={descriptionChangeHandler}
                    />
                    <label>Recipe Notes</label>
                    <input
                        type='text'
                        placeholder="Best served with thick noodles"
                        value={enteredNote}
                        onChange={noteChangeHandler}
                    />
                    <label>Nutritional info</label>
                    <input
                        type='text'
                        placeholder="Best served with thick noodles"
                        value={enteredNutrition}
                        onChange={nutritionChangeHandler}
                    />
                    <h4>Photos</h4>
                    <input type="file" />
                    
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddRecipe;