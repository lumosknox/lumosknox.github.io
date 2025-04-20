
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Card className="glass-card">
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">Your Name</label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/5 border-white/10 focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">Your Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/5 border-white/10 focus:border-primary"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-2">Subject</label>
            <Input
              id="subject"
              name="subject"
              placeholder="Project Inquiry"
              value={formData.subject}
              onChange={handleChange}
              className="bg-white/5 border-white/10 focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">Your Message</label>
            <Textarea
              id="message"
              name="message"
              placeholder="Hello! I have a project idea that I'd like to discuss..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="bg-white/5 border-white/10 focus:border-primary resize-none"
            />
          </div>
          <Button 
            type="submit" 
            className="bg-primary hover:bg-primary/90 w-full py-6 text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default ContactForm;
