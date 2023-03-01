import { Recipe } from "./Recipe";
import { List } from "./recipeList.styled";

export const RecipeList = ({items}) => {
    return (
        <List>
        {items.map(item => (
         <li key={item.id}>
                <Recipe item={item} /></li>
    ))}</List>
    );
}