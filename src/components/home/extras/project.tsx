// components
import Link from '~components/common/link';
import ArrowNarrowRight from '~icons/arrow-narrow-right';
import { Typography } from '~ui/index';
import { useStore } from '~/store';
// types
import type { Dispatch, SetStateAction } from 'react';
import type { IProjectData } from '~data/home/projects';
import { SBTrack } from '~/lib/splitbee';

export interface IProject extends IProjectData {
  index: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

function Project({
  title,
  link,
  tags,
  summary,
  trackLabel,
  index,
  setActiveIndex,
}: IProject): JSX.Element {
  const { setCursor } = useStore();

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
      onMouseLeave={handleMouseLeave}
      sbTrack={SBTrack[trackLabel as keyof typeof SBTrack]}>
      <header className='flex justify-between mb-1 pt-10'>
        <Typography
          className='xs:text-4xl text-3xl font-seri text-white'
          resetStyles>
          {title}
        </Typography>
        <ArrowNarrowRight
          className='w-9 -mt-1.5 group-hover:-rotate-45 group-hover:scale-110 text-white transition-all duration-300 ease-in-out'
          strokeWidth={1}
        />
      </header>
      <div className='pb-10'>
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
