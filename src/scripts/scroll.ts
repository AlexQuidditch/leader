export function useScrollBy(element: Element, scrollBy: Omit<ScrollToOptions, 'behavior'>): void {
  return element.scrollBy({ ...scrollBy, behavior: 'smooth' });
}
