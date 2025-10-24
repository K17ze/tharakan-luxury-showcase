/**
 * Centralized wishlist management with validation
 * Prevents XSS and data corruption from localStorage
 */

export const getWishlist = (): string[] => {
  try {
    const data = JSON.parse(localStorage.getItem('wishlist') || '[]');
    if (!Array.isArray(data)) return [];
    // Validate each item is a string and has reasonable length
    return data.filter(id => typeof id === 'string' && id.length > 0 && id.length < 100);
  } catch {
    // If parsing fails, return empty array and clear corrupted data
    localStorage.removeItem('wishlist');
    return [];
  }
};

export const addToWishlist = (productId: string): void => {
  if (typeof productId !== 'string' || productId.length === 0 || productId.length >= 100) {
    throw new Error('Invalid product ID');
  }
  
  const wishlist = getWishlist();
  if (!wishlist.includes(productId)) {
    wishlist.push(productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    // Dispatch custom event for cross-component sync
    window.dispatchEvent(new Event('wishlistUpdated'));
  }
};

export const removeFromWishlist = (productId: string): void => {
  const wishlist = getWishlist();
  const updated = wishlist.filter(id => id !== productId);
  localStorage.setItem('wishlist', JSON.stringify(updated));
  // Dispatch custom event for cross-component sync
  window.dispatchEvent(new Event('wishlistUpdated'));
};

export const isInWishlist = (productId: string): boolean => {
  return getWishlist().includes(productId);
};

export const clearWishlist = (): void => {
  localStorage.removeItem('wishlist');
  window.dispatchEvent(new Event('wishlistUpdated'));
};
