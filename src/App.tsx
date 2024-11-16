import React, { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './store/store';
import { RootState } from './store/store';
import TaskManager from './components/TaskManager';
import ThemeToggle from './components/ThemeToggle';

const ThemeInitializer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-200">
      {children}
    </main>
  );
};

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-200 dark:bg-slate-900">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-around ">
          <h1 className="text-2xl font-bold">Task Manager</h1>
          <div className="">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="container py-6">
        <TaskManager />
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeInitializer>
        <AppContent />
      </ThemeInitializer>
    </Provider>
  );
};

export default App;
