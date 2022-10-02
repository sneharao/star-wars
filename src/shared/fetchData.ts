
export const getCharacterList = async () => {
    try {
        let response = await fetch(
            'https://swapi.dev/api/people/?page=1',
            {
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        let responseJson = await response.json();
        return responseJson.results;
    } catch (error) {
        throw error;
    }
};

export const getPlanetName = async (url: string) => {
    try {
        let response = await fetch(
            url,
            {
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        let responseJson = await response.json();
        return responseJson.name;
    } catch (error) {
        console.error(error);
    }
}
