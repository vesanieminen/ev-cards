import { useRef, useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { PdfExportLayout } from './components/PdfExport/PdfExportLayout';
import { MainPage } from './pages/MainPage';
import { RandomCardPage } from './pages/RandomCardPage';
import { cars } from './data/cars';
import { generateCardsPdf } from './utils/pdfGenerator';

export default function App() {
  const pdfRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  const handleExportPdf = useCallback(async () => {
    if (!pdfRef.current || isExporting) return;
    setIsExporting(true);
    try {
      await generateCardsPdf(pdfRef.current);
    } catch (err) {
      console.error('PDF export failed:', err);
    } finally {
      setIsExporting(false);
    }
  }, [isExporting]);

  return (
    <BrowserRouter>
      <Layout onExportPdf={handleExportPdf} isExporting={isExporting}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/random" element={<RandomCardPage />} />
        </Routes>
      </Layout>
      <PdfExportLayout ref={pdfRef} cars={cars} />
    </BrowserRouter>
  );
}
