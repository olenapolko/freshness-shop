export enum Category {
  ELECTRONICS = 1,
  CLOTHES = 2,
  TOYS = 3,
  SPORTS_OUTDOORS = 4,
  COSMETICS = 5
}

export const categoryLabels = {
  [Category.ELECTRONICS]: 'Electronics',
  [Category.CLOTHES]: 'Clothes',
  [Category.TOYS]: 'Toys',
  [Category.SPORTS_OUTDOORS]: 'Sports & Outdoors',
  [Category.COSMETICS]: 'Cosmetics'
};

export const categories = Object.values(Category)
  .filter((value) => typeof value === 'number')
  .map((value) => ({
    value: value as Category,
    label: categoryLabels[value as Category]
  }));
