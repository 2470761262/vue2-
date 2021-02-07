
<script>
// import qpqp from './qpqp.js';
// import wdad from './wdad';
import asinput from './input';
    export default {
         render() {
        //      console.log("????");
        //   return h("div",[
        //       qpqp(h,{
        //          wo:55,
        //          gogo:777
        //      }),
        //       qpqp(h,{
        //          wo:55,
        //          gogo:666
        //      }),
        //      h(wdad)
        //   ]) 
        // return h({
        //     render(){
        //         return h("div",{},555)
        //     }
        // })
        var asd = {
            props:{

            }
        }
        // console.log(asd,"asd");
        // function a(){
        //     console.log("xxx");
        // }
        console.log(asd);
        return <asinput {...asd} onInput={(e)=>{
            console.log(e,"sfsfsf");
        }}></asinput>
        },
    }
</script>