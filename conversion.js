const hexBaseFunc = () => {
    const hexBase = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4, 
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15
    }
    return hexBase;
}

// check if item's index is even and if so, copies it to the new array
const evenIndices = (arr) => {
    let evenIndicesArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenIndicesArray.push(arr[i]);
        }
    }
    return evenIndicesArray;
}

// check if item's index is odd and if so, copies it to the new array
const oddIndices = (arr) => {
    let oddIndicesArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            oddIndicesArray.push(arr[i]);
        }
    }
    return oddIndicesArray;
}

// For RGB to Hex conversion
// checks if item's index is odd. if so, it multiplies it by 16 and appends to map array
// if not the item is left alone and is appended to map array
const multiplyOddIndices = (arr) => {
    const oddMap = arr.map(item => {
        if (arr.indexOf(item) % 2 !== 0) {
            return item * 16;
        } else {
            return item;
        }
    });
    return oddMap;
}

// adds value of the first hex code to the value in the oddIndices array to give you the full rgb value
const rgbValue = (value, arr) => {
    let hexArray = [];
    for (var i = 0; i < value.length; i++) {
        hexArray.push(value[i] + oddIndices(arr)[i])
    }
    return hexArray;
}

// splits the decimal value from the whole number and places it as an item in the array
const rgbSplit = (rgbMap) => {
    let splitArray = [];
    for (var i = 0; i < rgbMap.length; i++) {
            splitArray.push((rgbMap[i] > 0) ? Math.floor(rgbMap[i]) : Math.ceil(rgbMap[i]),
            rgbMap[i] % 1);
    }
    return splitArray;
}

// finds the key of a value in an object
const getKeyByValue = (object, value) => Object.keys(object).find(key => object[key] === value);

// converts hex code to rgb color code
const hexToRGB = (colorCode) => {
    let colorArray = [...colorCode];
    const colorMap = colorArray.map(item => hexBaseFunc()[`${item}`]);
    const firstHexValue = evenIndices(colorMap).map(item => item * 16);
    console.log(`rgb(${rgbValue(firstHexValue, colorMap)})`);
}

// converts rgb code to hex code
const rgbToHex = (r,g,b) => {
    const rgbArray = [r,g,b];
    const rgbMap = rgbArray.map(item => item / 16);
    const convertMap = multiplyOddIndices(rgbSplit(rgbMap)).map(item => {
        return getKeyByValue(hexBaseFunc(), item)
    });
    const hexValue = convertMap.join('');
    console.log(`#${hexValue}`);
}
