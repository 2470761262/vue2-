
<script>
// import qpqp from './qpqp.js';
// import wdad from './wdad';
import aa from "./a.vue";
import bb from "./b.vue";
    export default {
        components:{
            aa,
            bb
        },
        data(){
            return {
                xx:"aa"
            }
        },
         render(h) {
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
        // var asd = {
        //     props:{
        //          value:'10',
        //     },
        //     attrs:{
        //         xiexieni:55
        //     }
        // }
        //  return <asinput value={this.xx} xixi="2222"></asinput>
        //  return <asinput vModel={this.xx}></asinput>
        // console.log(asd,"asd");
        // function a(){
        //     console.log("xxx");
        // }
        //    return <asinput {...asd} onInput={(e)=>{
        //     console.log(e,"sfsfsf");
        // }}></asinput>
    //,h("div",{},"为什么")
    // console.log(h("div",{},1));
    //     return h("div",{
    //       attrs:{
    //          // contenteditable:true
    //       }
    //     },["谢谢你谢谢你",h(asinput,{
    //         props:{
    //             value:this.xx+""
    //         },
    //         on:{
    //             input:(value)=>{
    //                 console.log("value",value);
    //                 this.xx = value;
    //                 this.$forceUpdate()

    //                 console.log(this);
    //             },
    //         }
    //     },"xxxx"),this.xx])
    //     },
    setTimeout(()=>{
        this.xx = "bb";
    },2000)

            //动态组件
                return h(this.xx);
         }
    }
</script>