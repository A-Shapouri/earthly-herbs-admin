'use client';
import { faker } from '@faker-js/faker';

export type Person = {
  id: string
  product: string
  author: string
  rating: number
  status: number
  createdAt: string
}

const range = (len: number) => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newCategory = (index: number): Person => {
  return {
    id: (index + 1).toString(),
    product: faker.word.noun(),
    author: faker.word.noun(),
    rating: faker.number.int({ min: 1, max: 5 }),
    status: faker.number.int({ min: 0, max: 1 }),
    createdAt: faker.date.past().toISOString().slice(0, 19).replace('T', ' '),
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!;
    return range(len).map((d): Person => {
      return {
        ...newCategory(d),
      };
    });
  };

  return makeDataLevel();
}

export const header = {
  product: 'Product',
  author: 'Author',
  rating: 'Rating',
  status: 'Status',
  createdAt: 'Created At',
  operations: 'Action',
};
