'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, Code2, Database, Smartphone, Globe, Zap } from 'lucide-react'
import Image from 'next/image'

interface ExperienceItem {
  title: string
  company: string
  location?: string
  period: string
  description: string[]
  technologies: string[]
  image: string
  icon: React.ElementType
}

const experiences: ExperienceItem[] = [
  {
    title: 'Software Engineer',
    company: 'Sportsuite',
    period: 'September 2025 – November 2025',
    description: [
      'Implemented Node.js and Apollo GraphQL backend with MongoDB to power a React Native sports app',
      'Integrated geo-aware queries that calculate distances and surface the nearest sports events based on user location',
      'Integrated Stripe for secure in-app payments and Google Places API to enrich stadium data',
    ],
    technologies: ['Node.js', 'Apollo GraphQL', 'MongoDB', 'React Native', 'Stripe', 'Google Places API'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    icon: Smartphone,
  },
  {
    title: 'Lead Software Engineer',
    company: 'Energi Core LTD.',
    period: 'April 2024 – July 2025',
    description: [
      'Optimized Go Lang and Typescript six-microservice backend queries, reducing API response times by 30%',
      'Administered AWS-based infrastructure, optimized Postgres tables through indexing and partitioning',
      'Engineered NFT Trading Marketplace frontend (React) for 100–200 daily users with Trading View real-time charts',
      'Enhanced performance by introducing Virtuoso Grid and react-viewport, achieving 30% reduction in UI load times',
    ],
    technologies: ['Go', 'TypeScript', 'React', 'Node.Js', 'PostgreSQL', 'Sequelize', 'AWS', 'Docker', 'Kubernetes', 'Trading View API', 'Alchemy API'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    icon: Database,
  },
  {
    title: 'Software Engineer',
    company: 'Benel.Co',
    period: 'January 2024 – April 2024',
    description: [
      'Led design and implementation of Redux Sagas and Redux Forms for real estate contract application',
      'Implemented Google Firebase for robust data storage solutions',
      'Developed dynamic responsive UI using JavaScript, React, SCSS and Bootstrap',
      'Engineered comprehensive payment processing system with Stripe API',
    ],
    technologies: ['React', 'Redux', 'Firebase', 'JavaScript', 'SCSS', 'Bootstrap', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    icon: Globe,
  },
  {
    title: 'Full Stack Developer',
    company: 'Productivity Pilot',
    period: 'January 2024',
    description: [
      'Spearheaded development of Task List web application using React, GraphQL, and Prisma',
      'Designed robust backend with Express.Js and Node.Js',
      'Enhanced security by implementing JWT authentication on Apollo and Express server',
      'Integrated Apollo Client in frontend for efficient end-to-end data communication',
    ],
    technologies: ['React', 'GraphQL', 'Prisma', 'Express.js', 'Node.js', 'JWT', 'Apollo'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    icon: Code2,
  },
  {
    title: 'Full Stack Developer',
    company: 'Concern Ticket',
    period: 'November 2023 – December 2023',
    description: [
      'Led creation of Concern Ticket web application using NextJs and TypeScript',
      'Crafted responsive user-friendly interface with Radix components',
      'Managed backend through Prisma with MySQL database',
      'Implemented user authentication via NextAuth with Google Cloud',
      'Deployed project on Vercel and integrated Sentry for real-time error monitoring',
    ],
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'MySQL', 'NextAuth', 'Vercel', 'Sentry'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    icon: Zap,
  },
  {
    title: 'Front-End Developer',
    company: 'All About the Philippines',
    period: 'August 2023',
    description: [
      'Collaborated on enhancing website, introducing new pages for cities and provinces',
      'Used HTML, CSS, JavaScript, and Bootstrap to showcase cultural diversity',
      'Improved visual engagement by redesigning image carousel with smooth transitions',
      'Focused on responsive design to accommodate various image sizes',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    icon: Globe,
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Building innovative solutions and driving technical excellence across
            diverse projects
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center group">
                {/* Image */}
                <div
                  className={`relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl ${
                    index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <exp.icon className="w-6 h-6 text-white" />
                      <h3 className="text-2xl font-bold text-white">
                        {exp.company}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`space-y-4 ${
                    index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg shadow-lg">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-blue-600 mt-1.5">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Technologies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

