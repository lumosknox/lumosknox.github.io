
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Progress } from "@/components/ui/progress"

const skillsData = [
  { name: 'JavaScript', value: 80 },
  { name: 'React', value: 90 },
  { name: 'Node.js', value: 75 },
  { name: 'Tailwind CSS', value: 85 },
  { name: 'Next.js', value: 80 },
  { name: 'TypeScript', value: 70 },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    console.log("Is About section in view?", inView);
  }, [inView]);

  const fadeInAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
  };

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeInAnimation}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-3xl font-bold mb-6 text-center text-gradient"
        >
          About Me
        </motion.h2>
        <motion.div
          variants={fadeInAnimation}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="lg:flex lg:items-center lg:justify-center lg:space-x-16"
        >
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-lg text-muted-foreground mb-4">
              I am a passionate and creative software developer with a strong
              background in building modern web applications. With expertise in
              front-end and back-end technologies, I strive to deliver
              high-quality solutions that meet user needs and business goals.
            </p>
            <p className="text-lg text-muted-foreground">
              My skills include JavaScript, React, Node.js, and more. I am
              always eager to learn new technologies and stay up-to-date with
              the latest industry trends.
            </p>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-center">My Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillsData.map((skill, index) => (
                <div key={index} className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className="h-2 w-full" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
