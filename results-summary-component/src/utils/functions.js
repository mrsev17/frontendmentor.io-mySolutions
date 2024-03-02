const fetchData = async (link) => {
    const apiUrl = link;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

export const getData = async (link) => {
    let result = null;
    try {
        const data = await fetchData(link);
        result = data;
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const selectColorCategory = (category) => {
    if (category === "Reaction")
        return {
            nameCat: "#FF5555",
            bg: "hsl(0, 100%, 95%)",
        };
    if (category === "Memory")
        return {
            nameCat: "#FFB21E",
            bg: "hsl(39, 100%, 95%)",
        };
    if (category === "Verbal")
        return {
            nameCat: "#00BB8F",
            bg: "hsl(166, 100%, 95%)",
        };
    if (category === "Visual")
        return {
            nameCat: "#1125D6",
            bg: "hsl(234, 85%, 95%)",
        };
};
