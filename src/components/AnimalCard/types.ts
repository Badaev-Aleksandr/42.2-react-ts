interface Animal {
  animalName: string;
  animalSpecies: string;
  animalRole: string;
  skills: string[];
  animalImage: string;
}

export interface AnimalCardProps {
  animalData: Animal;
}
