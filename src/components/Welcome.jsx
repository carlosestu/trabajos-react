function Welcome({name}) {
    return <div className="welcome"><h1 id="saludo">Welcome, {name ? name : "guest"}!</h1></div>
    }
    
    export default Welcome;