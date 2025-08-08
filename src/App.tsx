import Header from "./components/Header";
import Footer from "./components/Footer";
import DonationMethods from "./components/DonationMethods";
import ProjectsList from "./components/ProjectsList";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow w-full">
        <div className="max-w-7xl mx-auto px-4">
          <DonationMethods />

          <div className="border-t border-gray-200 my-8"></div>

          <HireMe />

          <div className="border-t border-gray-200 my-8"></div>

          <ProjectsList />

          <div className="border-t border-gray-200 my-8"></div>

          <div className="mt-8 max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">How Your Donations Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="text-lg font-semibold mb-2">New Features</h3>
                <p className="text-gray-600">
                  Your donations help fund the development of new features and
                  improvements.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-3xl mb-2">🐛</div>
                <h3 className="text-lg font-semibold mb-2">Bug Fixes</h3>
                <p className="text-gray-600">
                  Support helps me dedicate time to fixing bugs and improving
                  stability.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-3xl mb-2">📚</div>
                <h3 className="text-lg font-semibold mb-2">Documentation</h3>
                <p className="text-gray-600">
                  Donations allow me to create better documentation and
                  tutorials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

function HireMe() {
  return (
    <div className="mt-8 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Hire Me</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-3">Ivan Baksheev</h3>
            <p className="text-gray-700 mb-4">
              Fullstack Engineer specializing in TypeScript, React, and modern
              web technologies. Mathematics, programming, and cybersecurity
              enthusiast.
            </p>
            <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-2">Contact</h4>
              <ul className="space-y-1 text-gray-600">
                {/* <li>📍 Novosibirsk, Russia (UTC+7)</li> */}
                <li>
                  <a
                    href="https://t.me/zpix1"
                    className="text-blue-600 hover:underline"
                  >
                    Telegram: @zpix1
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-2">Experience</h4>
              <div className="mb-3">
                <div className="flex justify-between">
                  <span className="font-medium">Huawei RRI</span>
                  <span className="text-gray-500 text-sm">
                    Apr 2022 - Present
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  TypeScript Engineer working on IDE desktop software using
                  Electron, TypeScript, React, and Java.
                </p>
              </div>
              <div>
                <div className="flex justify-between">
                  <span className="font-medium">JetBrains</span>
                  <span className="text-gray-500 text-sm">
                    Jul 2021 - Mar 2022
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  Software Developer building internal web applications with
                  TypeScript, React, and various backend technologies.
                </p>
              </div>
            </div>
            <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                  TypeScript/JavaScript
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                  React
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                  Node.js
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                  Python
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                  C/C++
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                  Computer Security
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                  WebSockets
                </span>
              </div>
            </div>
            <div>
              <a
                href="https://zpix1.github.io/about-me/"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Full CV & Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
