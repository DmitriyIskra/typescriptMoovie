export default interface Buyable {
    name: string,
    nameEnglish: string,
    year: number,
    country: string,
    slogan: string,
    genre: string,
    time: any,
}

import Moovie from './moovie';
import Cart from './cart'

const moovieItem = new Moovie('Мстители', 'Avengers', 2012, 'USA', 'Avengers Assemble!', 'фантастика, боевик, фэнтези', '137 мин. / 02:17');
const moovieItem2 = new Moovie('Мстители2', 'Avengers', 2015, 'USA', 'Avengers Assemble!', 'фантастика, боевик, фэнтези', '137 мин. / 02:17');



const cart = new Cart();
cart.add(moovieItem)
cart.add(moovieItem2)
