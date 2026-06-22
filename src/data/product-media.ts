// Single source of truth for product-page "How it works" media, keyed by product
// slug and locale-agnostic — change an image or attach a UI overlay here once and
// every locale picks it up. Mirrors the solution-section-images.ts pattern.
//
// - image:   full-bleed background photo for the showcase. Falls back to the
//            page's frontmatter `howItWorks.image` when omitted here.
// - overlay: name of the light-mode UI card laid on top of the image (resolved in
//            ProductOverlay.astro). Omit / null for image-only pages.

export interface ProductMedia {
  image?: string;
  overlay?: string | null;
}

export const productMedia: Record<string, ProductMedia> = {
  // procurement
  'central-kitchen': { image: '/media/product-central-kitchen.png', overlay: 'CentralKitchenFlow' },
  'supplier-price-tracking': { overlay: 'SupplierPrices' },
  'anomaly-detection': { image: '/media/product-anomaly-detection.png', overlay: 'AnomalyDetect' },
  'invoice-automation': { image: '/media/product-invoice-automation.png', overlay: 'InvoiceScan' },
  'ordering-suggestions': { overlay: 'OrderSuggestions' },
  // inventory-management
  'recipe-building': { overlay: 'RecipeCost' },
  'stock-counting': { image: '/media/product-stock-counting.png', overlay: 'StockCount' },
  'inventory-transfers': { image: '/media/product-inventory-transfers.png', overlay: 'InventoryTransfer' },
  'sales-and-usage': { image: '/media/product-sales-and-usage.png', overlay: 'SalesReport' },
  'wastage-tracking': { overlay: 'WastageLog' },
  // business-intelligence
  'performance-dashboards': { image: '/media/product-performance-dashboards.png', overlay: 'Performance' },
  'data-quality': { image: '/media/product-data-quality.png', overlay: 'DataQuality' },
  'variance-analysis': { image: '/media/bi-variance-analysis.jpg', overlay: 'Variance' },
  'api': { image: '/media/product-api.png' },
  'profitability': { image: '/media/product-profitability.png', overlay: 'Profitability' },
};
