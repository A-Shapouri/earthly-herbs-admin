'use client';
import { faker } from '@faker-js/faker';

export type Person = {
  id: string
  name: string
  image: string
  model: string
  price: string,
  quantity: string
  status: string
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
    name: faker.word.noun(),
    image: faker.image.avatar(),
    model: faker.word.adjective(),
    price: faker.number.int({ min: 100, max: 2000 }).toString(),
    quantity: faker.number.int({ min: 1, max: 200 }).toString(),
    status: faker.number.binary({ min: 0, max: 1 }),
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
  image: 'Image',
  name: 'Product Name',
  model: 'Model',
  price: 'Price',
  quantity: 'Quantity',
  status: 'Status',
  operations: 'Action',
};
