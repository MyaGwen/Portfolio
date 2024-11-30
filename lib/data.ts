import beasolution from '@/public/images/projects/beasolution.png'


export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    readTime: string;
    author: string;
    content: {
      heading: string;
      text: string;
    }[];
    tags: string[];
  }


  export const blogCategories = ["All", "Technology", "Web Development", "Frontend", "CSS", "UI Design", "Humor", "Productivity", "Trends"];


export const blogPosts = [
  {
    slug: "life-of-a-frontend-developer-in-ghana",
    title: "Life of a Frontend Developer in Ghana: Debugging WiFi and Code",
    date: "March 20, 2024",
    readTime: "6 min read",
    author: "Wendy Edem Ahadome",
    categories: ["Technology", "Frontend", "Humor"],
    tags: ["Frontend", "Developer Life", "Ghana"],
    content: [
      {
        heading: "Introduction",
        text: "Being a frontend developer in Ghana is a rollercoaster. One moment you're crafting a pixel-perfect UI; the next, you're debating with your internet provider about why 'unlimited data' has limits.",
      },
      {
        heading: "The Unique Challenges",
        text: "Forget browser compatibility issues; here, we have power outages testing our patience more than asynchronous JavaScript ever could.",
      },
      {
        heading: "Why We Love It Anyway",
        text: "For all its quirks, there's no greater joy than seeing your website load flawlessly—after three retries. Also, that first jollof-fueled coding spree? Priceless.",
      },
    ],
    image: "https://images.unsplash.com/photo-1506748686218-84b0bc4a0b94?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDkxfHxwcm9ncmFtbWluZyUyMGJhd2ZpY2F8ZW58MHx8fHwxNjYwNzQxNjE0&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    slug: "css-vs-jollof",
    title: "CSS vs. Jollof: The Battle for Perfection",
    date: "April 10, 2024",
    readTime: "4 min read",
    author: "Wendy Edem Ahadome",
    categories: ["Web Development", "CSS", "Humor"],
    tags: ["CSS", "Humor", "Food"],
    content: [
      {
        heading: "Introduction",
        text: "What do CSS and Jollof rice have in common? Both require the perfect balance to avoid disaster. One wrong move, and you're left with a mess that no amount of media queries can fix.",
      },
      {
        heading: "The Perfect Recipe",
        text: "Just like with CSS, start with the basics. A good base (HTML or rice) is essential. Then add your spices—padding, margins, and maybe a sprinkle of box-shadow.",
      },
      {
        heading: "Final Touches",
        text: "A well-plated dish is like a polished UI. It’s all about presentation. Remember, nobody wants to eat overcooked rice or navigate a poorly aligned button.",
      },
    ],
    image: "https://images.unsplash.com/photo-1601991027781-9c7f0b1a0507?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI4fHxwcm9ncmFtbWluZyUyMGZvb2R8ZW58MHx8fHwxNjYwNzQyMTg2&ixid=rb-1.2.1&q=80&w=1080",
  },
  {
    slug: "tool-overload",
    title: "When Your Developer Tools Outnumber Your Brain Cells",
    date: "April 25, 2024",
    readTime: "5 min read",
    author: "Wendy Edem Ahadome",
    categories: ["Technology", "Productivity", "Web Development"],
    tags: ["Developer Tools", "Productivity"],
    content: [
      {
        heading: "Introduction",
        text: "As developers, we accumulate tools like Pokémon. But when you're juggling 20 tabs, each with its own debugging tool, things can get overwhelming.",
      },
      {
        heading: "Why Do We Do It?",
        text: "We get attached to our tools. The promise of instant bug fixes, the allure of the newest framework, it’s all too tempting.",
      },
      {
        heading: "The Solution?",
        text: "Focus on the essentials. Remember, tools don’t write your code for you—well, not yet anyway. But with a clean workspace, you're ready for any challenge.",
      },
    ],
    image: "https://images.unsplash.com/photo-1551860740-d547d30c74da?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE3fHx0b29sc3xlbnwwfDB8fHx8&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE3fHx0b29sc3xlbnwwfDB8fHx8&ixid=rb-1.2.1&q=80&w=1080",
  },
  {
    slug: "dark-mode-debates",
    title: "Dark Mode or Light Mode? The Eternal Struggle",
    date: "May 5, 2024",
    readTime: "4 min read",
    author: "Wendy Edem Ahadome",
    categories: ["UI Design", "Trends"],
    tags: ["UI Design", "Dark Mode", "Light Mode"],
    content: [
      {
        heading: "Introduction",
        text: "Whether you're a night owl or a morning person, the dark mode vs. light mode debate has been ongoing for years. Which side are you on?",
      },
      {
        heading: "Benefits of Dark Mode",
        text: "For one, dark mode saves your eyes from the harsh glare of your screen. It's like giving your retina a spa day. Plus, it's super sleek and stylish.",
      },
      {
        heading: "But Light Mode Still Wins",
        text: "Let’s be real—light mode still holds a special place in our hearts, especially in the morning when we need all the brightness to get our day started.",
      },
    ],
    image: "https://images.unsplash.com/photo-1601992190147-6d15081e0e72?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDgxfHxkYXJrJTIwbW9kZXxlbnwwfDB8fHx8&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDgxfHxkYXJrJTIwbW9kZXxlbnwwfDB8fHx8&ixid=rb-1.2.1&q=80&w=1080",
  },
];

export const projectCategories = ["All", "Dashboard", "E-Commerce", "Website"];

// Case Studies Data
export const caseStudies = [
  {
    id: "be-a-solution",
    title: "Be A Solution - Empowering Communities",
    description: "A web platform designed to empower and educate communities about sustainable solutions, offering educational articles, tutorials, and a forum for growth.",
    excerpt: "Be A Solution is a platform providing accessible resources for community empowerment, featuring articles, tutorials, and a community forum for sustainable change.",
    tags: ['Next Js',"Non-Profit", "Community"],
    categories: ["Website"],
    image: 'images/projects/beasolution.png',
    link: "https://be-a-solution-new-nwz5.vercel.app/",
    slug: "be-a-solution",
    problem: "Many communities lack accessible resources and tools for sustainable development.",
    solution: "Developed a platform that offers educational content, tools, and a forum to facilitate sustainable growth in various communities.",
    impact: "Increased user engagement by 40% and provided tools that helped empower local communities to create meaningful changes.",
  },
  {
    slug: "cfh-ghamfin",
    title: "Credit Facility Hub - Ghamfin",
    excerpt: "Streamlining access to credit services for Ghanaians with a user-friendly platform, helping manage financial needs with ease.",
    image: "https://images.unsplash.com/photo-1506748686218-84b0bc4a0b94?auto=format&fit=crop&w=800&q=80",
    tags: ["Financial Services"],
    categories: ["Dashboard", "Website"],
    link: "https://cfh.ghamfin.org/",
    problem: "Existing platforms lacked accessibility for Ghanaians to credit services.",
    solution: "Built a responsive web application focusing on user-friendly interfaces.",
    impact: "Enhanced user engagement by 60% and improved accessibility to credit services.",
  },
  {
    slug: "abidee-canada",
    title: "Abidee Canada",
    excerpt: "A vibrant platform for showcasing immigration services tailored for Canadians, providing resources for newcomers.",
    image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=80",
    tags: ["WordPress", "CMS", "Immigration"],
    categories: ["E-Commerce", "Website"],
    link: "https://abideecanada.com/",
    problem: "Immigration platforms lacked engaging designs and dynamic content management.",
    solution: "Created a visually appealing, easy-to-update website with robust CMS integration.",
    impact: "Increased service bookings by 25% and boosted user engagement.",
  },
  {
    slug: "jesus-centered-church",
    title: "Jesus Centered Church",
    excerpt: "Connecting congregants with sermons and events through a spiritual digital platform that promotes spiritual growth.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    tags: ["Community Engagement", "WordPress", "UI Design"],
    categories: ["Website"],
    link: "https://jesuscenteredchurch.com/",
    problem: "Church websites lacked modern designs to engage online communities.",
    solution: "Developed a functional site with features like sermon uploads and event management.",
    impact: "Improved online engagement by 50% and fostered a connected community.",
  },
  {
    slug: "bright-martey",
    title: "Bright Martey Portfolio",
    excerpt: "A portfolio site showcasing creative career achievements with stunning visuals, highlighting design and web development skills.",
    image: "https://images.unsplash.com/photo-1581091012184-8c9cdbb4e5cf?auto=format&fit=crop&w=800&q=80",
    tags: ["Portfolio", "Personal Branding", "Web Design"],
    categories: ["Website"],
    link: "https://brightmartey.com/",
    problem: "Creative professionals needed an interactive platform for their career highlights.",
    solution: "Designed a sleek portfolio site with emphasis on storytelling and visuals.",
    impact: "Enhanced personal branding and opened new professional opportunities.",
  },
  {
    slug: "testimony-tabernacle",
    title: "Testimony Tabernacle",
    excerpt: "A platform to connect members of Testimony Tabernacle with their spiritual growth, offering access to services and sermons.",
    image: "https://images.unsplash.com/photo-1515367875270-301d84197552?auto=format&fit=crop&w=800&q=80",
    tags: ["Community", "Ministry", "Engagement"],
    categories: ["Website"],
    link: "https://testimonytabernacle.com/",
    problem: "Lacked online features to connect members for events and sermons.",
    solution: "Developed a site with seamless access to sermons and interactive community events.",
    impact: "Enhanced member participation and spiritual engagement.",
  },
  {
    slug: "anythingafrikan",
    title: "Anything Afrikan",
    excerpt: "A platform to empower African artisans through an online marketplace that promotes unique handmade crafts and culture.",
    image: "https://images.unsplash.com/photo-1531321693991-80c4e8b62f6b?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDQ5fHxmb3J0aGVhY3Z8ZW58MHx8fHwxNjYwNzQ2MzEw&ixid=rb-1.2.1&q=80&w=1080",
    tags: ["E-commerce", "Crafts", "African Culture"],
    categories: ["E-commerce"],
    link: "https://anythingafrikan.online/",
    problem: "Artisans lacked an accessible online marketplace to showcase their products.",
    solution: "Built a marketplace that allows artisans to showcase and sell their handmade goods.",
    impact: "Increased sales by 40% and empowered African artisans to reach a broader market."
  }
];


// Featured Projects for the Home Page
export const featuredProjects = caseStudies.slice(0, 3);

// Case Studies Slug Data
export const getCaseStudyBySlug = (slug: string) => {
  return caseStudies.find((project) => project.slug === slug);
};



//   function generateSlug(title: string): string {
//     return title
//       .toLowerCase()
//       .replace(/\s+/g, '-') // Replace spaces with `-`
//       .replace(/[^\w-]+/g, ''); // Remove special characters
//   }

//   blogPosts.forEach(post => {
//     post.slug = generateSlug(post.title);
//   });
  
  
// const articles = [
//   {
//     title: "The Future of Frontend Development",
//     description:
//       "Exploring upcoming trends and technologies in frontend development for 2024 and beyond.",
//     date: "March 15, 2024",
//     readTime: "5 min read",
//     image:
//       "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: "Mastering React Performance",
//     description:
//       "Essential techniques and best practices for optimizing React applications.",
//     date: "March 10, 2024",
//     readTime: "8 min read",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: "Building Accessible Web Applications",
//     description:
//       "A comprehensive guide to creating inclusive and accessible web experiences.",
//     date: "March 5, 2024",
//     readTime: "6 min read",
//     image:
//       "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
//   },
// ];