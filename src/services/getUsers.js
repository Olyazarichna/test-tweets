export const getUsers = async (page) => {
    try {
        const response = await fetch(`https://6437c7010c58d3b14578ec26.mockapi.io/users?page=${page}&limit=10`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error.message)
    }
}
