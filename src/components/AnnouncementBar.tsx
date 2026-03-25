import { ArrowRight } from "lucide-react";

const AnnouncementBar = () => (
  <div className="announcement-bar">
    <a href="#products" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
      Shop Our Collection <ArrowRight className="w-4 h-4" />
    </a>
  </div>
);

export default AnnouncementBar;
