function printID(id: number | string | boolean) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
}