// PDF Service Worker to help with PDF loading
// This intercepts requests for PDFs and manages them properly

self.addEventListener('install', function(event) {
  // Skip waiting so the service worker activates immediately
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
  // Claim all open clients so the service worker applies to all pages
  event.waitUntil(self.clients.claim());
});

// Intercept fetch requests for PDF files
self.addEventListener('fetch', function(event) {
  const url = new URL(event.request.url);
  
  // Only handle PDF files
  if (url.pathname.toLowerCase().endsWith('.pdf')) {
    event.respondWith(
      fetch(event.request)
        .then(function(response) {
          // Clone the response so we can return one and use the other
          const newResponse = response.clone();
          
          // Add appropriate headers for PDF files
          const headers = new Headers(response.headers);
          headers.set('Content-Type', 'application/pdf');
          headers.set('Content-Disposition', 'inline');
          
          // Create a new response with the PDF headers
          return new Response(newResponse.body, {
            status: response.status,
            statusText: response.statusText,
            headers: headers
          });
        })
        .catch(function(error) {
          console.error('Error fetching PDF:', error);
          return new Response('PDF could not be loaded', { status: 500 });
        })
    );
  }
}); 