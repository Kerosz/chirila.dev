// packages
import { useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// components
import Project from './project';
// utils
import useSafeLayoutEffect from '../../hooks/use-safe-layout-effect';
import projectData from '../../../data/projects';

function Work(): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useSafeLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let projectSections = gsap.utils.toArray('.project');

    gsap.to(projectSections, {
      xPercent: -100 * (projectSections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '#container',
        pin: true,
        scrub: 0.2,
        snap: 1 / (projectSections.length - 1),
        end: () => '+=' + containerRef.current!.offsetWidth,
      },
    });
  });

  return (
    <div
      id='container'
      ref={containerRef}
      className='flex-nowrap flex w-[600%] h-full'>
      {projectData.map((project, index) => (
        <Project
          key={project.title + '__' + index}
          number={index + 1}
          {...project}
        />
      ))}
    </div>
  );
}

export default Work;
