const add = (a, b, cb) => {
    setTimeout(() => {
        let sum = a + b
        cb(sum)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})

console.log('End')