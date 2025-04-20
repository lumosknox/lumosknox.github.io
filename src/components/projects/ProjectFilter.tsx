
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectFilter = ({ categories, activeCategory, onCategoryChange }: ProjectFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onCategoryChange(category)}
          variant={activeCategory === category ? "default" : "outline"}
          className={cn(
            "rounded-full",
            activeCategory === category ? "bg-primary hover:bg-primary/90" : "border-white/20 hover:bg-white/5"
          )}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default ProjectFilter;
