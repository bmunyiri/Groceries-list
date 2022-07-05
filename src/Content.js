
import {useState  } from 'react';
import {BsHammer} from 'react-icons/bs'




export default function Content() {

  const [items,setItems] = useState([
    {
      id:1,
      checked:false,
      item:'Speakers'

    },
      {
      id:2,
      checked:true,
      item:'Bluetooth'

    },
      {
      id:3,
      checked:true,
      item:'Microphone'

    },
      {
      id:4,
      checked:false,
      item:'Bumpboxx'

    },

  ])

 const handleCheck = (id) => {

const listItems = items.map((item) => item.id===id ? {...items,
 checked:!item.checked} :items);

 setItems(listItems)

localStorage.setItem('shoppinglist', JSON.stringify(listItems));

  }
 
  const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !==id ? {...items,
 checked:!item.checked} :items);

  setItems(listItems)

localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  return (
    <div className="main">


{items.map(item =><ul>

<li className='item'>
<input 
type='checkbox'
item={item.checked}
onChange={()=>handleCheck(item.id)}
/>
{item.item}
<BsHammer
role='button' 
tabIndex='0'
onClick={()=>handleDelete(item.id) }
/>
</li>
</ul>
)}
  
 </div>
  );
}
