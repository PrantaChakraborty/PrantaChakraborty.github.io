export const profile = {
  name: "Pranta Chakraborty",
  title: "Backend Software Engineer",
  intro:
    "Building scalable APIs, real-time IoT systems, and fast release pipelines with backend-focused engineering.",
  email: "pranta.csebuet@gmail.com",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/PrantaChakraborty",
  linkedin: "https://www.linkedin.com/in/pranta-cb/",
  resumePath: "/resume.pdf",
  contactFormAction: "https://formspree.io/f/your-form-id"
};

export const skillLogos = [
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Django", icon: "https://cdn.simpleicons.org/django/092E20" },
  { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "AWS", icon: "https://cdn.simpleicons.org/amazon/FF9900" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Jenkins", icon: "https://cdn.simpleicons.org/jenkins/D24939" },
  { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" }
];

export const projects = [
  {
    title: "Satarko Platform",
    badge: "Real-time IoT",
    summary: "Backend architecture, event streaming, and alert delivery",
    bullets: [
      "Led backend delivery for real-time intruder detection and monitoring.",
      "Implemented WebSockets and Firebase push notifications for real-time user alerts.",
      "Used Celery + Redis to improve async throughput and responsiveness.",
      "Optimized CI/CD pipeline from 4 minutes to 40 seconds."
    ],
    techline: "Python, Django, DRF, AWS, Redis, Celery, Jenkins, MQTT, PostgreSQL"
  },
  {
    title: "Byduy Multi-Vendor",
    badge: "Microservices",
    summary: "Scalable commerce backend with distributed consistency",
    bullets: [
      "Built backend infrastructure for a multi-vendor microservice platform.",
      "Implemented API integrations and query optimization for faster dashboards.",
      "Built real-time chat using WebSockets.",
      "Applied Saga pattern for distributed transaction consistency."
    ],
    techline: "Python, Django, DRF, WebSockets, PostgreSQL, Microservices"
  }
];
