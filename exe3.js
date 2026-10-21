function showFirstAndLast(arr)
{
    let arr2=[arr[0],arr[arr.length - 1]]
return arr2.filter(x=>typeof x==='string')
}
console.log(showFirstAndLast(['hello', 1, 2, 'world']));