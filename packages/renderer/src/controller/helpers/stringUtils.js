export const stringUtils = {
    ucFirst: (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    seperateLookup: (str) => {
        const pattern = /^(.+?):(.+)$/;
        const matches = str.match(pattern);

        if (matches) {
            const lang = matches[1];
            const word = matches[2];
            
            return { lang, word };
        } else {
            console.error("Invalid word format");
            return null; // or handle the error in an appropriate way
        }
    },
};
export default stringUtils;
