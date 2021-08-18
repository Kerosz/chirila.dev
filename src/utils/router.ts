export type PrevPathReturn = { prevPath: string; prevLabel: string };

/**
 * Gets the prev router path and label
 * @param path The complete path of the router
 * @returns {PrevPathReturn} An object including the prev path and label
 */
export const getRouterPrevPath = (path: string): PrevPathReturn => {
  const pathArr: string[] = path.split('/');
  const paths: Record<string, string> = {
    '/': 'Home',
    '/about': 'About',
    '/writing': 'Writing',
    '/snippets': 'Snippets',
  };

  let prevPath: string = pathArr[pathArr.length - 2];
  prevPath === '' ? (prevPath = '/') : (prevPath = '/' + prevPath);

  return { prevPath, prevLabel: paths[prevPath] };
};
