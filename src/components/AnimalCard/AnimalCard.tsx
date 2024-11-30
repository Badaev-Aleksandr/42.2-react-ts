import { AnimalCardProps } from "./types";
import {AnimalCardWrapper, AnimalCardWrapperImg} from './styles';

// interface Animal {
//   name: string
//   species: string
//   role: string
//   skills: string[]
//   image: string
// }

function AnimalCard({animalData}: AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      <h3>{animalData.animalName}</h3>
      <div>{animalData.animalSpecies}</div>
      <AnimalCardWrapperImg src={animalData.animalImage} />
    </AnimalCardWrapper>
  );
}

export default AnimalCard;
