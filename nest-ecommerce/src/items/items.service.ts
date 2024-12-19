import { Injectable } from '@nestjs/common';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    { id: 1, name: 'Item 1', description: 'Description 1', price: 100 },
    { id: 2, name: 'Item 2', description: 'Description 2', price: 200 },
    { id: 3, name: 'Item 3', description: 'Description 3', price: 300 },
  ];

  // Returns all items
  findAll(): Item[] {
    return this.items;
  }

  // Returns a single item based on the provided id
  findOne(id: number): Item {
    console.log(id)
    return this.items.find(item => item.id === Number(id));
  }
}
