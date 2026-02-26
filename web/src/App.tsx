import { useState } from 'react';
import type { Project } from './types';
import { mockProjects } from './data/mock';
import ProjectList from './components/ProjectList';
import ProjectWorkspace from './components/ProjectWorkspace';

function App() {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCreateProject = (name: string, oem: string, component: string) => {
    const newProject: Project = {
      id: String(Date.now()),
      name,
      oem,
      component,
      documentCount: 0,
      currentStage: 0,
      stageStatus: 'idle',
      progress: 0,
      lastUpdated: '刚刚',
      documents: [],
    };
    setProjects(prev => [newProject, ...prev]);
    setSelectedProject(newProject);
  };

  if (selectedProject) {
    return (
      <ProjectWorkspace
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <ProjectList
      projects={projects}
      onSelectProject={setSelectedProject}
      onCreateProject={handleCreateProject}
    />
  );
}

export default App;
