import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export async function generateCardsPdf(container: HTMLElement): Promise<void> {
  const pages = container.querySelectorAll<HTMLElement>('[data-pdf-page]');

  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  for (let i = 0; i < pages.length; i++) {
    if (i > 0) pdf.addPage();

    const canvas = await html2canvas(pages[i], {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.9);
    pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
  }

  pdf.save('ev-cards.pdf');
}
