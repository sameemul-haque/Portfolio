import { Icon } from '@iconify/react';
import { Layout } from '~/layouts';
import { Animate } from '~/components';

import type { GetStaticProps } from 'next';

import type { Skills, SkillsEvent } from '~/types';

interface SkillsProps {
  skills?: Skills;
}

export const getStaticProps: GetStaticProps<SkillsProps> = async () => {
  const { default: rawSkills } = await import('~/data/skills.json');
  const skills = (rawSkills as Array<SkillsEvent>).sort();

  return {
    props: {
      skills,
    },
  };
};

export default function SkillsPage({ skills: rawSkills }: SkillsProps): JSX.Element {
  const skills = rawSkills.map((event) => ({
    ...event,
  }));

  return (
    <Layout.Default seo={{ title: 'Skills' }}>
      <div className="flex flex-grow min-h-screen pt-16 pb-12">
        <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {skills.map((event, index) => (
          <Animate
								animation={{ y: [50, 0], opacity: [0, 1] }}
								key={index}
								transition={{
									delay: 0.1 * index,
								}}>
            <div key={index} className="relative pb-2">
              <a
                href={event.link?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center space-x-3 bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm px-2 py-3 border-2 border-gray-400 dark:border-gray-600 rounded-lg"
              >
                <Icon icon={event.icon} className="w-6 h-6 text-gray-500 dark:text-white" />
                <span className="text-gray-500 dark:text-white text-lg tracking-tight font-bold">
                  {event.title}
                </span>
              </a>
            </div></Animate>
          ))}
        </div>
      </div>
    </Layout.Default>
  );
}
