// components
import { Typography } from '~ui/index';

export interface IProjectOverview {
  timeline: string;
  services: string[];
  stack: string[];
  role: string;
}

export default function ProjectOverview({
  services,
  stack,
  role,
}: IProjectOverview) {
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-8 py-2'>
      <div>
        <Typography
          className='font-medium text-2xl py-2'
          style={{ margin: 0 }}
          resetStyles>
          Role
        </Typography>
        <span className='text-lg'>{role}</span>
      </div>

      <div>
        <Typography
          className='font-medium text-2xl py-2'
          style={{ margin: 0 }}
          resetStyles>
          Services
        </Typography>
        <div className='flex flex-col'>
          {services.map((service, idx) => (
            <span key={`${services}__${idx}`} className='text-lg'>
              {service}
            </span>
          ))}
        </div>
      </div>

      <div>
        <Typography
          className='font-medium text-2xl py-2'
          style={{ margin: 0 }}
          resetStyles>
          Core Tech
        </Typography>
        <div className='flex flex-col'>
          {stack.map((tech, idx) => (
            <span key={`${tech}__${idx}`} className='text-lg'>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
