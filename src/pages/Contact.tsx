import { motion } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { BackgroundTextEffect } from "../components/BackgroundTextEffect";
import { PageHeader } from "../components/PageHeader";

const contactItems = [
  {
    icon: <SiGithub size={28} />,
    label: "GitHub",
    value: "romanperk",
    href: "https://github.com/romanperk",
  },
  {
    icon: <SiLinkedin size={28} />,
    label: "LinkedIn",
    value: "Roman Perk",
    href: "https://www.linkedin.com/in/roman-perk/",
  },
  {
    icon: <EnvelopeIcon className="w-7 h-7" />,
    label: "Email",
    value: "perkroman@gmail.com",
    href: "mailto:perkroman@gmail.com",
  },
] as const;

export const Contact = () => {
  return (
    <div id="contact" className="relative pb-16">
      <BackgroundTextEffect text={"MSG"} />
      <PageHeader text1={"My"} text2={"Contact"} />
      <div className="mx-auto max-w-4xl mt-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                item.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-700 bg-gray-900/50 text-center hover:border-purple-500 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500"
            >
              <span className="text-purple-400">{item.icon}</span>
              <span className="font-semibold text-white text-lg">
                {item.label}
              </span>
              <span className="text-gray-400 text-sm break-all">
                {item.value}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};
