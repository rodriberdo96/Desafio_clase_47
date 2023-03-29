import { React, ReactDOMServer } from "./deps.ts";

const Varios = ( props:Array<string>) =>{
    const colors = Object.values(props)
    return(
        <div>
            <h3>Los colores ingresados fueron:</h3>
            <ul>
                {colors.map((color, index) => { 
                    return <li key={index} style={{color: color}}>{color} </li>
                })}
            </ul>
        </div>
    )
}

export default (props:Array<string> = [])=>
`<!DOCTYPE html>
${ReactDOMServer.renderToString((
    <>
    <form action="/" method="post"> 
        <input name="textColor" placeholder="Ingrese un color en inglés" type="text" />
        <button type="submit">Enviar</button>
    </form>
    <hr/>
    < Varios {...props} />
    </>
))}`