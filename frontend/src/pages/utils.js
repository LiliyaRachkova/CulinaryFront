

export const getFiltered = (data, address) => {
    const decodedAddress = decodeURI(address.search)
    const ingredients = decodedAddress.split('=')[1].split('+')

    let resultArr = []

        data?.forEach(element => {
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