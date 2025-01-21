import { useEffect } from "react";

export const MyrealTripbg = () =>{

     useEffect(() => {
            document.body.style.backgroundColor = '#FFA726'
            return () => {
              document.body.style.backgroundColor = ''; // 초기화
            };
          }, []);
          return null;
}  