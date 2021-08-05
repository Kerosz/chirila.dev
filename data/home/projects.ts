export interface IProjectData {
  title: string;
  scope: string;
  tags: string[];
  summary: string;
  srcName: string;
  link: string;
}

const projectData: IProjectData[] = [
  {
    title: 'Nectbox',
    scope: 'UX/UI Design. Website Development',
    tags: ['gatsbyjs', 'styled-components', 'typescript'],
    summary:
      'After some independent work I decided to form a centralized place which will facilitate the working process with local clients from early consulting and design stages all the way up to development and marketing of their products and ideas.',
    srcName: 'nectbox-mock.png',
    link: '/writing/nectbox',
  },
  {
    title: 'Montex',
    scope: 'UX/UI Design. Web App Development',
    tags: ['nextjs', 'tailwindcss', 'supabase'],
    summary:
      "Montex it's the easiest way to add comments or reviews to your blog or personal website. Implementing a feedback system into your website was never that easy.",
    srcName: 'montex-mock.png',
    link: '/writing/montex',
  },
  {
    title: 'Margatsni',
    scope: 'Web App Development',
    tags: ['react', 'tailwindcss', 'firebase', 'cloudinary'],
    summary:
      'Margatsni is an unofficial web application build of the famous Instagram by Facebook, providing a full social media experience in the browser.',
    srcName: 'margatsni-mock.png',
    link: '/writing/margatsni',
  },
];

export default projectData;
