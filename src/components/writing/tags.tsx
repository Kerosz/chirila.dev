// components
import Link from '../common/link';

export interface ITags {
  data: string[];
  path: string;
}

export default function Tags({ data, path = 'writing' }: ITags) {
  return (
    <div className='mt-8 flex items-center flex-wrap'>
      <span className='font-medium text-gray-500 mr-3'>Tags:</span>
      {data.map((tag) => (
        <Link
          key={tag}
          href={`/${path}?filter=${tag}`}
          className='px-1.5 py-1 bg-light-gray hover:bg-gray-200 text-sm font-medium border border-gray-300 shadow-sm xs:mr-3 mr-2.5'>
          {tag}
        </Link>
      ))}
    </div>
  );
}
