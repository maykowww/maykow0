export type ExperienceType = {
  company_name: string;
  company_icon: string;
  company_location: string;
  role: string;
  date_start: string;
  date_end: string;
  description: string;
  technologies: string[];
}

export const experiences: ExperienceType[] = [
  {
    company_name: 'Madpine Studios',
    company_icon: '/madpine.jpg',
    company_location: 'Brazil, Caxias, Maranhão - Remote',
    date_start: 'Jan 2022',
    date_end: 'Present',
    description: 'Full-stack developer skilled in designing and maintaining scalable software solutions. I build applications using React.js, Flutter, and Node.js/Golang. I leverage DevOps practices, including Docker, for automation and CI, ensuring efficient, high-quality deliveries. I collaborate closely with product and design teams to transform business needs into impactful, innovative solutions while optimizing processes.',
    role: 'Software Developer',
    technologies: [
      'Next.js',
      'Node.js',
      'Flutter',
      'Golang',
      'Firebase',
      'PostgresSQL',
      'Mysql',
      'MongoDB',
      'Redux',
      'Docker',
      'AWS',
      'Git',
    ]
  },
  {
    company_name: 'Puzzl Software House',
    company_icon: '/puzzl.jpg',
    company_location: 'Brazil, Rio de Janeiro - Remote',
    date_start: 'Mar 2021',
    date_end: 'Nov 2021',
    description: 'Designing and upkeeping resources through technologies such as React, Angular, GraphQL, Stencil.js, Redux, Valtio, and Sass. In my daily routine, I consistently utilized the Git tool with established workflows (Git Flow), scrutinized pull requests, collaborated with GraphQL and REST APIs, conducted both unit and integration tests, and contributed to the development of components and documentation in Storybook.  ',
    role: 'Frontend Developer',   
    technologies: [
      'React',
      'Node.js',
      'Stencil.js',
      'Next.js',
      'Angular',
      'Redux',
      'Sass',
      'Git',
      'GraphQL',
      'REST APIs',
    ]
  },
  {
    company_name: 'Puzzl Software House',
    company_icon: '/puzzl.jpg',
    company_location: 'Brazil, Rio de Janeiro - Remote',
    date_start: 'Nov 2021',
    date_end: 'Sep 2022',
    description: 'I contributed to impactful Flutter projects, leveraging Provider for state management and enabling real-time data connectivity with Firebase. I integrated RESTful APIs, GraphQL, and WebViews to enhance functionality and user experience. Additionally, I ensured application reliability through comprehensive testing strategies, including unit, integration, and end-to-end (E2E) tests, delivering robust and stable solution',
    role: 'Flutter Developer',
    technologies: [
      'Flutter',
      'Provider',
      'Firebase',
      'Dart',
      'Unit Testing',
      'Integration Testing',
      'E2E Testing',
      'Git',
      'GraphQL',
      'REST APIs',
    ]
  },
  {
    company_name: 'Metasense',
    company_icon: '/metasense.jpg',
    company_location: 'Braga, Portugal - Remote',
    date_start: 'Jun 2022',
    date_end: 'Aug 2022',
    description: 'I played a key role in a dynamic project, focusing on ReactJS development and creating seamless, visually engaging user interfaces with Framer Motion. I integrated Metamask for secure cryptocurrency transactions, ensuring smooth DeFi interactions. On the backend, I implemented robust server-side logic with Node.js to support frontend functionality. Additionally, I incorporated Three.js and GLSL for immersive 3D graphics, showcasing a multidisciplinary approach to delivering comprehensive and engaging user experiences.',
    role: 'Full Stack Developer',
    technologies: [
      'Three.js',
      'MetaMask',
      'Node.js',
      'React.js',
      'Web3',
      'OpenGL Shading Language (GLSL)',
      'Git',
    ]
  },
  {
    company_name: 'Firegecko',
    company_icon: '/firegecko.jpg',
    company_location: 'Road Town - Remote',
    date_start: 'Apr 2024',
    date_end: 'Sep 2024',
    description: 'As a frontend and infrastructure developer on the Space Mavericks project, I created a seamless experience by bridging UI and backend systems. I built an interactive interface with React.js, Next.js, and Three.js, focusing on responsive design and smooth animations. On the infrastructure side, I configured Azure with Docker, Docker Compose, and Caddy for secure, efficient deployment and automated SSL management. Additionally, I ensured smooth integration between the frontend and backend for reliable functionality.',
    role: 'Software Developer',
    technologies: [
      'React.js',
      'Next.js',
      'Node.js',
      'Three.js',
      'Azure',
      'Docker',
      'Docker Compose',
      'Caddy',
      'Git',
    ]
  },
]