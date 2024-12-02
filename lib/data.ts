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


  export const blogCategories = ["All", "Technology", "Web Development", "Frontend","Humor"];
  // export const blogCategories = ["All", "Technology", "Web Development", "Frontend", "CSS", "UI Design", "Humor", "Productivity", "Trends"];


export const blogPosts = [
  {
    slug: "life-of-a-frontend-developer-in-ghana",
    title: "Life of a Frontend Developer in Ghana: Debugging WiFi and Code",
    date: "March 20, 2024",
    readTime: "8 min read",
    author: "Wendy Edem Ahadome",
    categories: ["Technology", "Frontend", "Humor", "Web Development"],
    tags: ["Frontend", "Developer Life", "Ghana"],
    content: [
      {
        heading: "Introduction",
        text: "Being a frontend developer in Ghana is a rollercoaster ride. On one hand, there's the thrill of creating visually stunning interfaces. On the other, there’s the never-ending battle with unreliable internet. When you finally hit deploy, the lights flicker, and you're left wondering: Is this debugging or destiny?",
        media: {
          type: "image",
          url: "/images/memes/explode.webp",
          alt: "A developer looking frustrated",
          caption: "Debugging life: WiFi, JavaScript, and power cuts.",
        },
      },
      {
        heading: "The Daily Hustle",
        text: "Your day starts with a jolt—not from coffee, but from the sound of a generator. As you sip your morning tea, you pray the power holds long enough to finish your sprint tasks. At 10 AM, you lose connection mid-Zoom call. By noon, you’ve written code so optimized it works offline because... well, necessity breeds invention.",
        media: {
          type: "image",
          url: "/images/memes/coffee.webp",
          alt: "A laptop, coffee mug, and notebooks",
          caption: "Morning routines: caffeine and creative problem-solving.",
        },
      },
      {
        heading: "Tools of the Trade",
        text: "We don’t just use tools; we *adapt* tools. When npm fails, you manually copy-paste node_modules folders. When the internet crawls, you write CSS in your head. You may not have all the fancy setups, but your determination is unmatched.",
        media: {
          type: "gif",
          url: "/images/memes/panic.webp",
          alt: "A developer using creative tools",
          caption: "If Stack Overflow is down, we panic.",
        },
      },
      {
        heading: "Why We Love It",
        text: "Despite the challenges, nothing beats the satisfaction of seeing your app work. When users compliment your interface, it feels like all the power cuts were worth it. And yes, the food-powered brainstorming sessions add their own flavor to every line of code.",
        media: {
          type: "image",
          url: "/images/memes/food.webp",
          // url: "https://example.com/jollof-code.jpg",
          alt: "A plate of jollof rice next to a laptop",
          caption: "Jollof: the unofficial fuel for developers in Ghana.",
        },
      },
      {
        heading: "Conclusion",
        text: "Being a frontend developer in Ghana isn’t just about writing code. It’s about resilience, creativity, and embracing chaos. Whether it’s debugging WiFi or flexbox, every challenge is a chance to grow. And in the end, you learn to laugh at the struggles and cherish the wins.",
        media: {
          type: "gif",
          url: "/images/memes/celebrate.gif",
                    alt: "A happy developer celebrating success",
          caption: "Deployment successful: Time to celebrate!",
        },
      },
    ],
    image:  '/images/blog/blog1.avif'
  }
,  
{
  slug: "why-your-business-needs-a-frontend-developer",
  title: "Why Your Business Needs a Frontend Developer: A Case for Pixel-Perfect Design",
  date: "March 22, 2024",
  readTime: "5 min read",
  author: "Wendy Edem Ahadome",
  categories: ["Technology", "Business", "Frontend", "Web Development"],
  tags: ["Frontend", "Business Growth", "Web Design"],
  content: [
    {
      heading: "Introduction",
      text: "A frontend developer isn’t just someone who makes things look good—they ensure your website feels good too. Think of them as the digital architects who make your business's virtual home inviting, functional, and accessible.",
      media: {
        type: "image",
        url: "/images/memes/yes.gif",
        alt: "Frontend developer working on a laptop",
        caption: "When your website's 'handshake' feels like a confident grip, not a limp fish.",
      },
    },
    {
      heading: "The Magic of the Frontend",
      text: "Frontend developers bring life to static mockups with animations, responsiveness, and interactivity. They don’t just code; they tell stories that connect your brand to your audience.",
    },
    {
      heading: "Business Impact",
      text: "Without a polished frontend, even the best backend features can go unnoticed. Accessibility, first impressions, and trust are all tied to design quality.",
      media: {
        type: "image",
        url: "/images/memes/find.gif",
        alt: "When you finally find the perfect frontend developer.",
        caption: "Great product, terrible storefront. Don’t let this be your website.",
      },
    },
    {
      heading: "Frontend and Business Growth",
      text: "A frontend developer optimizes your site for speed, SEO, and user experience, ensuring your business thrives online. A one-second delay in load time could reduce conversions by 7%.",
      media: {
        type: "image",
        url: "/images/memes/cheers.gif",
        alt: "When your website loads fast and conversions skyrocket",
        caption: "Fast websites make happy users and better business.",
      },
    },
    {
      heading: "Conclusion",
      text: "In today’s digital-first world, a frontend developer is essential. They transform your business goals into engaging, accessible, and impactful digital experiences. Don’t just settle for a website—invest in a frontend developer who ensures your site wows users from the first click.",
    },
  ],
  image: "/images/blog/blog2.avif",
},
  {
    slug: "dark-mode-or-light-mode",
    title: "Dark Mode or Light Mode? The Eternal Struggle",
    date: "March 25, 2024",
    readTime: "6 min read",
    author: "Wendy Edem Ahadome",
    categories: ["Technology", "Design", "UX"],
    tags: ["Dark Mode", "Light Mode", "User Preferences"],
    content: [
      {
        heading: "Introduction",
        text: "Ever scrolled through your favorite app and found yourself fumbling to adjust the brightness? The Dark Mode vs. Light Mode debate has divided developers, designers, and users alike into two camps, both passionate about their preferred UI vibe.",
        media: {
          type: "image",
          url: "/images/memes/dark.webp",
          alt: "Dark and light mode settings on a smartphone",
          caption: "Because choosing between Dark Mode and Light Mode is the real personality test.",
        },
      },
      {
        heading: "A Tale of Two Modes",
        text: "Dark Mode is the brooding, mysterious sibling—perfect for night owls and anyone with a soft spot for minimalistic aesthetics. Light Mode, on the other hand, is the cheerful morning person, brightening screens and hearts.",
        media: {
          type: "image",
          url: "https://media.giphy.com/media/loMKWGrrSfD8qswImi/giphy.gif?cid=82a1493b3rlp1kg2zplmlho5e95lg3ka8jmkpkfm0w7sc0bi&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
          alt: "Comparison of dark and light mode UI designs",
          caption: "Dark Mode is for night owls; Light Mode is for sun lovers.",
        },
      },
      {
        heading: "Why Not Both?",
        text: "The real solution? Let the user decide. Offering a Dark Mode toggle ensures everyone gets their way. And don’t forget to save the preference in local storage.",
        media: {
          type: "gif",
          url: "/images/memes/hs.webp",
          alt: "A person flipping a light switch repeatedly",
          caption: "Dark Mode at night: Perfect. Light Mode at night: Betrayal.",
        },
      },
    ],
    image: "/images/blog/dark.webp",
  },
  
  // {
  //   slug: "css-vs-jollof",
  //   title: "CSS vs. Jollof: The Battle for Perfection",
  //   date: "April 10, 2024",
  //   readTime: "4 min read",
  //   author: "Wendy Edem Ahadome",
  //   categories: ["Web Development", "CSS", "Humor"],
  //   tags: ["CSS", "Humor", "Food"],
  //   content: [
  //     {
  //       heading: "Introduction",
  //       text: "What do CSS and Jollof rice have in common? Both require the perfect balance to avoid disaster. One wrong move, and you're left with a mess that no amount of media queries can fix.",
  //     },
  //     {
  //       heading: "The Perfect Recipe",
  //       text: "Just like with CSS, start with the basics. A good base (HTML or rice) is essential. Then add your spices—padding, margins, and maybe a sprinkle of box-shadow.",
  //     },
  //     {
  //       heading: "Final Touches",
  //       text: "A well-plated dish is like a polished UI. It’s all about presentation. Remember, nobody wants to eat overcooked rice or navigate a poorly aligned button.",
  //     },
  //   ],
  //   image: "https://images.unsplash.com/photo-1601991027781-9c7f0b1a0507?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI4fHxwcm9ncmFtbWluZyUyMGZvb2R8ZW58MHx8fHwxNjYwNzQyMTg2&ixid=rb-1.2.1&q=80&w=1080",
  // },
  // {
  //   slug: "tool-overload",
  //   title: "When Your Developer Tools Outnumber Your Brain Cells",
  //   date: "April 25, 2024",
  //   readTime: "5 min read",
  //   author: "Wendy Edem Ahadome",
  //   categories: ["Technology", "Productivity", "Web Development"],
  //   tags: ["Developer Tools", "Productivity"],
  //   content: [
  //     {
  //       heading: "Introduction",
  //       text: "As developers, we accumulate tools like Pokémon. But when you're juggling 20 tabs, each with its own debugging tool, things can get overwhelming.",
  //     },
  //     {
  //       heading: "Why Do We Do It?",
  //       text: "We get attached to our tools. The promise of instant bug fixes, the allure of the newest framework, it’s all too tempting.",
  //     },
  //     {
  //       heading: "The Solution?",
  //       text: "Focus on the essentials. Remember, tools don’t write your code for you—well, not yet anyway. But with a clean workspace, you're ready for any challenge.",
  //     },
  //   ],
  //   image: "https://images.unsplash.com/photo-1551860740-d547d30c74da?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE3fHx0b29sc3xlbnwwfDB8fHx8&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE3fHx0b29sc3xlbnwwfDB8fHx8&ixid=rb-1.2.1&q=80&w=1080",
  // },
  // {
  //   slug: "dark-mode-debates",
  //   title: "Dark Mode or Light Mode? The Eternal Struggle",
  //   date: "May 5, 2024",
  //   readTime: "4 min read",
  //   author: "Wendy Edem Ahadome",
  //   categories: ["UI Design", "Trends"],
  //   tags: ["UI Design", "Dark Mode", "Light Mode"],
  //   content: [
  //     {
  //       heading: "Introduction",
  //       text: "Whether you're a night owl or a morning person, the dark mode vs. light mode debate has been ongoing for years. Which side are you on?",
  //     },
  //     {
  //       heading: "Benefits of Dark Mode",
  //       text: "For one, dark mode saves your eyes from the harsh glare of your screen. It's like giving your retina a spa day. Plus, it's super sleek and stylish.",
  //     },
  //     {
  //       heading: "But Light Mode Still Wins",
  //       text: "Let’s be real—light mode still holds a special place in our hearts, especially in the morning when we need all the brightness to get our day started.",
  //     },
  //   ],
  //   image: "https://images.unsplash.com/photo-1601992190147-6d15081e0e72?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDgxfHxkYXJrJTIwbW9kZXxlbnwwfDB8fHx8&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDgxfHxkYXJrJTIwbW9kZXxlbnwwfDB8fHx8&ixid=rb-1.2.1&q=80&w=1080",
  // },
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
    image: '/images/projects/beasolution.png',
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
    image:  '/images/projects/ghamfin.png',
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
    image:  '/images/projects/abideecanada.png',
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
    image:  '/images/projects/jesuscenteredchurch.png',
    // image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
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
    image:  '/images/projects/brightmartey.png',
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
    image:  '/images/projects/testimony.png',
    tags: ["Community", "Ministry", "Engagement"],
    categories: ["Website"],
    link: "https://testimonytabernacle.com/",
    problem: "Lacked online features to connect members for events and sermons.",
    solution: "Developed a site with seamless access to sermons and interactive community events.",
    impact: "Enhanced member participation and spiritual engagement.",
  },
  // {
  //   slug: "anythingafrikan",
  //   title: "Anything Afrikan",
  //   excerpt: "A platform to empower African artisans through an online marketplace that promotes unique handmade crafts and culture.",
  //   image: "https://images.unsplash.com/photo-1531321693991-80c4e8b62f6b?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDQ5fHxmb3J0aGVhY3Z8ZW58MHx8fHwxNjYwNzQ2MzEw&ixid=rb-1.2.1&q=80&w=1080",
  //   tags: ["E-commerce", "Crafts", "African Culture"],
  //   categories: ["E-commerce"],
  //   link: "https://anythingafrikan.online/",
  //   problem: "Artisans lacked an accessible online marketplace to showcase their products.",
  //   solution: "Built a marketplace that allows artisans to showcase and sell their handmade goods.",
  //   impact: "Increased sales by 40% and empowered African artisans to reach a broader market."
  // }
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