export enum Brands {
  APPLE = 1,
  ASUS = 2,
  BRIT = 3,
  CATRICE = 4,
  COLEMAN = 5,
  GEEDIAR = 6,
  KANDYTOYS = 7,
  LEGO = 8,
  LOREAL = 9,
  MAYBELLINE = 10,
  SAMSUNG = 11,
  SAVORY = 12
}

export const brandLabels = {
  [Brands.APPLE]: 'Apple',
  [Brands.ASUS]: 'Asus',
  [Brands.BRIT]: 'Brit',
  [Brands.CATRICE]: 'Catrice',
  [Brands.COLEMAN]: 'Coleman',
  [Brands.GEEDIAR]: 'Geediar',
  [Brands.KANDYTOYS]: 'KandyToys',
  [Brands.LEGO]: 'Lego',
  [Brands.LOREAL]: 'Loreal',
  [Brands.MAYBELLINE]: 'Maybelline',
  [Brands.SAMSUNG]: 'Samsung',
  [Brands.SAVORY]: 'Savory'
};

export const brands = Object.values(Brands)
  .filter((value) => typeof value === 'number')
  .map((value) => ({
    value: value as Brands,
    label: brandLabels[value as Brands]
  }));
