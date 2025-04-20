
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from './types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="h-full overflow-hidden glass-card hover:border-primary/50 transition-all duration-300 group">
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
        <CardDescription className="text-foreground/60">{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <Badge key={idx} variant="outline" className="border-white/20 text-foreground/70">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {project.liveUrl && (
          <Button 
            variant="ghost" 
            className="hover:bg-white/5"
            onClick={() => window.open(project.liveUrl, '_blank')}
          >
            Live Demo
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        )}
        {project.sourceUrl && (
          <Button 
            variant="ghost" 
            className="hover:bg-white/5"
            onClick={() => window.open(project.sourceUrl, '_blank')}
          >
            Source Code
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
