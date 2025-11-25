import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import SubjectDetail from './pages/SubjectDetail';
import AddSubjectModal from './components/AddSubjectModal';

const App = () => {
  return (
    <BrowserRouter>
      <ProgressProvider>
        <AppLayout />
      </ProgressProvider>
    </BrowserRouter>
  );
};

const AppLayout = () => {
  const [isAddSubjectOpen, setIsAddSubjectOpen] = useState(false);
  const { addSubject } = useProgress();

  const handleAddSubject = (name) => {
    addSubject(name);
  };

  return (
    <div className="flex">
      <Sidebar onAddSubject={() => setIsAddSubjectOpen(true)} />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/subject/:subjectId" element={<SubjectDetail />} />
        </Routes>
      </div>
      <AddSubjectModal
        isOpen={isAddSubjectOpen}
        onClose={() => setIsAddSubjectOpen(false)}
        onAdd={handleAddSubject}
      />
    </div>
  );
};

export default App;
