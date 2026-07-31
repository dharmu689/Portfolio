import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank, SiCodechef } from 'react-icons/si'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/dharmu689',
    icon: FaGithub,
    colorClass: 'hover:bg-[#181717] hover:border-[#181717]',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/dharmu689',
    icon: FaLinkedin,
    colorClass: 'hover:bg-[#0077B5] hover:border-[#0077B5]',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/dharmu689',
    icon: SiLeetcode,
    colorClass: 'hover:bg-[#FFA116] hover:border-[#FFA116]',
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/user/dharmu689/',
    icon: SiGeeksforgeeks,
    colorClass: 'hover:bg-[#2F8D46] hover:border-[#2F8D46]',
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/dharm689',
    icon: SiHackerrank,
    colorClass: 'hover:bg-[#2EC866] hover:border-[#2EC866]',
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/dharmu98',
    icon: SiCodechef,
    colorClass: 'hover:bg-[#5B4636] hover:border-[#5B4636]',
  },
]

const SocialSidebar = () => {
  return (
    <div className="fixed bottom-6 left-6 flex flex-row items-center z-40 md:flex-col md:left-[20px] md:top-1/2 md:-translate-y-1/2 md:bottom-auto">
      {/* Top Divider Line */}
      <div className="hidden md:block w-[1.5px] h-10 bg-brandNavy/30" />

      {/* Social Links List */}
      <div className="flex flex-row gap-2 my-0 md:flex-col md:gap-4 md:my-4">
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className={`group relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-gray-200 text-[#0A0F1E] shadow-md transition-all duration-300 hover:text-white hover:scale-110 ${link.colorClass}`}
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300" />

              {/* Tooltip on Hover */}
              <span className="hidden md:block absolute left-14 opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 bg-brandNavy text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-lg transition-all duration-300 whitespace-nowrap z-50">
                {link.name}
              </span>
            </a>
          )
        })}
      </div>

      {/* Bottom Divider Line */}
      <div className="hidden md:block w-[1.5px] h-10 bg-brandNavy/30" />
    </div>
  )
}

export default SocialSidebar
