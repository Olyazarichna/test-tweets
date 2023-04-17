export const updateUserFollowers = async (id, followersCount) => {
    try {
        const response = await fetch(`https://6437c7010c58d3b14578ec26.mockapi.io/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ followers: followersCount })
        });
        if (!response.ok) {
            throw new Error('Failed to update user followers count');
        }
    } catch (error) {
        console.log(error.message);
    }
};
