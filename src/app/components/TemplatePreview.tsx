"use client";

import { useEffect, useRef } from "react";

interface TemplatePreviewProps {
  code: string;
}

export default function TemplatePreview({ code }: TemplatePreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      
      if (doc) {
        const htmlContent = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <script src="https://cdn.tailwindcss.com"></script>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
              <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
              <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { 
                  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                  min-height: 100%;
                }
              </style>
            </head>
            <body class="bg-white">
              ${code}
            </body>
          </html>
        `;
        
        doc.open();
        doc.write(htmlContent);
        doc.close();
      }
    }
  }, [code]);

  return (
    <iframe
      ref={iframeRef}
      className="w-full h-full border-0"
      style={{ minHeight: "200px" }}
      title="Template Preview"
      sandbox="allow-scripts allow-same-origin"
    />
  );
}
