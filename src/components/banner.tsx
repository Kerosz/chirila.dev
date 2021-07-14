import ArrowRight from '../assets/icons/arrow-right';
import { Link, Typography } from './ui';
import Container from './ui/container';

export interface IBanner {
  link: string;
  text: string;
  cta: string;
}

function Banner({ link = '#', text, cta }: IBanner): JSX.Element {
  return (
    <div className='bg-red-800 h-12 hover:bg-red-900'>
      <Link href={link}>
        <Container className='flex h-full justify-center items-center text-white font-medium'>
          <Typography>{text}.&nbsp;</Typography>
          <Typography className='underline'>{cta}</Typography>
          &nbsp;
          <ArrowRight className='w-5' />
        </Container>
      </Link>
    </div>
  );
}

export default Banner;
