type MyEvent = 'click'|'scroll'|'mousemove'
type ExcludeEvent = Exclude<MyEvent,'scroll'>

const handleEvent = (event:ExcludeEvent)=>{
    console.log(`Handling event ${event}`)
}
handleEvent('click');
handleEvent('mousemove')
handleEvent('scroll') //Argument of type '"scroll"' is not assignable to parameter of type 'ExcludeEvent'.