/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section style={{ height: 200}} className="card">
     
      <div className="card-body">
        <h2 className="text-capitalize card-title">
          {" "}
          {id} - {name}{" "}
        </h2>
            <div>
            {
                sprites.map(sprite=>( <img  key={sprite} src={sprite} alt="name" /> ))
            }
             {/* <img src="..." class="card-img-top" alt="..."> */}
            </div>
      </div>
    </section>
  );
};
