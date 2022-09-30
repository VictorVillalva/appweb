import "../../assets/Styles/formulario.css";
import Title from "../atoms/Title/Title";
import Input from "../atoms/Input/Input";
import Label from "../atoms/Label/Label";
import Button from "../atoms/Button/Button";


function Formulario() {
    return (  
        <>
        <div className="container">
            <Title level="h1" text={"FORMULARIO"}/>
            <Label text={"Nombre : "}/>
            <Input type="text" placehorder='Ingresa Nombre'/>
            <br/><br />
            <Label text={"Apellido : "} />
            <Input type="text" placehorder='Ingresa Nombre'/>
            <br/><br />
            <Label text={"Fecha de Nacimiento : "}/>
            <Input type="date"/>
            <br /><br />
            <Label text={"Genero : "}/>
            <Input type={"radio"}/>M
            <Input type="radio"/>F
            <Input type="radio"/>Otro
            <br/><br />
            <Label text={"Ingrese su Edad : "}/>
            <Input type="number"/>
            <br/><br />
            <Label text={"Ingrese su correo electronico : "}/>
            <Input type="email"/>
            <br/><br />
            <Label text={"Ingrese una contraseña : "}/>
            <Input type="password"/>
            <br/><br />
            <Label text={"Ingrese su numero telefonico : "}/>
            <Input type="tel"/>
            <br/><br />
            <Button text={"REGISTRAR"}></Button>
        </div>
        </>
    );
}

export default Formulario;