const API = "https://pokeapi.co/api/v2";
const pokeList = document.querySelector(".ctn-pkm");
const insertPoketemplate = async function(pokemon){
    let nameCapital = pokemon.name.substring(0,1).toUpperCase() + pokemon.name.substring(1)
    pokeList.innerHTML += `
    <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="w-full bg-blue-400">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${nameCapital}
            </h3>
    </div>
    `;
};

const getPokemonForms = async function*(...names) {
    for(pokemon of names){
        try{
            let result = await fetch(`${API}/pokemon-form/${pokemon}`);
            yield await result.json();
        }catch{
            yield {
                sprites: {
                    front_default: ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bd93812e-56f6-460f-9cd2-3346a0dfd5ef/ddfzoj8-ebb6bf91-06aa-4a66-b977-cbd29c9db01a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JkOTM4MTJlLTU2ZjYtNDYwZi05Y2QyLTMzNDZhMGRmZDVlZlwvZGRmem9qOC1lYmI2YmY5MS0wNmFhLTRhNjYtYjk3Ny1jYmQyOWM5ZGIwMWEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8NqQWMQAwkBlK5INfpn1N6mn6KYI0izXWX73v2p8gas"]
                },
                name: "spinnel"
            };
        }
    }
}

const main = async () => {
    try {
        let names = [ "jigglypuff", "bulbasaur", "mew", "geodude", "machoke", "vaporeon", "eevee", "charmeleon" ];
        let pokeGen = getPokemonForms(...names);
        while (true){
            pkmResult = await pokeGen.next();
            if(pkmResult.done){
                break;
            }
            insertPoketemplate(pkmResult.value);
            pokeList.classList.remove("opacity-0")
        }
        pkm
    } catch {

    }

}

main()