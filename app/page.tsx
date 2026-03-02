export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-20 py-16">

      {/* HERO SECTION */}
      <section className="mb-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Santhosh M
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Full Stack Developer | AI Enthusiast | Production-Ready Engineer
        </p>
        <p className="max-w-3xl text-gray-300">
          Santhosh M is a Full Stack Developer Trainee at KUVI Networks,
          building scalable Flutter and Next.js applications and AI-powered
          healthcare platforms.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#projects" className="bg-blue-600 px-6 py-3 rounded-xl">
            View Projects
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener"
            className="border border-gray-500 px-6 py-3 rounded-xl">
            LinkedIn
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-6">About</h2>
        <p className="text-gray-300 leading-8">
          I'm Santhosh M, a Full Stack Developer specializing in Python,
          Django, Flutter, Next.js, and Nest.js. At KUVI Networks, I contribute
          to a production Flutter application published on the Google Play
          Store, working on API integrations, UI improvements, and payment
          gateway implementation.
        </p>
        <p className="text-gray-300 leading-8 mt-4">
          I also developed the AI Medical Assistant platform featuring disease
          prediction using XGBoost, appointment booking, analytics dashboards,
          and an AI chatbot — built with Django and machine learning models.
        </p>
      </section>

      {/* TECH STACK */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-6">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300">
          <div>Python</div>
          <div>Django</div>
          <div>Flutter</div>
          <div>Next.js</div>
          <div>Nest.js</div>
          <div>PostgreSQL</div>
          <div>MySQL</div>
          <div>Tailwind CSS</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mb-24">
        <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>

        <div className="mb-12">
          <h3 className="text-xl font-semibold">AI Medical Assistant</h3>
          <p className="text-gray-400 mt-2">
            AI-powered healthcare platform with disease prediction,
            appointment management, analytics dashboards, and chatbot.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            Production Flutter App – KUVI Networks
          </h3>
          <p className="text-gray-400 mt-2">
            Contributed to a live production mobile application,
            implemented UI features, API integrations, and payment gateway.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-gray-300">
          Email: santhoshm0731@gmail.com
        </p>
        <p className="text-gray-300">
          GitHub: github.com/santhoshm0731-ui
        </p>
      </section>

    </main>
  );
}