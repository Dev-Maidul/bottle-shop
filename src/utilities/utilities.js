const getCartfromLs=()=>{
    const cartString=localStorage.getItem('cart');
    if(cartString){
        const convertData=JSON.parse(cartString);
        return convertData;
    }
    return [];
}

const saveCart=(cart)=>{
    const cartStringify=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringify);
}

const addItemToLocalStorage=(id)=>{
    const cart=getCartfromLs();
    const newCart=[...cart,id];

    saveCart(newCart)
}
export{getCartfromLs as getStoreCart,addItemToLocalStorage as addToStoreCart};