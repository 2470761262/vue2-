import smoo from './smoo';
// var x = {

//     cr(){
//         // functional: true,
//        // render(h,context){
//        //     return (
//        //         <div>
//        //             <div>555</div>
//        //             <p>{context.data.nihao}</p>
//        //             <button onClick={gogo}>gogo</button>
//        //         </div>
//        //     );
//        // }
//            // return ()=>{
//            //   return  <smoo></smoo>
//            // } ;
//            console.log(555);
//     }
// }

import Vue from 'vue';
export default (h,a)=>{
    console.dir(Vue);
      return h(smoo,{
          props:{
            ...a
          }
      })
};