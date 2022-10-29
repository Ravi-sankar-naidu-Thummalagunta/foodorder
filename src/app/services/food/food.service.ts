import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';
import { tag } from 'src/app/shared/model/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  //   if (tag == 'all')
  //     return this.getAll()
  //   else
  //     return this.getAll().filter(food => food.tags?.includes(tag));
  // 
  }
  getAlltag():tag[]{
    return[
      {name:'All',count: 8},
      {name: 'FastFood', count:6},
      {name: 'SlowFood', count:2}
    ];
  }
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'pizza pepperoni',
        cookTime: '20-30',
        price: 238,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food-1.jpg',
        tags: ['FastFood', 'Pizza']
      },
      {
        id: 2,
        name: 'chicken pizza',
        cookTime: '30-40',
        price: 264,
        favorite: true,
        origins: ['italy'],
        star: 4.2,
        imageUrl: '/assets/food-2.jpg',
        tags: ['FastFood', 'Pizza']
      },
      {
        id: 3,
        name: 'sweetcorn pizza',
        cookTime: '20-30',
        price: 250,
        favorite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '/assets/food-3.jpg',
        tags: ['FastFood', 'Pizza']
      },
      {
        id: 4,
        name: 'Chicken Burger',
        cookTime: '15-30',
        price: 80,
        favorite: false,
        origins: ['belgium', 'france'],
        star: 4.2,
        imageUrl: '/assets/food-4.jpg',
        tags: ['FastFood', 'Burger']
      },
      {
        id: 5,
        name: 'Veg Burger',
        cookTime: '20-25',
        price: 65,
        favorite: true,
        origins: ['belgium', 'france'],
        star: 4.3,
        imageUrl: '/assets/food-5.jpg',
        tags: ['FastFood', 'Burger']
      },
      {
        id: 6,
        name: 'Corn Soup',
        cookTime: '20-30',
        price: 120,
        favorite: true,
        origins: ['indian'],
        star: 4.7,
        imageUrl: '/assets/food-6.jpg',
        tags: ['SlowFood', 'Soup']
      },
      {
        id: 7,
        name: 'French Fries',
        cookTime: '10-15',
        price: 35,
        favorite: false,
        origins: ['us', 'France'],
        star: 4.0,
        imageUrl: '/assets/food-7.jpg',
        tags: ['SlowFood', 'fries']
      },
      {
        id: 8,
        name: 'Meat balls',
        cookTime: '20-30',
        price: 80,
        favorite: true,
        origins: ['indian'],
        star: 4.6,
        imageUrl: '/assets/food-8.jpeg',
        tags: ['FastFood', 'Meat-balls']
      }
    ];
  }
}
