import { useEffect } from 'react';
export default function useKey(key,action){
    useEffect(function(){
    function calback(e){
      if(e.code.toLowerCase() === key.toLowerCase()){
        action();
      }
    }

    document.addEventListener('keydown',calback);
    return function(){
      document.removeEventListener('keydown',calback);
    }
  },[action,key])
}