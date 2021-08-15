// packages
import Image from 'next/image';
import { useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// components
import Link from '~components/common/link';
import ArrowNarrowRight from '~icons/arrow-narrow-right';
import useSafeLayoutEffect from '~hooks/use-safe-layout-effect';
import { Typography, Badge } from '~ui/index';
// types
import type { IProjectData } from '~data/home/projects';
import { SBTrack } from '~/lib/splitbee';

export interface IProject extends IProjectData {
  index: number;
}

export default function Project({
  title,
  scope,
  link,
  tags,
  summary,
  srcName,
  index,
}: IProject): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);
  const summaryRef = useRef<HTMLDivElement | null>(null);
  const imgContainer = useRef<HTMLDivElement | null>(null);
  const exploreRef = useRef<HTMLAnchorElement | null>(null);

  useSafeLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();
    const scrollTrigger = {
      trigger: containerRef.current,
      start: '-38% center',
      end: '+=210px',
      scrub: 2,
    };

    tl.from(imgContainer.current, {
      scale: 1.24,
      x: -270,
      duration: 1.65,
      ease: 'power4.out',
      scrollTrigger,
    });
    tl.from(topRef.current, {
      y: 110,
      x: -450,
      rotateZ: 55,
      opacity: 0,
      duration: 1.9,
      ease: 'power4.inOut',
      scrollTrigger,
    });
    tl.from(summaryRef.current, {
      opacity: 0,
      duration: 3,
      ease: 'power4.inOut',
      scrollTrigger: { ...scrollTrigger, start: '-22% center' },
    });
    tl.from(exploreRef.current, {
      x: -450,
      opacity: 0,
      duration: 1.3,
      ease: 'back.inOut',
      scrollTrigger: { ...scrollTrigger, start: '-25% center' },
    });
  }, []);

  return (
    <div
      className='py-20 flex w-full xl:flex-row flex-col text-black-tone items-center h-full'
      ref={containerRef}>
      <div className='xl:w-5/12 pr-10 xl:mb-0 mb-8'>
        <div ref={topRef}>
          <Typography
            as='h4'
            className='text-lg font-medium uppercase pb-8'
            resetStyles>
            Project – 00{index}
          </Typography>

          <Typography as='h3' className='text-6xl font-bold pb-4' resetStyles>
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
        </div>

        <Typography
          ref={summaryRef}
          className='text-lg pb-10 font-serif'
          resetStyles>
          {summary}
        </Typography>

        <Link
          href={link}
          className='flex uppercase text-gray-500 hover:text-red-800 text-lg font-medium max-w-max link-animation group'
          ref={exploreRef}
          sbTrack={SBTrack[title as keyof typeof SBTrack]}>
          <Typography className='pr-2'>Explore project</Typography>
          <ArrowNarrowRight
            className='w-9 -mt-1.5 group-hover:transform-gpu group-hover:translate-x-3 transition-all duration-150'
            strokeWidth={1}
          />
        </Link>
      </div>

      <div className='xl:w-7/12' ref={imgContainer}>
        <Link href={link} sbTrack={SBTrack[title as keyof typeof SBTrack]}>
          <Image
            src={require(`../../../assets/images/${srcName}`)}
            alt={title}
            priority
            placeholder='blur'
          />
        </Link>
      </div>
    </div>
  );
}
