import { AnimalCardProps } from "./types";
import {
  AnimalCardWrapper,
  AnimalCardWrapperImg,
  AnimalName,
  AnimalSpecies,
} from "./styles";

// interface Animal {
//   name: string
//   species: string
//   role: string
//   skills: string[]
//   image: string
// }

function AnimalCard({ animalData }: AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      <AnimalName>{animalData.animalName}</AnimalName>
      <AnimalSpecies>{animalData.animalSpecies}</AnimalSpecies>
      <AnimalCardWrapperImg src={animalData.animalImage} />
    </AnimalCardWrapper>
  );
}

export default AnimalCard;
