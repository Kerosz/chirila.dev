// packages
import { useEffect, useState } from 'react';
// internals
import useQueryFilter from '~/hooks/use-query-filter';
// types
import type { Dispatch, SetStateAction } from 'react';

export interface IFilter<Data> {
  initialData: Data[];
  setData: Dispatch<SetStateAction<Data[]>>;
  filterByData: string[];
}

export default function Filter<T>({
  filterByData,
  initialData,
  setData,
}: IFilter<T>) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const { mutateQuery, query } = useQueryFilter();

  const filterData = () => {
    if (selectedFilters.length > 0) {
      /**
       * This is o(n**3) -> cubic
       * It needs some algorithm to improve the time complexity
       * 1st loop over data -> 2nd loop over tags -> 3rd loop with includes
       */
      const filteredData: T[] = initialData.filter((data: any) => {
        if (data.tags.some((tag: string) => selectedFilters.includes(tag))) {
          return true;
        }
      });

      setData(filteredData);
    } else {
      setData(initialData);
    }
  };

  const handleSelected = (selectedFilter: string) => {
    const isSelected = selectedFilters.includes(selectedFilter);

    let newSelection: string[];

    if (isSelected) {
      newSelection = selectedFilters.filter(
        (entry) => entry !== selectedFilter
      );

      mutateQuery(newSelection);
    } else {
      newSelection = [...selectedFilters, selectedFilter];

      mutateQuery(newSelection);
    }

    setSelectedFilters(newSelection);
  };

  useEffect(() => filterData(), [selectedFilters]);
  useEffect(() => {
    if (query) {
      setSelectedFilters(query);
    }
  }, [query]);

  return (
    <div className='bg-gray-100 px-5 py-4 flex flex-col flex-wrap border border-gray-200 shadow-sm mb-1.5'>
      <span className='font-medium pb-2'>Filter by tag</span>

      <div className='flex space-x-4'>
        {filterByData.map((filterLabel, index) => {
          const isSelected = selectedFilters.includes(filterLabel);

          return (
            <div key={index} className='flex items-center'>
              <label
                htmlFor={`filter__${filterLabel}__${index}`}
                className='mr-2'>
                {filterLabel}
              </label>
              ‍
              <input
                id={`filter__${filterLabel}__${index}`}
                className='focus:ring-red-800 text-red-800'
                type='checkbox'
                checked={isSelected}
                onChange={() => handleSelected(filterLabel)}
              />
              ‍ ‍
            </div>
          );
        })}
      </div>
    </div>
  );
}
