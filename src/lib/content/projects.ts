export interface ProjectScreenshot {
  id: string;
  src: string;
  label: string;
  aspect: number;
}

export interface DownloadAsset {
  path: string;
  fileName: string;
  platform: string;
  sizeLabel: string;
}

export const grimoireProject = {
  id: "grimoire",
  title: "Grimoire",
  tagline: "Desktop Anime Tracker",
  status: "Actively Developed",
  timeline: "July 15, 2026 – Present",
  techStack: [
    "Electron",
    "React",
    "TypeScript",
    "SQLite",
    "better-sqlite3",
    "AniList API",
  ],
  overview:
    "Grimoire is a premium desktop anime tracking application designed to deliver a fast, offline-first experience with a rich, intuitive interface. The application combines local database performance with external API integration to provide seamless tracking, metadata management, and personalized viewing workflows.",
  keyFeatures: [
    "Built a full-featured desktop application using Electron and React",
    "Implemented a local-first architecture using SQLite and better-sqlite3",
    "Integrated AniList API with caching and fallback handling",
    "Designed a custom dashboard with Continue Watching, Priority List, Ready to Binge, and Journey Statistics",
    "Developed advanced filtering with multi-select Genre, Theme, and Studio filters",
    "Built a background sync system for metadata updates and backfilling missing data",
    "Implemented rich UI cards with banners, posters, and status indicators",
    "Created a modal-based interaction system for editing entries and viewing details",
    "Packaged the application into a production-ready Windows installer (.exe)",
  ],
  technicalHighlights: [
    "Solved native module packaging issues for better-sqlite3 in Electron builds",
    "Handled API rate limiting using batching and request prioritization",
    "Fixed timezone-related bugs affecting data accuracy, including Ready to Binge logic",
    "Designed efficient caching strategies to reduce redundant API calls",
    "Implemented background task scheduling for metadata synchronization",
    "Ensured data persistence across environments using Electron's userData path",
  ],
  impact: [
    "Improved performance by reducing unnecessary API calls through caching and batch processing",
    "Enabled fast, reliable data access via local database architecture",
    "Delivered a production-ready desktop application with a complete installable build",
  ],
  futureEnhancements: [
    "Watch Arc: Calendar-based activity tracking and visualization",
    "Incremental sync improvements",
    "UI/UX refinements and animations",
    "Optional cloud sync support",
  ],
  screenshots: [
    {
      id: "dashboard",
      src: "/images/projects/grimoire/continue-watching-dashboard.png",
      label: "Continue Watching (Dashboard)",
      aspect: 1.869,
    },
    {
      id: "details-modal",
      src: "/images/projects/grimoire/anime-details-modal.png",
      label: "Anime Details Modal",
      aspect: 1.266,
    },
    {
      id: "entry-dialog",
      src: "/images/projects/grimoire/entry-dialog-box.png",
      label: "Entry Dialog Box",
      aspect: 1.018,
    },
    {
      id: "my-list",
      src: "/images/projects/grimoire/my-list-rich-cards.png",
      label: "My List (Rich Cards)",
      aspect: 1.913,
    },
    {
      id: "ready-to-binge",
      src: "/images/projects/grimoire/ready-to-binge-watch-priority-list.png",
      label: "Ready to Binge / Watch Priority List",
      aspect: 1.911,
    },
    {
      id: "search-results",
      src: "/images/projects/grimoire/search-results.png",
      label: "Search Results",
      aspect: 1.911,
    },
    {
      id: "statistics",
      src: "/images/projects/grimoire/statistics.png",
      label: "Statistics",
      aspect: 2.271,
    },
  ] satisfies ProjectScreenshot[],
  download: {
    path: "/downloads/grimoire/Grimoire-Setup-1.0.0.exe",
    fileName: "Grimoire-Setup-1.0.0.exe",
    platform: "Windows",
    sizeLabel: "~88 MB",
  } satisfies DownloadAsset,
};
