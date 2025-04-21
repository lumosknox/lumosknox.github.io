import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import githubIcon from "@/assets/icons/github.svg";
import linkedinIcon from "@/assets/icons/linkedin.png";

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    value: "madhavkode5@gmail.com",
    link: "mailto:madhavkode5@gmail.com"
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone",
    value: "Upon request by email",
    link: null
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Location",
    value: "Tampa, FL (Relocatable anywhere in USA)",
    link: null
  }
];

const socialLinks = [
  {
    name: "github",
    href: "https://github.com/lumosknox",
    icon: githubIcon
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/madhavkode/",
    icon: linkedinIcon
  }
];

const ContactInfo = () => (
  <div className="space-y-6">
    {contactInfo.map(({ icon, title, value, link }, index) => (
      <Card key={index} className="glass-card hover:border-primary/50 transition-all duration-300">
        <div className="p-6 flex items-center">
          <div className="bg-primary/20 p-4 rounded-full mr-4">{icon}</div>
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            {link ? (
              <a href={link} className="text-foreground/70 hover:text-primary transition-colors">
                {value}
              </a>
            ) : (
              <p className="text-foreground/70">{value}</p>
            )}
          </div>
        </div>
      </Card>
    ))}

    <Card className="glass-card">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
        <div className="flex space-x-4">
          {socialLinks.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              className="bg-white/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
              aria-label={`Follow on ${name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icon} alt={name} className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </Card>
  </div>
);

export default ContactInfo;
