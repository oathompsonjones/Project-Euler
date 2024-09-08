const numRoutes: number[][] = [];

const getNumRoutes = (sizeX: number, sizeY: number): number => {
    numRoutes[sizeX] ??= [];

    if (numRoutes[sizeX][sizeY] !== undefined)
        return numRoutes[sizeX][sizeY];

    if (sizeX === 0 || sizeY === 0)
        return 1;

    numRoutes[sizeX][sizeY] = getNumRoutes(sizeX - 1, sizeY) + getNumRoutes(sizeX, sizeY - 1);

    return numRoutes[sizeX][sizeY];
};

export default getNumRoutes(20, 20);
