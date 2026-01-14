import { useForm }  from "./Form";

function Input(props) {
    const{ value,setValue,setError} = useForm();

    const handleChange = (e) => {
        setValue(e.target.value);
        setError(e.target.value? "": "Required");
    };

    return(
        <input value={value} onChange={handleChange}{...props}/>
    );
}

export default Input;