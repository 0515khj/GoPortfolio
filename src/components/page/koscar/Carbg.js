import { useEffect } from "react";

export const Carbg = () =>{

     useEffect(() => {
            document.body.style.backgroundColor = '#1a94ff'; // 초록색 배경
            return () => {
              document.body.style.backgroundColor = ''; // 초기화
            };
          }, []);
          return null;
}