// components
import Logo from '../assets/icons/logo';
import { Container, Link } from './ui';
// types
import type { JSXElementConstructor, ReactNode, ReactElement } from 'react';

export interface IHeader {
  preHeader?: JSXElementConstructor<any> | ReactElement;
  children?: ReactNode;
}

function Header({ preHeader }: IHeader): JSX.Element {
  return (
    <>
      {preHeader && preHeader}
      <Container
        as='header'
        className='h-20 flex justify-between items-center border-b border-gray-900'>
        <Link href='/' className='flex items-center'>
          <Logo className='w-10' />
        </Link>

        <nav>
          <ul className='flex space-x-10 font-medium'>
            <li>
              <Link href='/about' className='py-4 hover:text-gray-600'>
                About
              </Link>
            </li>

            <li>
              <Link href='/blog' className='py-4 hover:text-gray-600'>
                Blog
              </Link>
            </li>

            <li>
              <Link href='/contact' className='py-4 hover:text-gray-600'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </>
  );
}

export default Header;
