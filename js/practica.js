const multiply = (a,b) =>
{
    let resultado = 0;
    const positivo = Math.abs(b)==b;
    for(i=0;i<Math.abs(b);i++){
        resultado = positivo ? resultado + a: resultado - a
    }

    return resultado;
}

const a = multiply(50,-50)
console.log(a)

const getBiggest = (arr) => arr.reduce((acc, el) => acc > el ? acc : el)
const b = getBiggest([50, -1500, 1000, 0, 1, 54])
console.log(b)


const clean = (arr) => arr.reduce((acc, el) => {
    if(el) { acc.push(el) }
    return acc
}, [])
const c = clean([1,undefined, null,0,2,3])
console.log(c)