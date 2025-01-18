import { useEffect } from "react";

export const Teambg = () =>{

     useEffect(() => {
            document.body.style.backgroundColor = '#038c8c'; // 초록색 배경
            return () => {
              document.body.style.backgroundColor = ''; // 초기화
            };
          }, []);
          return null;
}