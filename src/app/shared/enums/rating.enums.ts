export enum Rating {
  ONE_STAR = 1,
  TWO_STARS = 2,
  THREE_STARS = 3,
  FOUR_STARS = 4,
  FIVE_STARS = 5
}

export const ratingLabels = {
  [Rating.ONE_STAR]: '★☆☆☆☆',
  [Rating.TWO_STARS]: '★★☆☆☆',
  [Rating.THREE_STARS]: '★★★☆☆',
  [Rating.FOUR_STARS]: '★★★★☆',
  [Rating.FIVE_STARS]: '★★★★★'
};

export const ratings = Object.values(Rating)
  .filter((value) => typeof value === 'number')
  .map((value) => ({
    value: value as Rating,
    label: ratingLabels[value as Rating]
  }));
