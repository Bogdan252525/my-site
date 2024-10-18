import { ITechnology } from '../types/types.tsx';
import htmlImg from '../img/technologyIcons/html.png';
import cssImg from '../img/technologyIcons/css.png';
import sassImg from '../img/technologyIcons/sass.png';
import tailwindcssImg from '../img/technologyIcons/tailwindcss.png';
import jsImg from '../img/technologyIcons/js.png';
import reactImg from '../img/technologyIcons/react.png';
import reduxImg from '../img/technologyIcons/redux.png';
import nextjsImg from '../img/technologyIcons/nextjs.png';
import npmImg from '../img/technologyIcons/npm.png';
import gitImg from '../img/technologyIcons/git.png';
import githubImg from '../img/technologyIcons/github.png';
import tsImg from '../img/technologyIcons/ts.png';
import vscodeImg from '../img/technologyIcons/vscode.png';
import nodejsImg from '../img/technologyIcons/nodejs.png';
import expressjsImg from '../img/technologyIcons/expressjs.png';
import nestjsImg from '../img/technologyIcons/nestjs.png';
import postgresqlImg from '../img/technologyIcons/postgresql.png';
import mongodbImg from '../img/technologyIcons/mongodb.png';
import graphqlImg from '../img/technologyIcons/graphql.png';
import jestjsImg from '../img/technologyIcons/jestjs.png';

const technologies: ITechnology[] = [
  { image: htmlImg, name: 'HTML' },
  { image: cssImg, name: 'CSS' },
  { image: sassImg, name: 'SASS' },
  { image: tailwindcssImg, name: 'Tailwind CSS' },
  { image: jsImg, name: 'JS' },
  { image: reactImg, name: 'React' },
  { image: reduxImg, name: 'Redux' },
  { image: nextjsImg, name: 'Next.js' },
  { image: npmImg, name: 'npm' },
  { image: gitImg, name: 'git' },
  { image: githubImg, name: 'GitHub' },
  { image: tsImg, name: 'Type Script' },
  { image: vscodeImg, name: 'VS Code' },
  { image: nodejsImg, name: 'Node.js' },
  { image: expressjsImg, name: 'Express.js' },
  { image: nestjsImg, name: 'NestJS' },
  { image: postgresqlImg, name: 'PostgreSQL' },
  { image: mongodbImg, name: 'MongoDB' },
  { image: graphqlImg, name: 'GraphQL' },
  { image: jestjsImg, name: 'Jest' },
];

export default technologies;
