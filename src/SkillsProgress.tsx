// In src/SkillsProgress.tsx

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './SkillsProgress.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Skill {
  name: string;
  level: number; // Percentage 0-100
}

const SKILLS_DATA: Skill[] = [
  { name: 'UX Strategy', level: 95 },
  { name: 'Figma & Prototyping', level: 90 },
  { name: 'User Research', level: 85 },
  { name: 'Front-end UI (React)', level: 80 },
];

const SkillsProgress: React.FC = () => {
  const containerRef = useRef(null);
  
  useGSAP(() => {
    
    const bars = gsap.utils.toArray<HTMLElement>('.skill-progress-bar');
    const counts = gsap.utils.toArray<HTMLElement>('.skill-count-number');
    
    bars.forEach((bar, index) => {
      const level = SKILLS_DATA[index].level;
      
      // Animate the bar width
      gsap.fromTo(bar, 
        { width: '0%' }, 
        { 
          width: `${level}%`,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 85%', // Trigger when bar enters the bottom 15% of the viewport
            toggleActions: 'play none none none',
            once: true,
          }
        }
      );

      // Animate the count-up number
      const targetCount = { val: 0 };
      gsap.to(targetCount, {
        val: level,
        duration: 1.5,
        ease: 'power2.out',
        onUpdate: () => {
          if (counts[index]) {
            counts[index].textContent = Math.ceil(targetCount.val).toString();
          }
        },
        scrollTrigger: {
            trigger: bar,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          }
      });
    });

  }, { scope: containerRef, dependencies: [] });

  return (
    <div ref={containerRef} className="skills-progress-wrapper">
      {SKILLS_DATA.map((skill) => (
        <div key={skill.name} className="skill-item">
          <div className="skill-header">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-count">
                <span className="skill-count-number">0</span>%
            </span>
          </div>
          <div className="skill-bar-track">
            <div 
              className="skill-progress-bar"
              style={{ width: '0%' }} 
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsProgress;