import {
  MapPin,
  Cloud,
  Github as GithubIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  Linkedin as LinkedinIcon,
} from "lucide-react";
import { Tooltip } from "@material-tailwind/react";
import IconWhatsapp from "src/assets/icons/whatsapp.svg";

function LinkEstructure({ link, icon, tooltipText }) {
  return (
    <Tooltip content={tooltipText}>
      <a href={link}>{icon}</a>
    </Tooltip>
  );
}
export function Location({ size = 20 }) {
  return (
    <LinkEstructure icon={<MapPin size={size} />} tooltipText="Ceará, Brazil" />
  );
}
export function Trailhead({ size = 20 }) {
  return (
    <LinkEstructure
      icon={<Cloud size={size} strokeWidth={1.5} />}
      tooltipText="trailblazer/biavidal"
      link="https://www.salesforce.com/trailblazer/biavidal"
    />
  );
}
export function Github({ size = 20 }) {
  return (
    <LinkEstructure
      icon={<GithubIcon size={size} strokeWidth={1.5} />}
      tooltipText="biavidalf"
      link="https://github.com/biavidalf"
    />
  );
}
export function Phone({ size = 20 }) {
  return (
    <LinkEstructure
      icon={
        <img src={IconWhatsapp} alt="Whatsapp Icon" className="text-gray-400" />
      }
      tooltipText="send a message"
      link="https://wa.link/hd71kf"
    />
  );
}
export function Mail({ size = 20 }) {
  return (
    <LinkEstructure
      icon={<MailIcon size={size} strokeWidth={1.5} />}
      tooltipText="beatrizvidal.dev@gmail.com"
      link="mailto:beatrizvidal.dev@gmail.com"
    />
  );
}
export function Linkedin({ size = 20 }) {
  return (
    <LinkEstructure
      icon={<LinkedinIcon size={size} strokeWidth={1.5} />}
      tooltipText="in/beatriz-vidal-bf4"
      link="www.linkedin.com/in/beatriz-vidal-bf4"
    />
  );
}
