// packages
import Image from 'next/image';
// components
import ArrowNarrowRight from '../../assets/icons/arrow-narrow-right';
import { Container, Typography, Badge, Link } from '../ui';
// types
import type { IProjectData } from '../../../data/projects';

export interface IProject extends IProjectData {
  number: number;
}

function Project({
  title,
  scope,
  tags,
  summary,
  srcName,
  number,
}: IProject): JSX.Element {
  return (
    <div className='project h-screen w-screen py-16'>
      <Container className='flex w-full xl:flex-row flex-col items-center h-full'>
        <div className='xl:w-5/12 pr-10 xl:mb-0 mb-8'>
          <Typography
            as='h3'
            className='text-lg font-medium uppercase pb-8'
            resetStyles>
            Project – 00{number}
          </Typography>
          <Typography as='h2' className='text-6xl font-bold pb-4' resetStyles>
            {title}
          </Typography>
          <Typography className='text-lg pb-3.5' resetStyles>
            {scope}
          </Typography>
          <div className='pb-10 flex flex-wrap'>
            {tags.map((tag) => (
              <Badge key={tag} text={tag} className='mr-3 mb-3' />
            ))}
          </div>
          <Typography className='text-lg pb-4' resetStyles>
            {summary}
          </Typography>

          <Link href='/' className='flex uppercase text-gray-400 font-bold'>
            Explore project <ArrowNarrowRight className='w-8 pl-2' />
          </Link>
        </div>

        <div className='xl:w-7/12'>
          <Image src={require(`../../assets/images/${srcName}`)} alt={title} />
        </div>
      </Container>
    </div>
  );
}

export default Project;
