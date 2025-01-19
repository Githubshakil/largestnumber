function secandLarhest(arr){
    if (arr.length < 2){
        return null;
    }

    let first = -Infinity;
    let second = -Infinity;

for (let i = 0; i<arr.length; i++){
    if(arr[i] > first) {
        second = first;
        first = arr[i];

    }else if (arr[i] > second && arr[i] !== first ){
        second = arr[i]
    }
}
return second;


}

const inputArray = [10, 5, 20, 8, 12];
const result = secandLarhest(inputArray);
console.log(result);



