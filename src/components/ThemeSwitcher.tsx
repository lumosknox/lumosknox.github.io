
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(true);
  const { toast } = useToast();

  const isNightTime = () => {
    const hours = new Date().getHours();
    return hours < 6 || hours >= 18; // Night time between 6 PM and 6 AM
  };

  // Check initial theme based on time and saved preference
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      
      if (savedTheme) {
        setIsDark(savedTheme === 'dark');
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      } else {
        const shouldBeDark = isNightTime();
        setIsDark(shouldBeDark);
        document.documentElement.classList.toggle('dark', shouldBeDark);
        localStorage.setItem('theme', shouldBeDark ? 'dark' : 'light');
      }
    } catch (error) {
      console.error("Error setting initial theme:", error);
      // Fallback to default dark theme if there's an error
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    try {
      const newDarkMode = !isDark;
      setIsDark(newDarkMode);
      localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
      
      if (newDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      toast({
        title: `${newDarkMode ? 'Dark' : 'Light'} Theme Activated`,
        description: `Switched to ${newDarkMode ? 'dark' : 'light'} mode.`,
        duration: 2000,
      });
    } catch (error) {
      console.error("Error toggling theme:", error);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed bottom-6 right-6 bg-secondary/50 backdrop-blur-md rounded-full p-2 z-50 shadow-lg"
      onClick={toggleTheme}
    >
      {isDark ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-400" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeSwitcher;
