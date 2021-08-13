const config = {
  siteUrl: 'https://www.chirila.dev',
  siteName: 'Andrei Chirila',
  siteLocale: 'en_US',
  title: 'Andrei Chirila',
  titleTemplate: '%s – Developer, writer.',
  descritpion:
    'Persoanl space on the internet to share my work, my thoughts, a bit about myself and my working process, along with get in touch information.',
  defaultImage: 'https://www.chirila.dev/images/blog/banner.jpg',
  blog: {
    name: 'Writing',
    path: 'writing',
    githubEditUrl:
      'https://github.com/Kerosz/chirila.dev/tree/main/data/writing',
  },
  snippets: {
    name: 'Snippets',
    path: 'snippets',
    githubEditUrl:
      'https://github.com/Kerosz/chirila.dev/tree/main/data/snippets',
  },
  twitter: {
    url: 'https://twitter.com/chirila_',
    handle: '@chirila_',
    find: 'https://mobile.twitter.com/search?q=',
  },
  linkedIn: 'https://www.linkedin.com/in/c-andrei/',
  gitHub: 'https://github.com/Kerosz',
} as const;

export default config;
