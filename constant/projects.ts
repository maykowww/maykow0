export type ProjectType = {
  url: string;
  project_name: string;
  project_image: string;
  description: string;
}

export const projects: ProjectType[] = [
  {
    url: 'https://play.google.com/store/apps/details?id=com.boatlux.app',
    project_image: '/boatlux.jpg',
    project_name: 'Boatlux',
    description: 'It is a shared ownership system that provides a very advantageous cost-benefit ratio for buyers. In this project I worked with development team as a flutter developer in the integration with the graphql rest api and development of the app\'s UI.',
  },
  {
    url: 'https://play.google.com/store/apps/details?id=com.liberchannel.oexercito&hl=pt_BR',
    project_image: '/oexercito.jpg',
    project_name: 'O Exercito',
    description: '"O Exército" is a community, through an app, for training information agents who do not want to depend on traditional media and biased content from schools and universities to understand the world. In this project I worked with development team as a flutter developer in the integration with the graphq, firebase, rest api and development of the app\'s UI.',
  },
  {
    url: 'https://www.cursology.com.br/',
    project_name: 'Cursology (Web)',
    project_image: '/cursology.jpg',
    description: 'Cursology is a complete platform for hosting, selling and managing online courses. Created to offer practical and efficient solutions for both instructors and students. In this project I worked with development team as a frontend developer in the integration with the graphql, rest api and development of the website components.',
  },
  {
    url: 'https://play.google.com/store/apps/details?id=com.puzzl.cursologyapp&hl=pt_BR',
    project_name: 'Cursology (App)',
    project_image: '/cursology.jpg',
    description: 'The Cursology app is the ideal tool for students looking to learn in a practical and intuitive way, wherever and whenever they want. With it, you have access to the courses you have purchased directly on your smartphone or tablet, allowing you to follow classes and study materials in a simple way. In this project I worked with development team as a flutter developer in the integration with the graphql',
  },
  {
    url: 'https://rapidapi.com',
    project_name: 'Rapid API',
    project_image: '/rapidapi.jpg',
    description: 'RapidAPI is an API hub, a platform that brings together multiple APIs in one place. It allows developers to access and use different APIs in a simplified, centralized, and standardized way. I worked with development team as a frontend developer in the development of website .',
  },
  {
    url: 'https://unhideschool.com/',
    project_name: 'Unhide School',
    project_image: '/unhideschool.jpg',
    description: 'Unhide School is an online platform that connects students with talented teachers. It allows students to find their perfect teachers and teachers, and teachers to find their perfect students. I worked with development team as a frontend developer in the development of website and web application.',
  }
]