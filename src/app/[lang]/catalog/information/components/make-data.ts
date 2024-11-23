'use client';
import { faker } from '@faker-js/faker';

export type Person = {
  id: string
  name: string
  sortOrder: string,
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
    name: faker.word.noun(),
    sortOrder: faker.number.int({ min: 1, max: 10 }).toString(),
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
  name: 'Information Title',
  sortOrder: 'Sort Order',
  operations: 'Action',
};
