import { personalInfo } from "@/constants/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-bg-accent bg-white py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate">
            © {new Date().getFullYear()} {personalInfo.fullName}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`https://${personalInfo.linkedIn}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate hover:text-navy transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm text-slate hover:text-navy transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
