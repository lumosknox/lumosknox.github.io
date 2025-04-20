
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

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
    // link: "tel:+11234567890"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Location",
    value: "Tampa, FL (Relocatable anywhere in USA)",
    link: null
  }
];

import githubIcon from "@/assets/icons/github.svg";
import linkedinIcon from "@/assets/icons/linkedin.png";

const icons = {
  github: githubIcon,
  linkedin: linkedinIcon,
};

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      {contactInfo.map((info, index) => (
        <Card key={index} className="glass-card hover:border-primary/50 transition-all duration-300">
          <div className="p-6 flex items-center">
            <div className="bg-primary/20 p-4 rounded-full mr-4">
              {info.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{info.title}</h3>
              {info.link ? (
                <a 
                  href={info.link} 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-foreground/70">{info.value}</p>
              )}
            </div>
          </div>
        </Card>
      ))}

      {/* <Card className="glass-card">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
          <div className="flex space-x-4">
            {["github", "linkedin", "twitter", "instagram"].map((platform) => (
              <a 
                key={platform}
                href="#" 
                className="bg-white/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                aria-label={`Follow on ${platform}`}
              >
                <img 
                  src={`https://cdn.simpleicons.org/${platform}/ffffff`} 
                  alt={platform}
                  className="w-5 h-5" 
                />
              </a>
            ))}
          </div>
        </div>
      </Card> */}

      <Card className="glass-card">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
          <div className="flex space-x-4">
            {["github", "linkedin"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                aria-label={`Follow on ${platform}`}
              >
                <img
                  src={icons[platform]}
                  alt={platform}
                  className="w-5 h-5"
                />
              </a>
            ))}
          </div>
        </div>
      </Card>

    </div>
  );
};

export default ContactInfo;
