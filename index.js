import axios from "axios";

const start = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151");
    const data = response.data.results.slice(0, 3);
    console.log(data)


    for(const item of data) {
        // const response = await axios.get(item.url);
        const {data} = await axios.get(item.url);

        const pokemon = {
            id: data.id,
            name: data.name,
            order: data.order,
            base_experience: data.base_experience,
            weight: data.weight,
            height: data.height
        }

        console.log(pokemon);
    }
};

start();