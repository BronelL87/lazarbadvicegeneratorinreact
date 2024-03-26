import { mySolidAdvice } from "../interfaces/interface";

export const getData = async () => {
    let randomAdvice = Math.floor(Math.random() * 224) + 1
    const promise = await fetch (`https://api.adviceslip.com/advice/${randomAdvice}`)
const data: mySolidAdvice = await promise.json();
return data;

}