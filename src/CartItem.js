import React from 'react';

const CartItem = () => {
    return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} />
            </div>
            <div className="right-block">
                <div style={{fontSize: '25px'}}>Phone</div>
                <div style={{color: '#777'}}>Rs. 1999</div>
                <div style={{color: '#777'}}>Qty: 1</div>
                <div className="cart-item-actions">
                    {/* buttons */}
                </div>
            </div>
        </div>
    );
}


const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;