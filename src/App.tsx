import React, { useState } from 'react';
import { BookOpen, Code2, Database, GitBranch, Laptop2, Rocket, Server, Trophy,MapPinned, Users } from 'lucide-react';

// Define the syllabus data structure
const syllabusData = {
  'Data Structures & Algorithms': {
    title: 'Data Structures & Algorithms',
    description: 'Master the fundamental building blocks of programming',
    topics: [
      'Arrays and Dynamic Arrays',
      'Linked Lists (Singly & Doubly)',
      'Stacks and Queues',
      'Trees (Binary, BST, AVL)',
      'Graphs and Graph Algorithms',
      'Sorting Algorithms',
      'Searching Algorithms',
      'Dynamic Programming',
      'Greedy Algorithms',
      'Advanced Data Structures'
    ]
  },
  'Full Stack Development': {
    title: 'Full Stack Development',
    description: 'Build modern web applications from front to back',
    topics: [
      'HTML5, CSS3, JavaScript',
      'React.js & TypeScript',
      'Node.js & Express.js',
      'RESTful API Design',
      'Database Design (SQL & NoSQL)',
      'Authentication & Authorization',
      'State Management',
      'Testing & Debugging',
      'Performance Optimization',
      'Deployment & DevOps'
    ]
  },
  'Data Science': {
    title: 'Data Science',
    description: 'Transform data into actionable insights',
    topics: [
      'Python for Data Science',
      'Data Cleaning & Preprocessing',
      'Statistical Analysis',
      'Machine Learning Basics',
      'Supervised Learning',
      'Unsupervised Learning',
      'Deep Learning Fundamentals',
      'Data Visualization',
      'Big Data Processing',
      'Model Deployment'
    ]
  },
  'DevOps': {
    title: 'DevOps',
    description: 'Streamline development and operations',
    topics: [
      'Linux Administration',
      'Git & Version Control',
      'Docker Containers',
      'Kubernetes Orchestration',
      'CI/CD Pipelines',
      'Cloud Services (AWS)',
      'Infrastructure as Code',
      'Monitoring & Logging',
      'Security Best Practices',
      'Scalability & Performance'
    ]
  },
  'Core Concepts': {
    title: 'Core Concepts',
    description: 'Build a strong foundation in computer science',
    topics: [
      'Operating Systems',
      'Computer Networks',
      'Database Management',
      'System Design',
      'Design Patterns',
      'Computer Architecture',
      'Memory Management',
      'Concurrency & Parallelism',
      'Security Fundamentals',
      'Software Engineering Principles'
    ]
  },
  'Interview Preparation': {
    title: 'Interview Preparation',
    description: 'Get ready for your dream job',
    topics: [
      'Data Structure Problems',
      'Algorithm Challenges',
      'System Design Interviews',
      'Behavioral Questions',
      'Mock Interviews',
      'Resume Building',
      'Soft Skills Development',
      'Negotiation Skills',
      'Company Research',
      'Interview Strategies'
    ]
  }
};

function App() {
  const [selectedSubject, setSelectedSubject] = useState('Data Structures & Algorithms');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Laptop2 className="h-8 w-8" />
            <span className="text-2xl font-bold">Jain Computers</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-primary-100 transition-colors">About</a>
            <a href="#curriculum" className="hover:text-primary-100 transition-colors">Curriculum</a>
            <a href="#projects" className="hover:text-primary-100 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary-100 transition-colors">Contact</a>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-24">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Transform Your Career <br />in Technology</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-primary-100">Join our comprehensive Software Development Bootcamp and master the skills that matter.</p>
          <button className="btn-secondary">
            Start Your Journey
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* About Section */}
        <section id="about" className="py-24 container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary-900">Why Choose Aarambh?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-primary-50 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-100 transition-colors duration-300">
                <Trophy className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-900">Industry-Ready Skills</h3>
              <p className="text-gray-600">Comprehensive curriculum designed by industry experts</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary-50 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-100 transition-colors duration-300">
                <Rocket className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-900">Hands-on Learning</h3>
              <p className="text-gray-600">Learn by building real-world projects</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary-50 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-100 transition-colors duration-300">
                <BookOpen className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-900">Expert Mentorship</h3>
              <p className="text-gray-600">Get guidance from experienced developers</p>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" className="py-24 bg-gradient-to-b from-primary-50 to-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary-900">Comprehensive Curriculum</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-primary-100">
              <div className="flex flex-col md:flex-row">
                {/* Sidebar */}
                <div className="md:w-1/3 bg-primary-50">
                  {Object.keys(syllabusData).map((subject) => (
                    <button
                      key={subject}
                      onClick={() => setSelectedSubject(subject)}
                      className={`w-full text-left px-6 py-4 hover:bg-primary-100 transition-colors duration-200 ${
                        selectedSubject === subject
                          ? 'bg-primary-100 border-l-4 border-primary-600 text-primary-900'
                          : 'text-primary-700'
                      }`}
                    >
                      <span className="font-medium">{subject}</span>
                    </button>
                  ))}
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary-900">
                    {syllabusData[selectedSubject].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {syllabusData[selectedSubject].description}
                  </p>
                  <div className="space-y-4">
                    {syllabusData[selectedSubject].topics.map((topic, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        <span className="text-primary-900">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-24 bg-gradient-to-b from-primary-900 to-primary-800 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Your Learning Roadmap</h2>
            <div className="relative">
              {/* Main Path */}
              <div className="absolute w-1 bg-primary-300 h-full left-1/2 transform -translate-x-1/2"></div>
              
              {/* Roadmap Items */}
              <div className="space-y-24">
                {/* C++ Fundamentals */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-secondary-500 rounded-2xl p-4 shadow-lg">
                      <Code2 className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="bg-primary-800/50 backdrop-blur-sm rounded-2xl p-6 max-w-lg mx-auto border border-primary-700">
                    <h3 className="text-xl font-bold mb-3 text-secondary-300">C++ Programming</h3>
                    <ul className="space-y-2 text-primary-100">
                      <li>• Fundamentals of Programming</li>
                      <li>• Data Structures & Algorithms</li>
                      <li>• Problem Solving Techniques</li>
                    </ul>
                  </div>
                </div>

                {/* Web Development */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-secondary-600 rounded-2xl p-4 shadow-lg">
                      <Laptop2 className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="bg-primary-800/50 backdrop-blur-sm rounded-2xl p-6 max-w-lg mx-auto border border-primary-700">
                    <h3 className="text-xl font-bold mb-3 text-secondary-300">Full Stack Development</h3>
                    <ul className="space-y-2 text-primary-100">
                      <li>• Frontend (HTML, CSS, JavaScript)</li>
                      <li>• Backend Development</li>
                      <li>• Database Management</li>
                    </ul>
                  </div>
                </div>

                {/* Advanced Topics */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-secondary-700 rounded-2xl p-4 shadow-lg">
                      <Server className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="bg-primary-800/50 backdrop-blur-sm rounded-2xl p-6 max-w-lg mx-auto border border-primary-700">
                    <h3 className="text-xl font-bold mb-3 text-secondary-300">Advanced Topics</h3>
                    <ul className="space-y-2 text-primary-100">
                      <li>• System Design</li>
                      <li>• DevOps & Cloud</li>
                      <li>• Software Architecture</li>
                    </ul>
                  </div>
                </div>

                {/* Career Preparation */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-secondary-800 rounded-2xl p-4 shadow-lg">
                      <Trophy className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="bg-primary-800/50 backdrop-blur-sm rounded-2xl p-6 max-w-lg mx-auto border border-primary-700">
                    <h3 className="text-xl font-bold mb-3 text-secondary-300">Career Launch</h3>
                    <ul className="space-y-2 text-primary-100">
                      <li>• Interview Preparation</li>
                      <li>• Portfolio Development</li>
                      <li>• Industry Projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary-900">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-primary-100 group hover:border-primary-300 transition-colors">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800" 
                  alt="Coding Project" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary-900">E-Commerce Platform</h3>
                  <p className="text-gray-600">Build a full-featured online store with React, Node.js, and MongoDB</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-primary-100 group hover:border-primary-300 transition-colors">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800" 
                  alt="Machine Learning Project" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary-900">ML-Powered Analytics</h3>
                  <p className="text-gray-600">Develop a machine learning system for business analytics</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="price-comparison" className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">Save More with Jain Computers Classes!</h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      {/* Jain Computers */}
      <div className="bg-gray-700 p-6 rounded-2xl shadow-lg text-center">
        <h3 className="text-5xl font-extrabold text-pink-500 ">Jain Computers</h3>
        <div className="mt-4 text-4xl font-bold">
          ₹40,000 <span className="text-2xl text-gray-400 line-through">₹1,20,000</span>
        </div>
        <div className="text-2xl font-semibold mt-2 bg-pink-600 text-white px-4 py-1 rounded-md inline-block">
          67% OFF
        </div>
        <div className="text-2xl font-semibold mt-2 bg-pink-600 text-white px-4 py-1 rounded-md inline-block">
        Limited Time Offer
        </div>
      </div>

      {/* Others */}
      <div className="bg-gray-700 p-6 rounded-2xl shadow-lg text-center">
        <h3 className="text-5xl font-extrabold text-emerald-500">Others</h3>
        <div className="mt-4 text-4xl font-bold">₹1,20,000</div>
        <div className="text-2xl font-semibold mt-2 bg-emerald-600 text-white px-4 py-1 rounded-md inline-block">
          0% OFF
        </div>
      </div>
    </div>
  </div>
</section>



      </main>

      {/* Footer */}
      <footer id="contact" className="bg-primary-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Brand Name and Address */}
            <div className="flex flex-col items-center mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <Laptop2 className="h-6 w-6" />
                <span className="text-xl font-bold">Jain Computers</span>
              </div>
              <div className="flex items-center ">
              <MapPinned className="h-4 w-4"/>
                <span className="text-sm text-primary-200 mt-2">Jain Computers, E-115 Yadav Nagar, Samaypur Badli, Delhi-110042</span>
              </div>
              <div className="flex items-center">
               
                <MapPinned className="h-4 w-4"/>
                <span className="text-sm text-primary-200 mt-2">Genius Coaching Centre, Near Adarsh Nagar Metro Station, Delhi</span>
              </div>
              {/* Contact Number */}
             
            </div>
            
            {/* Copyright */}
            <div className="text-primary-200 text-sm">
              <br/>
              <br/>
              <br/>
              <br/>
              <br/> 
              © 2024 Jain Computers. All rights reserved. 
            </div>
            <div className="font-bold text-xl">
                <p>Contact:9910281163,7503776600</p>
              </div>
            
            
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;



