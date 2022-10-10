import React ,{useState, useEffect}from 'react'



const Context = React.createContext()


function ContextProvider({children}){
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(()=>{
        const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
        const data = fetch(url) 
            .then(response => response.json())
            .then(data => setAllPhotos(data))
    
        
    },[])

  
    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                console.log(id)
                console.log(!photo.isFavorite)
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }
    //add items to cart
    function addToCart(newItem){
        setCartItems(prevItems => [...prevItems, newItem])
    }
    //remove items from cart
    function removeFromCart(id){
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    //clear out cart
    function clearCart(){
        setCartItems([])
    }
   console.log(cartItems)

    return(
        <Context.Provider value={{allPhotos, toggleFavorite, addToCart, removeFromCart, cartItems, clearCart}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}