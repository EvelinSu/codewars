function cleanString(s) {
    while (s.includes('#')) {
        s = s.replace(/[^#]?#/, '');
    }
    return s;
}

console.log(cleanString('#fjnwui#NI#(*N#ION#Onfjen################Io4f')); // 'Io4f'
