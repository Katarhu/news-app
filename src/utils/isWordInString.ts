

const isWordInString = (word: string, string: string) => {
    return string.toLowerCase().split(" ").some((stringWord) => word.toLowerCase() === stringWord);
}

export default isWordInString;
