"use scrict"
import dayjs from "dayjs";

export class Movie {
    constructor(id, title, favorite=false,watchDate=null, rating=null, userId=1) {
        this.id = id;
        this.title = title;
        this.favorite = favorite;
        this.watchDate = watchDate ? dayjs(watchDate, "YYYY-MM-DD") : null;
        this.rating = rating ? rating : null;
        this.userId = userId;
    }
    
    toString() {
        return `Id:${this.id}, Title: ${this.title}, Favorite: ${this.favorite}, Watch date: ${this.watchDate?.format("YYYY-MM-DD") ?? "n/a"}, Rating: ${this.rating}, User id: ${this.userId}`;
    }
}