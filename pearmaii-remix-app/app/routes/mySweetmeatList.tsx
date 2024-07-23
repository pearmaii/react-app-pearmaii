import {useState} from 'react';
import {sweetmeatList} from './data'

export default function Gallery() {
    const [index, setIndex] = useState(0);
    function handleClick() {
        setIndex(index+1);
    }
    function handleClickBack(){
        setIndex(index-1);
    }
    let sculpture = sweetmeatList[index];
    return (
        <>
        <button onClick={handleClick} disabled={index === sweetmeatList.length -1}>
         Next
        </button>
        <h2>
            <i>{sculpture.name} </i> by {sculpture.ingredient}
        </h2>
        <h3> 
            ({index+1} of {sweetmeatList.length})
        </h3>
        <img 
        src={sculpture.url}
        alt={sculpture.alt}
        />
        <p>
            {sculpture.description}
        </p>
        <button onClick={handleClickBack} disabled ={index === 0}>
            Back
          </button>
        </>
    );
}