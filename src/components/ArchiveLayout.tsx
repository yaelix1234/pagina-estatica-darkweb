import type { ReactNode } from "react";

interface IndiceItem {
  label: string;
  href: string;
}

interface ArchiveLayoutProps {
  indice?: IndiceItem[];
  boardName: string;
  children: ReactNode;
}

function ArchiveLayout({ indice, boardName, children }: ArchiveLayoutProps) {
  return (
    <div className="archive-layout">

      {indice && (
        <div className="board-index">
          <span className="label">/{boardName}/</span>
          {indice.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </div>
      )}

      <div className="archive-content">
        {children}
      </div>

    </div>
  );
}

export default ArchiveLayout;