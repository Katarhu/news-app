

const sliceString = (string: string, length: number) => {
    if( string.length < length ) return string;

    let slicedString = "";

    string.split(" ").reduce<number>((acc, currentString) => {

        if( currentString.length + acc > length ) {
            return currentString.length + acc;
        }

        if(  acc >= length ) {
            return acc;
        }

        slicedString += currentString + " ";

        return acc + currentString.length;
    }, 0);

    return slicedString;
}

export default sliceString;
