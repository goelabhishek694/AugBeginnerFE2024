import React, {useEffect, useState} from 'react'
const items = [
    {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Item 1',
      description: 'Description of item 1',
    },
    {
      id: 2,
      imageUrl: 'https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Item 2',
      description: 'Description of item 2',
    },
    {
      id: 3,
      imageUrl: 'https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Item 3',
      description: 'Description of item 3',
    },
  ];

function Caraousel() {
    const [currentItem, setCurrentItem] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setNext();
        },2000);
        //to prevent memory leaks
        return () => clearInterval(timer);
    },[currentItem]);
    
    const setPrev = () => {
        let previdx = currentItem -1 ;
        if(previdx<0) previdx=previdx+items.length;
        setCurrentItem(previdx);
    }

    const setNext = () => {
        let nextIdx = (currentItem + 1) % items.length;
        setCurrentItem(nextIdx);
    }

  return (
    <div>
        <button onClick={setPrev}>Prev</button>
        <div className='carasouel-item'>
            <img height="200" width="200" src={items[currentItem]["imageUrl"]} alt={items[currentItem]["title"]}></img>
            <h2>{items[currentItem]["title"]}</h2>
            <p>{items[currentItem]["description"]}</p>
        </div>
        <button onClick={setNext}>Next</button>
    </div>
  )
}

export default Caraousel