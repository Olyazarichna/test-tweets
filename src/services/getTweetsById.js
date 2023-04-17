export const getTweetsById = async (id) => {
    try {
        const response = await fetch(`https://6437c7010c58d3b14578ec26.mockapi.io//users/:id=${id}/tweets`)
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error.message)
    }
}
