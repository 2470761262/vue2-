import Vue from 'vue';
let ob = Vue.observable({
    a:"smsms",
    b:2
});
function za(){
    ob.a = "好啊啊";
}
//函数式响应就更新了整个组件树的render
export default ()=>{
    return <div>

        3535
        {ob.a}
        <button onClick={za}>思绪西</button>
    </div>
}

// export default {
//     data(){
//         return{
//             a:"smsms"
//         }
//     },
//     methods: {
//             za(){
//                // this.a ="sfsfgg";
//                ob.a = "sfgsgg";
//             }
//     },
//     render() {
//         return <div>

//                 3535
//             {ob.a}
//                  <button onClick={this.za}>思绪西</button>
//              </div>
//     },
// }