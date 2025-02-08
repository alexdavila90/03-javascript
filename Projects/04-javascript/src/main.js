import { setFunction } from "./set.js";

const days=['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];

const restaurant = {
  timeShift1: '00:00-16:00',
  timeShift2: '16:00-00:00',
  shiftWorkers: [
    ['Mike', 'James', 'Michael', 'David'],
    ['Joseph', 'Thomas', 'Charles', 'Daniel']
  ],
  totalTipShift1: 4000,
  totalTipShift2: 5000,
  address: {
    city: 'NY',
    street: 'Arguban 6'
  },
  opendays: [days[0], days[3], days[4]]
};

const properties = Object.keys(restaurant);
for (const day of Object.values(restaurant.opendays)) {
  console.log(day);
}

Object.values(restaurant.opendays).forEach(day=>{console.log(day)});
Object.values(restaurant.address).forEach(addr=>{console.log(addr)});


//SET
setFunction();