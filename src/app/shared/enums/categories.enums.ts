export enum Category {
  Electronics = 'Electronics',
  Clothes = 'Clothes',
  Toys = 'Toys',
  SportsOutdoors = 'Sports & Outdoors',
  Cosmetics = 'Cosmetics'
}

export const categoryLabels = {
  [Category.Electronics]: 'Electronics',
  [Category.Clothes]: 'Clothes',
  [Category.Toys]: 'Toys',
  [Category.SportsOutdoors]: 'Sports & Outdoors',
  [Category.Cosmetics]: 'Cosmetics'
};

export const categories = Object.values(Category).map((value) => ({
  value: value as Category,
  label: categoryLabels[value as Category]
}));
