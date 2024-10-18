import { IMyWorks } from '../types/types.tsx';
import happytailsImg from '../img/works/happytails.png';
import cozyhouseImg from '../img/works/cozyhouse.png';
import bohdanblogImg from '../img/works/bohdanblog.png';
import windowssiteImg from '../img/works/windowssite.png';
import tictactoeImg from '../img/works/tictactoe.png';
import cartImg from '../img/works/cart.png';
import todoImg from '../img/works/todo.png';
import expenseImg from '../img/works/expense.png';

const myWorks: IMyWorks[] = [
  {
    image: happytailsImg,
    link: 'https://happytails.team/',
    description: 'happy-tails app',
    about: 'Pet store (Front-end React)',
  },
  {
    image: cozyhouseImg,
    link: 'https://rolling-scopes-school.github.io/bogdan252525-JSFEPRESCHOOL2024Q2/shelter/index.html',
    description: 'cozy-house app',
    about: 'Shelter for animals (Front-end Vanilla js)',
  },
  {
    image: bohdanblogImg,
    link: 'https://mern-blog-frontend-35lu.onrender.com/',
    description: 'blog site',
    about: 'Bohdan blog (Full-stack MERN)',
  },
  {
    image: windowssiteImg,
    link: 'https://bogdan252525.github.io/windows-site/',
    description: 'windows site',
    about: 'Windows site (Front-end Vanilla js)',
  },
  {
    image: tictactoeImg,
    link: 'https://rolling-scopes-school.github.io/bogdan252525-JSFEPRESCHOOL2024Q2/random-game/',
    description: 'tictactoe app',
    about: 'Tic Tac Toe game (Front-end Vanilla js)',
  },
  {
    image: cartImg,
    link: 'https://bogdan252525.github.io/site-cart/',
    description: 'site cart',
    about: 'Site cart (Front-end React)',
  },
  {
    image: todoImg,
    link: 'https://bogdan252525.github.io/todo-app/',
    description: 'todo app',
    about: 'Application todo (Front-end React)',
  },
  {
    image: expenseImg,
    link: 'https://bogdan252525.github.io/expense-form/',
    description: 'expense',
    about: 'Application expenses (Frontend React)',
  },
];

export default myWorks;
