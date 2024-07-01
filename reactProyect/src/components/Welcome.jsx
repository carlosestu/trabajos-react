import Age from './Age.jsx'

function Welcome(props) {
    return <div>
    <p>Welcome, <strong>{props.name}!</strong></p>
    <p><Age  messageAge="your age is " age="22" /></p>
    <p><Age condition="mayor de edad" age="22" messageAge="eres mayor de edad, ya que tu edad es "/></p>
    <p><Age condition="edad" age="22" messageAge="tu edad existe y es "/></p>
    <p><Age condition="edad entre 18 y 65" age="22" messageAge="tu edad esta entre 18 y 65"/></p>
    <p><Age condition="john" name={props.name} age="22" messageAge="te llamas John y tu edad esta entre 18 y 65"/></p>
    </div>
    
}
export default Welcome;