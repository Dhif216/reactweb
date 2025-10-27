import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './SkillsProgress.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Skill {
  name: string;
  level: number;
  category: string;
}

const SKILLS_DATA: Skill[] = [
  { name: 'UX Strategy', level: 95, category: 'Design' },
  { name: 'Figma & Prototyping', level: 90, category: 'Design' },
  { name: 'User Research', level: 85, category: 'Research' },
  { name: 'React & TypeScript', level: 88, category: 'Development' },
  { name: 'UI Animation', level: 92, category: 'Design' },
  { name: 'Design Systems', level: 87, category: 'Design' },
];

const SkillsProgress: React.FC = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.skill-card');
    const circles = gsap.utils.toArray<HTMLElement>('.skill-circle-progress');
    const counts = gsap.utils.toArray<HTMLElement>('.skill-percentage');

    cards.forEach((card, index) => {
      const level = SKILLS_DATA[index].level;
      const circumference = 2 * Math.PI * 45;
      const offset = circumference - (level / 100) * circumference;

      gsap.fromTo(card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none none',
            once: true,
          }
        }
      );

      gsap.fromTo(circles[index],
        { strokeDashoffset: circumference },
        {
          strokeDashoffset: offset,
          duration: 1.5,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none none',
            once: true,
          }
        }
      );

      const targetCount = { val: 0 };
      gsap.to(targetCount, {
        val: level,
        duration: 1.5,
        delay: index * 0.1,
        ease: 'power2.out',
        onUpdate: () => {
          if (counts[index]) {
            counts[index].textContent = Math.ceil(targetCount.val).toString();
          }
        },
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none none',
          once: true,
        }
      });
    });
  }, { scope: containerRef, dependencies: [] });

  const circumference = 2 * Math.PI * 45;

  return (
    <div ref={containerRef} className="skills-progress-wrapper">
      <div className="skills-grid">
        {SKILLS_DATA.map((skill) => (
          <div key={skill.name} className="skill-card">
            <div className="skill-circle-container">
              <svg className="skill-circle" width="120" height="120">
                <circle
                  className="skill-circle-bg"
                  cx="60"
                  cy="60"
                  r="45"
                  fill="none"
                  stroke="rgba(100, 181, 246, 0.1)"
                  strokeWidth="8"
                />
                <circle
                  className="skill-circle-progress"
                  cx="60"
                  cy="60"
                  r="45"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  transform="rotate(-90 60 60)"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#64b5f6" />
                    <stop offset="100%" stopColor="#42a5f5" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="skill-percentage-container">
                <span className="skill-percentage">0</span>
                <span className="skill-percentage-symbol">%</span>
              </div>
            </div>
            <div className="skill-info">
              <h3 className="skill-name">{skill.name}</h3>
              <span className="skill-category">{skill.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsProgress;