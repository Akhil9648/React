
function customRender(reactElement,container){
    /*
    const domelement=document.createElement
    (reactElement.type)
    domelement.innerHTML=reactElement.Children
    domelement.setAttribute('href',reactElement.props.href)
    domelement.setAttribute('target',reactElement.props.target)
    container.appendChild(domelement)
    */
   const domElement=document.createElement(reactElement.type)
   domElement.innerHTML=reactElement.Children
   for(const prop in reactElement.props){
    if(prop==='Children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])
   }
   container.appendChild(domElement)
}
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    Children:'Click me to Visit Google'
}

const mainContainer=document.querySelector('#root')
customRender(reactElement,mainContainer)