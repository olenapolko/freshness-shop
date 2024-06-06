export enum Brands {
  Apple = 'Apple',
  Asus = 'Asus',
  Brit = 'Brit',
  Catrice = 'Catrice',
  Coleman = 'Coleman',
  Geediar = 'Geediar',
  KandyToys = 'KandyToys',
  Lego = 'Lego',
  Loreal = 'Loreal',
  Maybelline = 'Maybelline',
  Samsung = 'Samsung',
  Savory = 'Savory'
}

export const brandLabels = {
  [Brands.Apple]: 'Apple',
  [Brands.Asus]: 'Asus',
  [Brands.Brit]: 'Brit',
  [Brands.Catrice]: 'Catrice',
  [Brands.Coleman]: 'Coleman',
  [Brands.Geediar]: 'Geediar',
  [Brands.KandyToys]: 'KandyToys',
  [Brands.Lego]: 'Lego',
  [Brands.Loreal]: 'Loreal',
  [Brands.Maybelline]: 'Maybelline',
  [Brands.Samsung]: 'Samsung',
  [Brands.Savory]: 'Savory'
};

export const brands = Object.values(Brands).map((value) => ({
  value: value as Brands,
  label: brandLabels[value as Brands]
}));
