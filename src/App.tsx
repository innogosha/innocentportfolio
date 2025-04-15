import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import './styles.css';

function App() {
  const [lastModified, setLastModified] = useState('');

  useEffect(() => {
    const date = new Date(document.lastModified);
    setLastModified(date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Innocent G. Shayo</h1>
              <div className="flex items-center gap-4 mt-4 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Dar es Salaam, Tanzania</span>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <img 
                src="https://avatars.githubusercontent.com/u/16267179?v=4" 
                alt="Innocent G. Shayo"
                className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-12 px-4">
        {/* Personal Information */}
        <section id="about">
          <h2 className="section-heading">About Me</h2>
          <div className="prose prose-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              Hello! I'm Innocent G. Shayo, a passionate technologist and educator based in Tanzania. 
              I specialize in web development and information technology, with a strong commitment to 
              advancing technological education in East Africa.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Currently, I'm focused on developing web-based applications and contributing to the 
              growth of ICT education. My work combines technical expertise with a dedication to 
              empowering others through technology.
            </p>
          </div>
        </section>

        {/* Favorite Quote */}
        <blockquote className="quote">
          "Education is not the learning of facts, but the training of the mind to think."
          <footer className="text-sm mt-2">- Albert Einstein</footer>
        </blockquote>

        {/* Hobbies & Interests */}
        <section id="hobbies">
          <h2 className="section-heading">Hobbies & Interests</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <li className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Technology & Programming</h3>
              <p className="text-gray-600">Exploring new technologies and developing web applications</p>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Education</h3>
              <p className="text-gray-600">Contributing to ICT education and mentoring students</p>
            </li>
          </ul>
        </section>

        {/* Top 10 Books */}
        <section id="favorites">
          <h2 className="section-heading">My Top 10 Technical Books</h2>
          <table className="table-styles">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Clean Code</td>
                <td>Robert C. Martin</td>
                <td>Software Development</td>
              </tr>
              <tr>
                <td>Design Patterns</td>
                <td>Gang of Four</td>
                <td>Software Architecture</td>
              </tr>
              <tr>
                <td>Introduction to Algorithms</td>
                <td>Thomas H. Cormen</td>
                <td>Computer Science</td>
              </tr>
              {/* Add more books as needed */}
            </tbody>
          </table>
        </section>

        {/* Images */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Programming Setup"
              className="rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-500 mt-2">My ideal workspace setup</p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Teaching Session"
              className="rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-500 mt-2">Teaching and mentoring session</p>
          </div>
        </section>

        {/* Important Links */}
        <section id="links">
          <h2 className="section-heading">Important Links</h2>
          <div className="prose prose-lg">
            <p>
              I'm currently teaching at the{' '}
              <a href="https://www.out.ac.tz" className="nav-link">Open University of Tanzania</a>{' '}
              in the{' '}
              <a href="https://www.out.ac.tz/ict" className="nav-link">ICT Department</a>.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="inline-flex items-center gap-2 nav-link">
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a href="#" className="inline-flex items-center gap-2 nav-link">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a href="mailto:innocent.shayo@out.ac.tz" className="inline-flex items-center gap-2 nav-link">
                <Mail className="w-5 h-5" />
                Email
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-500">
          <p>Location: Dar es Salaam, Tanzania</p>
          <p>Last modified: {lastModified}</p>
        </footer>
      </main>
    </div>
  );
}

export default App;