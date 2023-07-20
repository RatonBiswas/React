/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
import MenuItem from "./MenuItem"
const Menu = ({ items }) => {
  return (
    <div className='section-center'>
        {items.map((menuItem) =>{
            return <MenuItem key={menuItem.id} {...menuItem}/>            
        })}
    </div>
  );
};

export default Menu;
