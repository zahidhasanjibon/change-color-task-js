
function ab1 (arr,p,d) {
    for (let i = 1; i <= p ; i++) {
        if(d === 0){
        arr.push(arr.shift())
        }else {
            arr.unshift( arr.pop())
        }
    }
    return arr
}
// console.log(ab1([1,3,2,7,4,6],4,0))


function average (arr) {

    let max = Math.max.apply(0,arr)
    let min = Math.min.apply(0,arr)

    const maxArr = arr.filter(n => n === max)
    const minArr = arr.filter(n => n === min)

    const updatedArr = [...maxArr,...minArr]
    let sum = 0
    for (let i = 0; i < updatedArr.length; i++) {
            sum += updatedArr[i]
    }
    return sum / updatedArr.length
}

console.log(average([1,4,3,2,4,1]));

