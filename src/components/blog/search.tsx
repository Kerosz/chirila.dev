// packages
import Fuse from 'fuse.js';
import { useState, useEffect } from 'react';
// types
import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import type { FrontMatterWithoutMeta } from '~/services/mdx';

export interface IBlogSearchBar {
  initialPosts: FrontMatterWithoutMeta[];
  setPosts: Dispatch<SetStateAction<FrontMatterWithoutMeta[]>>;
}

export default function BlogSearchBar({
  initialPosts,
  setPosts,
}: IBlogSearchBar) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const SEARCH_OPTIONS = {
    includeScore: true,
    // Search in `title` and in `tags` array
    keys: ['title', 'tags'],
    threshold: 0.4,
  };
  const fuse = new Fuse(initialPosts, SEARCH_OPTIONS);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget;

    setSearchTerm(value);
  };

  useEffect(() => {
    if (searchTerm.length > 2) {
      const results = fuse.search(searchTerm);

      const posts = results.map((r) => r.item);

      setPosts(posts);
    } else {
      setPosts(initialPosts);
    }
  }, [searchTerm]);

  return (
    <input
      type='search'
      placeholder='Search articles'
      className='h-16 px-0.5 text-lg bg-transparent border-t-0 border-l-0 border-r-0 focus:ring-0 border-gray-400 focus:border-gray-900 max-w-lg w-full uppercase placeholder-gray-500 mt-5'
      value={searchTerm}
      onChange={handleInputChange}
    />
  );
}
