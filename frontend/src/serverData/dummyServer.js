import { rec } from './recepiesData'

export class Server {
    get() {
        return rec
    }

    post(ingredients) {

        console.log(ingredients)

        let resultArr = []

        rec.forEach(element => {
            let counter = 0
            ingredients.forEach(ingredient => {
                if (element.composition_inter.includes(ingredient)) {
                    counter++
                }
            })
            if (counter) resultArr.push({ rec: element, includes: counter })
        });

        resultArr.sort((first, second) => second.includes - first.includes)

        return resultArr.filter((item) => item.includes).map(recepie => recepie.rec)
    }
}