function onlyEvenValues(arr)
{
    arr=arr.filter(x=>x%2==0)
    return arr;
}
console.log(onlyEvenValues([1,2,5,6]));