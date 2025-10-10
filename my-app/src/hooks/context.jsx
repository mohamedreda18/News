import { useState, createContext } from "react";


export const likeContext = createContext()



const LikeProvider = ({ children }) => {



    const [likeCounter , setLikeCounter] = useState(0)
    const [likedCards , setLikeCards] = useState([])
    

    const  handleCounter =()=>{

        setLikeCounter((prev)=> prev + 1)
        console.log(likeCounter)

    }

    
  
    const toggleLike = (card) => {
    
    const isLiked = likedCards.some((item) => item.url === card.url);

    if (isLiked) {
      // remove it
      setLikeCards(likedCards.filter((item) => item.url !== card.url));
      setLikeCounter((prev)=> prev - 1)
    } else {
      // add it
      setLikeCards([...likedCards, card]);
      setLikeCounter((prev)=> prev + 1)
    }
  };



    return (
        <likeContext.Provider value={{ likedCards , toggleLike  , handleCounter, likeCounter}}>
            {children}
        </likeContext.Provider>
    )
}

export default LikeProvider
