import { useState } from 'react';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Player } from './pages/Player';
import { Course } from './types';

function App() {
  // Simple state-based routing/auth simulation
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentCourse, setCurrentCourse] = useState<Course | null>(null);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentCourse(null);
  };

  const handleCourseSelect = (course: Course) => {
    setCurrentCourse(course);
    // In a real app, this would change the URL route
    window.scrollTo(0, 0);
  };

  const handleBackToDashboard = () => {
    setCurrentCourse(null);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  if (currentCourse) {
    return <Player course={currentCourse} onBack={handleBackToDashboard} />;
  }

  return (
    <Dashboard 
      onCourseSelect={handleCourseSelect} 
      onLogout={handleLogout}
    />
  );
}

export default App;