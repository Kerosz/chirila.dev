// components
import ArrowNarrowRight from '../../assets/icons/arrow-narrow-right';
import { Typography, Badge, Link } from '../ui';
import { useCursor } from '../cursor/curosr-context';
// types
import type { Dispatch, SetStateAction } from 'react';
import type { IProjectData } from '../../../data/projects';

export interface IProject extends IProjectData {
  index: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

function Project({
  title,
  link,
  tags,
  summary,
  index,
  setActiveIndex,
}: IProject): JSX.Element {
  const { setCursor } = useCursor();

  const handleMouseEnter = () => {
    setCursor('none');
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setCursor('default');
    setActiveIndex(-1);
  };

  return (
    <Link
      href={link}
      key={title}
      external
      className='group'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <header className='flex justify-between mb-1 pt-10'>
        <Typography
          className='xs:text-4xl text-3xl font-seri text-white'
          resetStyles>
          {title}
        </Typography>
        <ArrowNarrowRight
          className='w-9 -mt-1.5 group-hover:-rotate-45 text-white transition-all duration-200'
          strokeWidth={1}
        />
      </header>
      <div className='pb-10 border-b border-gray-300'>
        {tags.map((tag, index) => (
          <span key={tag} className='text-sm pr-2 text-gray-400'>
            {index !== 0 && <span className='pr-2'>⦿</span>}
            {tag}
          </span>
        ))}

        <Typography className='mt-5 text-gray-300' resetStyles>
          {summary}
        </Typography>
      </div>
    </Link>
  );
}

export default Project;
