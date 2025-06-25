export const getGridTemplateColumns = (width: number): string => {
  if (width >= 1024) return 'repeat(3, 1fr)';
  if (width >= 912) return 'repeat(2, 1fr)';
  return '1fr';
};
