import "../styles/main.scss"
import FirstStory from "../img/story-1.jpeg"
import SecondStory from "../img/story-2.jpeg"

export const StoryPictures = () => {
  return (
    <div className="story__pictures">
        <img src={FirstStory} alt="Couple with new house" className="story__img--1" />
        <img src={SecondStory} alt="New house" className="story__img--2" />
    
    </div>
  )
}
