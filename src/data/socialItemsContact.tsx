import { ISocialItem } from "../types/types.tsx";
import facebookBlackImg from "../img/socialIcons/facebookBlack.png";
import linkedinBlackImg from "../img/socialIcons/linkedinBlack.png";
import githubBlackImg from "../img/socialIcons/githubBlack.png";
import stackOverflowBlackImg from "../img/socialIcons/stackOverflowBlack.png";

const socialItemsContact: ISocialItem[] = [
	{
    image: facebookBlackImg,
    page: "https://www.facebook.com/profile.php?id=100001822836901",
    description: "Facebook",
  },
  {
    image: linkedinBlackImg,
    page: "https://www.linkedin.com/in/bohdan-rud-432554260/",
    description: "Linked in",
  },
  {
    image: githubBlackImg,
    page: "https://github.com/Bogdan252525",
    description: "Git Hub",
  },
  {
    image: stackOverflowBlackImg,
    page: "https://stackoverflow.com/users/20921773/bohdan",
    description: "Stack overflow",
  },
];

export default socialItemsContact;
