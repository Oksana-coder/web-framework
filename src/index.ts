import { User } from './models/User';

const user = new User({ name: 'Oksana', age: 20 });

user.set({ name: 'NewName', age: 999 });

console.log(user.get('name'));
console.log(user.get('age'));