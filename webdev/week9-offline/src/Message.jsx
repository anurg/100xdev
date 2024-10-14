
export function Message() {
    const [isVisible, setIsVisible] = useState(true);
    function Toggle() {
      setIsVisible(!isVisible);
    }
    return <div>
       {isVisible?<div>Message is Visible </div> : null}
       <button onClick={Toggle}>Toggle</button>
    </div>
  }