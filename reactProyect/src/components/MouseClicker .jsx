import atardecer from './atardecer.jpg';

function MouseClicker() {
    const log= (event) => {console.log(event.target.name)};
    const mostrarRuta = (event) => {console.log(event.target.src)};
    return <button id="buton" name="one" onClick={log}>
    <p id="texto">one</p>
    <img src={atardecer} id='img' onClick={mostrarRuta} />
    </button>;
}
export default MouseClicker;