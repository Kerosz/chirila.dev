// packages
import { Component, ErrorInfo, ReactNode } from 'react';
// components
import Link from '~components/common/link';
import Layout from '~/components/layouts/base';
import FadeIntoView from '~animations/fade-into-view';
import { Container, Typography } from '~ui/index';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(_: Error, errorInfo: ErrorInfo) {
    if (process.env.NODE_ENV === 'production') {
      return;
    }

    console.error(errorInfo);
    
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Layout title='Error | Andrei Chirila'>
          <Container maxW='max-w-screen-lg' className='min-h-screen'>
            <FadeIntoView className='flex flex-col h-full justify-center items-center py-20'>
              <Typography
                as='h1'
                className='font-black text-8xl text-center fill-color pb-14'
                resetStyles>
                OPS
              </Typography>

              <Typography
                className='font-medium text-2xl text-center pb-12'
                resetStyles>
                Something really bad happened. Don&apos;t worry it&apos;s not
                your fault!
              </Typography>
              <Link
                href='/'
                className='w-32 h-32 rounded-full bg-black text-gray-50 flex items-center justify-center hover:bg-red-800 hover:text-black hover:-rotate-12 transition-all duration-200 font-medium'>
                Return Home
              </Link>
            </FadeIntoView>
          </Container>
        </Layout>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
