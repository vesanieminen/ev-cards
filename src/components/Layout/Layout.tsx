import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutGrid, Shuffle, FileDown } from 'lucide-react';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
  onExportPdf?: () => void;
  isExporting?: boolean;
}

export function Layout({ children, onExportPdf, isExporting }: LayoutProps) {
  const location = useLocation();

  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>EV</span>
          <span className={styles.logoText}>Cards</span>
        </Link>

        <div className={styles.navLinks}>
          <Link
            to="/"
            className={`${styles.navLink} ${location.pathname === '/' ? styles.navLinkActive : ''}`}
          >
            <LayoutGrid size={16} />
            All Cards
          </Link>
          <Link
            to="/random"
            className={`${styles.navLink} ${location.pathname === '/random' ? styles.navLinkActive : ''}`}
          >
            <Shuffle size={16} />
            Random
          </Link>
        </div>

        {onExportPdf && (
          <button
            className={styles.exportButton}
            onClick={onExportPdf}
            disabled={isExporting}
          >
            <FileDown size={16} />
            {isExporting ? 'Exporting...' : 'Export PDF'}
          </button>
        )}
      </nav>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
