import { SlSocialGithub } from "react-icons/sl";

const links = [
  { linkName: "home", href: "/home" },
  { linkName: "about", href: "/about" },
  { linkName: "projects", href: "/projects" },
  { linkName: "contact", href: "/contact" },
];

function MainNav() {
  return (
    <div className="hidden md:flex gap-6 text-xl capitalize">
      {links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.linkName}
        </a>
      ))}
      <a href="/">
        <SlSocialGithub />
      </a>
    </div>
  );
}

export default MainNav;
