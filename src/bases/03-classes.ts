

export class Pokemon{

    get imageUrl() : string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }

    constructor(
        public readonly id: number,
        public name: string,
        // public imageURL: STRING,
    ) {}

    public scream() {
        console.log(`${this.name.toUpperCase() }`);
    }

    speak()
    {
        console.log(`${this.name}, ${this.name}`)
    }

    async getMoves() {
        const resp = axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`);
        console.log(resp);
    }
}

export const charmander = new Pokemon(1, 'Charmander');

console.log(charmander);
charmander.scream();
charmander.speak();
charmander.getMoves();