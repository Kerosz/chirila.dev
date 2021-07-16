export interface IProjectData {
  title: string;
  scope: string;
  tags: string[];
  summary: string;
  srcName: string;
}

const projectData: IProjectData[] = [
  {
    title: 'Unitech Pest',
    scope: 'UX/UI Design. Website Development',
    tags: ['gatsby', 'styled-components', 'contentful'],
    summary:
      'Unitech Pest and Control was a full revamp of 2 websites for a pest control company based in Saint Louis, Missouri. Working with latest technologies on the market we were able to solve all the problems that were presented in the initial discussion with the representatives of the company',
    srcName: 'example-1.jpg',
  },
  {
    title: 'Nectbox',
    scope: 'Website Development',
    tags: ['nextjs', 'styled-components', 'typescript'],
    summary:
      'After some independent work I decided to form an agency which will facilitate the working process with local clients from early consulting and design stages all the way up to development and marketing of their products and ideas.',
    srcName: 'example-2.jpg',
  },
  {
    title: 'Reddit Client',
    scope: 'UX/UI Design. Website Development',
    tags: ['react', 'material-ui', 'typescript', 'redux-toolkit'],
    summary:
      'Adapting to different trends and designs as a company that impact millions of users is difficult. Reddit Client Redesign is the unofficial Reddit front-end app concept to simplify and tune the browsing experience of the users. ',
    srcName: 'example-3.jpg',
  },
];

export default projectData;
