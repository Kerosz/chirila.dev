// packages
import cn from 'classnames';
// components
import { Button, Container, Typography } from '~ui/index';

export interface INewsletter {
  background?: 'dark' | 'light';
}

export default function Newsletter({ background = 'dark' }: INewsletter) {
  const rootClass = cn('relative z-10 py-16', {
    'bg-black-tone text-gray-100': background === 'dark',
    'bg-gray-100 text-gray-900': background === 'light',
  });

  return (
    <section className={rootClass}>
      <Container className='flex flex-col items-center'>
        <Typography
          as='h2'
          className='text-[2.35rem] font-bold pb-4 text-center'
          resetStyles>
          Make the space bigger
        </Typography>

        <Typography
          className='text-center max-w-xl text-gray-400 pb-3'
          resetStyles>
          Get updates on what I do web development related. Early access to
          articles, easy-to-follow guides & tutorials, challenges, along with
          some other resources I&apos;m reading and other stuff I think
          you&apos;d enjoy...
        </Typography>

        <form className='w-full flex flex-col items-center max-w-xl mt-6'>
          <div className='w-full pb-8'>
            <label
              htmlFor='newsletter'
              className='block text-sm font-serif uppercase font-bold pb-1'>
              Email address
            </label>
            <input
              type='text'
              name='newsletter'
              id='newsletter'
              placeholder='jane@google.com'
              disabled
              className='mt-1 focus:ring-gray-300 focus:border-gray-300 block w-full border-gray-600 rounded-sm bg-transparent py-2.5 placeholder-gray-400 font-serif'
            />
          </div>

          <Button type='submit' label='Coming Soon' disabled />
        </form>
      </Container>
    </section>
  );
}
