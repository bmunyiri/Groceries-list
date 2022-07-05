
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
  return (
    <div className="Content">


{items.map(item =><ul>

<li className='item'>
<input 
type='checkbox'
item={item.checked}
/>
{item.item}
<BsHammer
role='button' 
tabIndex='0' 
/>
</li>
</ul>
)}


     
    </div>
  );
}
