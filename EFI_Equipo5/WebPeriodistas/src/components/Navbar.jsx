import React from 'react'; 
import { Menu } from 'primereact/menu';


let items = [
{ label: 'Periodistas', icon: 'pi pi-plus' },
{ label: 'Search', icon: 'pi pi-search' }
];

function Navbar() {
      return (
        <div>
            <Menu model={items} />
        </div>
    );
}
    

export default Navbar;
