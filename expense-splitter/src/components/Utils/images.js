import forest from "../../assets/forest.png";
import river from "../../assets/river.jpg";
import flower from "../../assets/flower.png";
import gecko from "../../assets/gecko.png";
import tiger from "../../assets/tiger.png";

const images = [forest, river, flower, gecko, tiger];

export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};
