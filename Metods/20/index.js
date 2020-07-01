const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1';

export async function getUserData(userId) {
    // let response;

    // try {
    //     const response = await fetch(`${baseUrl}/users/${userId}`)
    // } catch (error) {
    //     debugger;
    //     throw new Error('1111');
    // }

    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error('Can not find a user');
    //     }
    //     return response.json();
    // });

    const response = await fetch(`${baseUrl}/users/${userId}`)

    if (!response.ok) {
        throw new Error('Can not find a user');
    }

    return response.json();
}

export async function printUserData(userId) {
    try {
        const user = await getUserData(userId)
        console.log(user);
    } catch (er) {
        console.log(er);
    }
    // .then(userData => {
    //     console.log(userData);
    // })
    // .catch(error => {
    //     console.log(error.message);
    // });
}

//Try
//Catch
//Throw

printUserData(13)