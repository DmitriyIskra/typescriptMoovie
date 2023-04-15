import Buyable from './index'

export default class Moovie implements Buyable {
    name: string;
    nameEnglish: string;
    year: number;
    country: string;
    slogan: string;
    genre: string;
    time: string;

    constructor(name: string, nameEnglish: string, year: number, country: string, slogan: string, genre: string, time: any) {
        this.name = name,
        this.nameEnglish = nameEnglish,
        this.year = year,
        this.country = country,
        this.slogan = slogan,
        this.genre = genre,
        this.time = time
    }
}