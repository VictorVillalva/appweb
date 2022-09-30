import "../../../assets/Styles/style.css";

function Title({level,text}) {
    return (
        <>
        {level == 'h1' && <h1>{text}</h1>}
        {level == 'h2' && <h2>{text}</h2>}
        </>
    );
}

export default Title;