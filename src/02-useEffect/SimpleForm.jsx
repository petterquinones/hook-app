

export const SimpleForm = () => {
  return (
    <>
        <h1> Simple form </h1>
        <hr/>
        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
        />

        
        <input
            type="email"
            className="form-control mt-2"
            placeholder="petter0915@gmail.com"
            name="email"
        />
    </>
  )
}
