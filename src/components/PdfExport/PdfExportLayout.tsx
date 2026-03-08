import { forwardRef } from 'react';
import { CarSpec } from '../../types/car';
import { getSegment } from '../../data/segments';
import { Card } from '../Card';
import styles from './PdfExport.module.css';

interface PdfExportLayoutProps {
  cars: CarSpec[];
}

const CARDS_PER_PAGE = 4;

export const PdfExportLayout = forwardRef<HTMLDivElement, PdfExportLayoutProps>(
  ({ cars }, ref) => {
    const pages: CarSpec[][] = [];
    for (let i = 0; i < cars.length; i += CARDS_PER_PAGE) {
      pages.push(cars.slice(i, i + CARDS_PER_PAGE));
    }

    return (
      <div ref={ref} className={styles.pdfContainer}>
        {pages.map((pageCars, pageIndex) => (
          <div key={pageIndex} data-pdf-page className={styles.page}>
            <div className={styles.pageGrid}>
              {pageCars.map((car) => (
                <Card
                  key={car.id}
                  car={car}
                  segment={getSegment(car.segmentId)}
                  size="print"
                />
              ))}
            </div>
            <div className={styles.pageFooter}>
              EV Cards — Page {pageIndex + 1} of {pages.length}
            </div>
          </div>
        ))}
      </div>
    );
  }
);

PdfExportLayout.displayName = 'PdfExportLayout';
