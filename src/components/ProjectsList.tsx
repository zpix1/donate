interface Project {
  id: number;
  name: string;
  description: string;
  url: string;
  stars?: number;
  language?: string;
  chromeStoreUrl?: string;
  demoUrl?: string;
}

const ProjectsList = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: "yt-anti-translate",
      description:
        "Chrome extension to disable YouTube video titles autotranslation",
      url: "https://github.com/zpix1/yt-anti-translate",
      stars: 86,
      language: "JavaScript",
      chromeStoreUrl:
        "https://chromewebstore.google.com/detail/youtube-anti-translate/ndpmhjnlfkgfalaieeneneenijondgag",
    },
    {
      id: 2,
      name: "yahtzee",
      description: "Yahtzee game PWApp",
      url: "https://github.com/zpix1/yahtzee",
      stars: 7,
      language: "JavaScript",
      demoUrl: "https://zpix1.github.io/yahtzee/#",
    },
    {
      id: 3,
      name: "pechatay",
      description: "Yet another typing trainer",
      url: "https://github.com/zpix1/pechatay",
      language: "Vue",
      demoUrl: "https://zpix1.github.io/pechatay/#/",
    },
    {
      id: 4,
      name: "rsa-idioten",
      description: "RSA Tool to solve simple CTF tasks",
      url: "https://github.com/zpix1/rsa-idioten",
      language: "JavaScript",
      demoUrl: "https://zpix1.github.io/rsa-idioten/",
    },
  ];

  return (
    <div className="mt-8 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg p-4 bg-white shadow-md flex flex-col h-full"
          >
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <div className="flex items-center gap-3 mb-3">
                {project.language && (
                  <span className="text-gray-600 text-sm">
                    {project.language}
                  </span>
                )}
                {project.stars && (
                  <div className="flex items-center text-yellow-500">
                    <span className="mr-1">★</span>
                    <span>{project.stars}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-auto">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                View on GitHub
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800"
                >
                  Open App
                </a>
              )}
              {project.chromeStoreUrl && (
                <a
                  href={project.chromeStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800"
                >
                  Chrome Web Store
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-700 mb-3">
          These are just a few of my projects. Check out my GitHub profile for
          more!
        </p>
        <a
          href="https://github.com/zpix1?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
        >
          View All Projects on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectsList;
