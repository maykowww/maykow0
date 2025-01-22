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
    description: 'Engaged in impactful Flutter development within the company, I played a pivotal role in the execution of various projects. Proficiently utilizing Flutter and Provider for state management, I orchestrated seamless real-time data connectivity through Firebase. My responsibilities extended to proficiently handling the consumption of both RESTful APIs and GraphQL, demonstrating versatility in data integration methodologies. Moreover, I contributed to the technical depth of projects through the adept integration of WebViews, enhancing the overall user experience. In addition, I actively participated in ensuring the robustness of the applications by implementing comprehensive testing strategies. This included the design and execution of unit tests, integration tests, and end-to-end (E2E) tests, guaranteeing the reliability and stability of the developed solutions.',
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
    date_start: 'Jul 2022',
    date_end: 'Aug 2022',
    description: 'In a previous role, I played a key part in a dynamic project where I focused on ReactJS development and sophisticated animations using Framer Motion. I specialized in creating visually engaging and seamless user interfaces, leveraging the power of ReactJS alongside Framer Motion animation capabilities. Additionally, my responsibilities extended to integrating Metamask functionality, enhancing the project"s capabilities for cryptocurrency transactions and interactions. This involved seamless communication between the ReactJS frontend and Metamask, ensuring a smooth and secure user experience within the decentralized finance (DeFi) ecosystem. On the backend side, I took charge of Node.js development, implementing robust server-side logic to support the frontend functionalities Furthermore, I delved into the world of 3D graphics by incorporating Three.js and GLSL for immersive and visually striking elements showcasing a multidisciplinary approach in bridging frontend and backend technologies for a comprehensive and engaging user experience.',
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
    description: 'As a frontend and infrastructure developer on the Space Mavericks project, I played a key role in creating a seamless experience by bridging the gap between the UI and backend systems. Frontend. I developed an interactive interface using React.js and Next.js, with immersive 3D components powered by Three.js. My work focused on delivering a dynamic, user-centric experience with smooth animations and responsive design. Infrastructure & Integration. I configured the infrastructure on Azure, employing Docker and Docker Compose for efficient development and deployment workflows Additionally, I used Caddy as a reverse proxy to automate SSL management and ensure secure and fast content delivery. I also facilitated the integration between the frontend and backend to ensure smooth communication and functionality.',
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
  {
    company_name: 'Madpine Studios',
    company_icon: '/madpine.jpg',
    company_location: 'Brazil, Caxias, Maranhão - Remote',
    date_start: 'Jan 2022',
    date_end: 'Present',
    description: 'Full-stack developer with expertise in end-to-end project execution, from design to implementation and maintenance of software solutions. In my role, I am responsible for developing robust and scalable applications across the stack, including frontend using React.js, mobile with Flutter, and backend with Node.js and Golang. I also manage automation and continuous integration processes through DevOps practices, ensuring efficient deliveries that meet high-quality standards. I work closely with product and design teams to transform business requirements into high-impact technological solutions, consistently striving for innovation and process optimization.',
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
  }
]