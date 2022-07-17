window.jQuery = function(selectorOrArrayOrTemplate){
    let elements
    if(typeof selectorOrArrayOrTemplate === 'string'){
      if(selectorOrArrayOrTemplate[0] === '<'){
        // 创建 div
        elements=[createElement(selectorOrArrayOrTemplate)]
      }else{
        // 查找 div
        elements = document.querySelectorAll(selectorOrArrayOrTemplate)
      }
    }else if(selectorOrArrayOrTemplate instanceof Array){
      elements = selectorOrArrayOrTemplate
    }
    return{
        find(selector){
            let array = []
            for(let i =0;i<elements.length;i++){
              const elements2 = Array.from(elements[i].querySelectorAll(selector))
              array = array.concat(elements2)
            }
            const newApi =jQuery(array)
            // array.oldApi = this // this 就是 旧 api
            return newApi
        },
        addClass(className){
            for(let i=0;i<elements.length;i++){
              const element = elements[i]
              element.classList.add(className)
            }
            return this
        }
        

    }
}
window.$ = window.jQuery