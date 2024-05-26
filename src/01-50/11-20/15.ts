const numRoutes: number[][] = [];

function getNumRoutes(sizeX: number, sizeY: number): number {
    numRoutes[sizeX] ??= [];

    if (numRoutes[sizeX]![sizeY] !== undefined)
        return numRoutes[sizeX]![sizeY]!;

    if (sizeX === 0 || sizeY === 0)
        return 1;

    let routes = getNumRoutes(sizeX - 1, sizeY);

    routes += getNumRoutes(sizeX, sizeY - 1);

    numRoutes[sizeX]![sizeY] = routes;

    return routes;
}

export default getNumRoutes(20, 20);
