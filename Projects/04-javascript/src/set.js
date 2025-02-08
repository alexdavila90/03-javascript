export const setFunction = () => {
    const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
    myArray.sort();
    console.log(myArray);

    //SET genera una lista sin elementos repetidos

    const mySet = new Set(myArray);
    console.log(mySet);

    mySet.add(10);

    console.log(mySet.has(1)); //Verificar si existe un dato en el arreglo

    mySet.delete(5);
    console.log(mySet);
    console.log(mySet.size)

    mySet.forEach(number => console.log(number));

    const text = 'India';
    const mySet2 = new Set(text);
    mySet2.size;
    console.log(new Set("Firefox")); //F i r e f o x = 7
    console.log(new Set("firefox")); //f i r e o x = 6

};