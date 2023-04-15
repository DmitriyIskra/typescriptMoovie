import Moovie from '../moovie';
import Cart from '../cart';
const cart = new Cart()

test('add Moovie', () => {
    const moovieItem = new Moovie('Мстители', 'Avengers', 2012, 'USA', 'Avengers Assemble!', 'фантастика, боевик, фэнтези', '137 мин. / 02:17');

    cart.add(moovieItem)
    const result = cart.items

    expect(result[0]).toEqual({
        name: 'Мстители',
        nameEnglish: 'Avengers',
        year: 2012,
        country: 'USA',
        slogan: 'Avengers Assemble!',
        genre: 'фантастика, боевик, фэнтези',
        time: '137 мин. / 02:17'
      })
})

