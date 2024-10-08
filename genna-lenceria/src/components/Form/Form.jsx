import React from "react";

const Form = ({ handleChage, submit, formData, error }) => {
    return (
        < form onSubmit={submit}>

            {
                Object.keys(formData).map((key, i) => (
                    <div key={i}>
                        <label htmlFor={key}>Ingrese {key}</label>
                        <input type="text" name={key} id={key} onChange={handleChage} value={formData[key]} />
                        {
                            error[key] && <span>{error[key]}</span>
                        }
                    </div>
                ))
            }
            <button type='submit'> Create Order </button>
        </form >
    )
}

export default Form;

