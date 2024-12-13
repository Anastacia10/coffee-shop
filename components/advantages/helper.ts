import { IAdvantage } from "types/advantages";
import { AWS_S3_URL } from "constants/application";

export const advantages: IAdvantage[] = [
  {
    src: AWS_S3_URL + "first.jpg",
    text: "Best Coffee Flavour",
    alt: "Coffe picture 1",
  },
  {
    src: AWS_S3_URL + "second.jpg",
    text: "Place to get lost",
    alt: "Coffe picture 2",
  },
  {
    src: AWS_S3_URL + "third.jpg",
    text: "Proper roesting",
    alt: "Coffe picture 3",
  },
];
