import { ISocialItem } from "../types/types.tsx";
import linkedInImg from "../img/socialIcons/linkedin.png";
import gitHubImg from "../img/socialIcons/github.png";
import stackOverflowImg from "../img/socialIcons/stackOverflow.png";

const socialItems: ISocialItem[] = [
  {
    image: linkedInImg,
    page: "https://www.linkedin.com/in/bohdan-rud-432554260/",
    description: "Linked in",
  },
  {
    image: gitHubImg,
    page: "https://github.com/Bogdan252525",
    description: "Git Hub",
  },
  {
    image: stackOverflowImg,
    page: "https://stackoverflow.com/users/20921773/bohdan",
    description: "Stack overflow",
  },
];

export default socialItems;
