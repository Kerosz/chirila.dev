// packages
import Fuse from 'fuse.js';
import { useState, useEffect } from 'react';
// types
import type { ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface ISearchBar<T> {
  initialData: T[];
  setData: Dispatch<SetStateAction<T[]>>;
  options: Fuse.IFuseOptions<unknown>;
  triggerCharCount?: number;
  placeholder?: string;
}

export default function SearchBar<T>({
  initialData,
  setData,
  options,
  triggerCharCount = 2,
  placeholder = 'Search',
}: ISearchBar<T>) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const fuse = new Fuse(initialData, options);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget;

    setSearchTerm(value);
  };

  useEffect(() => {
    if (searchTerm.length > triggerCharCount) {
      const results = fuse.search(searchTerm);

      const posts = results.map((r) => r.item);

      setData(posts);
    } else {
      setData(initialData);
    }
  }, [searchTerm]);

  return (
    <input
      type='search'
      placeholder={placeholder}
      className='h-16 px-0.5 text-lg bg-transparent border-t-0 border-l-0 border-r-0 focus:ring-0 border-gray-400 focus:border-gray-900 max-w-lg w-full uppercase placeholder-gray-500 mt-5'
      value={searchTerm}
      onChange={handleInputChange}
    />
  );
}
