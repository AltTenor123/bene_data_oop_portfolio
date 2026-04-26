interface PDFViewerProps {
  url: string;
  title?: string;
}

export default function PDFViewer({ url, title }: PDFViewerProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <object
        data={url}
        type="application/pdf"
        className="w-full h-full border-0 rounded-xl"
        title={title || 'PDF Document'}
        style={{ minHeight: '600px' }}
      >
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <p className="text-lg mb-4">Unable to display PDF directly.</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Open PDF in new tab
          </a>
        </div>
      </object>
    </div>
  );
}

