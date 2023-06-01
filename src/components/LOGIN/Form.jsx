import { Fragment } from "react";
import { useState } from "react"





export function Form(setUser) {

    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()

        if (nombre === "" || contraseña === "") {
            setError(true)
            return
        }
        setError(false)


    }
    const [openProfile, setOpenProfile]= useState (false)



    return (
      

            <section className=" form1">
                <>
                    <h1 className="titulo1"> Inicio de sesión </h1>
                    <form className="formulario" onSubmit={handleSubmit}>



                        <input type="text"
                            placeholder="Email "
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />

                        <input type="password"
                            placeholder="Contraseña"

                            value={contraseña}
                            onChange={e => setContraseña(e.target.value)}
                        />

                        <button className="logn">Entrar</button>

                        {error && <p>¡Todos los campos son requeridos!</p>}



                    </form>

                    <button className="account">Crear cuenta</button>


                </>
            </section>
        



    )
}