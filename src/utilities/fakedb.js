// use local storage to manage cart data
const addToDb = vacation =>{
    //setting vacation value from db
    localStorage.setItem('shopping-cart', JSON.stringify(vacation));
}

const getFromDb = () => {
    //getting value from db
    let dbValue = localStorage.getItem('shopping-cart');
    if (dbValue) {
        return JSON.parse(dbValue);        
    }
}
export {
    addToDb,
    getFromDb
}