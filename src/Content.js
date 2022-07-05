
import {useState  } from 'react';
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


{items.map(item =>

<li>
<input 
type='checkbox'
item={item.checked}
/>
{item.item}
<button> Delete</button>
</li>)}


     
    </div>
  );
}
