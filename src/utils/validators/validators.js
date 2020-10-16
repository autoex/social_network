export const required =(value)=> {
    if (value) return undefined;

        return "Field is required"

};

export const maxLengthCreator =(maxLength)=> (value)=> {
    if (value && value.length < maxLength + 1) {
        return undefined;
    }
    else {
        return `Max length is ${maxLength} symbols`
    }
};
