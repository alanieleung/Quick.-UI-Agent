"use client";

import { useEffect, useRef, useState } from "react";
import { Smartphone, Monitor, Tablet } from "lucide-react";

type DeviceType = "desktop" | "tablet" | "mobile";

interface PreviewProps {
  code: string;
}

export default function Preview({ code }: PreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [device, setDevice] = useState<DeviceType>("desktop");
  const [iframeKey, setIframeKey] = useState(0);

  const deviceWidths = {
    desktop: "100%",
    tablet: "768px",
    mobile: "375px",
  };

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
                  min-height: 100vh;
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
  }, [code, iframeKey]);

  // Force re-render when device changes
  useEffect(() => {
    setIframeKey(prev => prev + 1);
  }, [device]);

  return (
    <div className="h-full flex flex-col bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Preview</span>
          <span className="text-xs text-gray-400 px-2 py-0.5 bg-gray-100 rounded-full">
            Live
          </span>
        </div>
        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setDevice("mobile")}
            className={`p-1.5 rounded-md transition-colors ${
              device === "mobile"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
            title="Mobile view"
          >
            <Smartphone className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDevice("tablet")}
            className={`p-1.5 rounded-md transition-colors ${
              device === "tablet"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
            title="Tablet view"
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDevice("desktop")}
            className={`p-1.5 rounded-md transition-colors ${
              device === "desktop"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
            title="Desktop view"
          >
            <Monitor className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Preview Area */}
      <div className="flex-1 overflow-auto bg-gray-100 p-4 sm:p-8">
        <div
          className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300"
          style={{ width: deviceWidths[device], minHeight: "500px" }}
        >
          <iframe
            key={iframeKey}
            ref={iframeRef}
            className="w-full h-full min-h-[500px] border-0"
            style={{ minHeight: "500px" }}
            title="Preview"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </div>
      </div>
    </div>
  );
}
