import bug from "../Img/Type/bug.png"
import dark from "../Img/Type/dark.png"
import dragon from "../Img/Type/dragon.png"
import electric from "../Img/Type/electric.png"
import fairy from "../Img/Type/fairy.png"
import fighting from "../Img/Type/fighting.png"
import fire from "../Img/Type/fire.png"
import flying from "../Img/Type/flying.png"
import ghost from "../Img/Type/ghost.png"
import grass from "../Img/Type/grass.png"
import ground from "../Img/Type/ground.png"
import ice from "../Img/Type/ice.png"
import normal from "../Img/Type/normal.png"
import poison from "../Img/Type/poison.png"
import psychic from "../Img/Type/psychic.png"
import rock from "../Img/Type/rock.png"
import steel from "../Img/Type/steel.png"
import water from "../Img/Type/water.png"


export const GetType = (type) => {
  switch(type) {
    case "bug":
      return bug
    case "dark":
      return dark
    case "dragon":
      return dragon
    case "electric":
      return electric
    case "fairy":
      return fairy
    case "fighting":
      return fighting
    case "fire":
      return fire
    case "flying":
      return flying
    case "ghost":
      return ghost
    case "grass":
      return grass
    case "ground":
      return ground
    case "ice":
      return ice
    case "normal":
      return normal
    case "poison":
      return poison
    case "psychic":
      return psychic
    case "rock":
      return rock
    case "steel":
      return steel
    case "water":
      return water
    default:
      return water
  }
};