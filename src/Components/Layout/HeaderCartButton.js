import { useContext} from 'react';
import CartIcon from '../Cart/cartIcon'
import CartContext from '../../Store/CartContext';
import classes from './HeaderCartButton.module.css'


const HeaderCartButton = (props) => {
 const cartCtx= useContext(CartContext);

  const numberOfCartItem=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount;
  },0);
  
  return (
    <div>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            {numberOfCartItem}
        </span>
    </button>
    </div>
  )
}

export default HeaderCartButton;