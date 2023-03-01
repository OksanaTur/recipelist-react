import { Image, ImgContainer, ImgTitle, Description, CardRecipe } from "./Recipe.styled"

export const Recipe = ({item:{name, image, time, servings, calories}}) => {
    return <ImgContainer>
        <Image src={image} alt={name} width='120' />
        <ImgTitle>{name}</ImgTitle>
        <CardRecipe>
            <Description>
                <span>icon</span>
                {time} min
                <span>icon</span>
                {servings} servings
                <span>icon</span>
                {calories} calories
            </Description>
        </CardRecipe>
   </ImgContainer>
}