console.log('juejinhelper')
console.log($)
let length = 0;

function findPins() {
    const actionBoxs = document.querySelectorAll('.pin-action-row>.action-box');
    length = actionBoxs.length;
    for (const element of actionBoxs) {
        const mark =  element.getAttribute('mark');

        if(mark && mark == '1') continue;

        let datav = '';
        const firstEle = element.firstChild;
        const attributes = firstEle.attributes;
        for (const attr of attributes) {
            if(attr.name.indexOf('data-v-')!=-1){
                datav = attr.name;
                break;
            }
        }
        element.setAttribute("mark",'1')
        //整个沸点节点
        const pinEle = element.parentNode.parentNode;
        //沸点Id
        const pinId = pinEle.getAttribute('data-pin-id');
        //自定义沸点Id，用于点击事件
        const eleId = 'juejin-mark-'+pinId;
        //作者id
        const authorId = element.parentNode.parentNode.firstChild.getAttribute('data-author-id');
        //用户头像
        const headImg = document.querySelector('.pin-action-row>.action-box').parentNode.parentNode.querySelector('.pin-header > .account-group > div > a > img').getAttribute('src');
        let markEle = '';
        markEle += '<div '+datav+' class="share-action action plus-mark" id="'+eleId+'">';
        markEle += '<div '+datav+' class="action-title-box">';
        // markEle += '<span '+datav+' class="icon normal-icon share-icon">'
        markEle += '<span '+datav+' >'
        markEle += '<span style="position: relative;top: 2px;"><svg t="1678073933723" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3825" width="16" height="16"><path d="M512 832c-156.448 0-296.021333-98.730667-418.410667-291.605333a52.938667 52.938667 0 0 1 0-56.789334C215.978667 290.730667 355.552 192 512 192c156.448 0 296.021333 98.730667 418.410667 291.605333a52.938667 52.938667 0 0 1 0 56.789334C808.021333 733.269333 668.448 832 512 832z m0-576c-129.514667 0-249.461333 83.850667-360.117333 256C262.538667 684.149333 382.485333 768 512 768c129.514667 0 249.461333-83.850667 360.117333-256C761.461333 339.850667 641.514667 256 512 256z m0 405.333333c-83.210667 0-150.666667-66.858667-150.666667-149.333333S428.789333 362.666667 512 362.666667s150.666667 66.858667 150.666667 149.333333S595.210667 661.333333 512 661.333333z m0-64c47.552 0 86.101333-38.208 86.101333-85.333333S559.552 426.666667 512 426.666667c-47.552 0-86.101333 38.208-86.101333 85.333333s38.549333 85.333333 86.101333 85.333333z" fill="#8a8a8a" p-id="3826"></path></svg></span>';
        // markEle += '<span  style="position: relative;top: 2px;"><svg t="1678074042740" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4234" width="16" height="16"><path d="M512 192c156.448 0 296.021333 98.730667 418.410667 291.605333a52.938667 52.938667 0 0 1 0 56.789334C808.021333 733.269333 668.448 832 512 832c-156.448 0-296.021333-98.730667-418.410667-291.605333a52.938667 52.938667 0 0 1 0-56.789334C215.978667 290.730667 355.552 192 512 192z m0 128c-106.037333 0-192 85.962667-192 192s85.962667 192 192 192 192-85.962667 192-192-85.962667-192-192-192z m0 320c70.688 0 128-57.312 128-128s-57.312-128-128-128-128 57.312-128 128 57.312 128 128 128z" fill="#1296db" p-id="4235"></path></svg></span>';
        markEle += '</span> ';
        markEle += '<span '+datav+' class="action-title">插眼</span>';
        markEle += '</div>';
        markEle += '</div>';
        // console.log(markEle);
       
        /**
         *  beforebegin: 在 element 元素的前面;
            afterbegin:在 element 元素的第一个子节点前面;
            beforeend:在 element 元素的最后一个子节点后面;
            afterend:在 element 元素的后面。
         */
        firstEle.insertAdjacentHTML('beforebegin', markEle);
        const markObj = {pid:pinId,authorId:authorId,headImg:headImg};
        document.getElementById(eleId).addEventListener('click',function(e){
            markFunc(e,markObj)
        });

    }
}


function markFunc(e, markObj){
    console.log(e.currentTarget)
    console.log(markObj)
}
    


// 注意，必须设置了run_at=document_start 此段代码才会生效
// document.addEventListener('DOMContentLoaded',()=>{
//     setTimeout(findPins(),10000)
//     // findPins();
// })

window.onload=()=>{
    // length = 0;
    setInterval(()=>findPins(),1000);
}