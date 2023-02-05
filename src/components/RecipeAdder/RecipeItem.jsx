import Card from "../../UI/Card";
import Button from "../../UI/button";
import "./RecipeItem.module.css";
import { useState } from "react";

function RecipeItem(props) {
const [activeTab, setActiveTab] = useState('instructions');

    return (
        <li>
            <Card>
                <div className={classes.details}>
                <h2>{details.label}</h2>
                <img src={details.image} alt="" />
                </div>
                <div className={classes.info}>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instrcutions')}>
                Instructions</Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>
                Ingredients</Button>
                {activeTab === "instructions" && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{ ___html: details.instructions}}></h3>
                        
                    </div>
                )}
                {activeTab === "ingredients" && (
                    <ul>
                        {RecipeItem.ingredients.map((ingredient) => (
                         <li key={ingredients.id}>{ingredients}</li>
                        ))}
                       
                    </ul>
                )}
                </div>
            </Card>
        </li>
    )
};

export default RecipeItem;