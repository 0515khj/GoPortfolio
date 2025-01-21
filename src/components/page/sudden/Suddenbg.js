import { useEffect } from "react";

export const Suddenbg = () =>{

     useEffect(() => {
            document.body.style.backgroundColor = '#607D8B'
            return () => {
              document.body.style.backgroundColor = ''; // 초기화
            };
          }, []);
          return null;
}  