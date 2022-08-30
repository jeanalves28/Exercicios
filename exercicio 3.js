// retornar o maior e a menor string

let array = ['java', 'javascript', 'python', 'html', 'css'], countArray = [], countString;

for (let i = 0; i < array.length; i++)
{
    countString = '';

    countString = array[i];

    countString = countString.length;

    countArray.push(countString);
}

console.log(`O maior elemento é ${array[countArray.indexOf(Math.max.apply(null, countArray))]} com ${Math.max.apply(null, countArray)} letra(s)`);

console.log(`
E o menor elemento é ${array[countArray.indexOf(Math.min.apply(null, countArray))]} com ${Math.min.apply(null, countArray)} letra(s)`);