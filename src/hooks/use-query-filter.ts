// packages
import { useMemo } from 'react';
import { useRouter } from 'next/router';
// utils
import { isString } from '~/utils';

export default function useQueryFilter() {
  const router = useRouter();
  const filterQueryString = router.query.filter;

  let query: string[] | null = null;
  if (isString(filterQueryString) && filterQueryString.length > 0) {
    query = filterQueryString.split(',');
  }

  function mutateQuery(query: string | string[]): void {
    if (isString(query)) {
      router.push({ query: { filter: query } });
    } else {
      router.push({ query: { filter: query.join(',') } });
    }
  }

  const memoQuery = useMemo(() => query, [filterQueryString]);

  return { mutateQuery, query: memoQuery };
}
