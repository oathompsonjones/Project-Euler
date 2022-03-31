let numRoutes = [];

function getNumRoutes(sizeX, sizeY) {
    numRoutes[ sizeX ] = numRoutes[ sizeX ] || [];

    if (numRoutes[ sizeX ][ sizeY ])
        return numRoutes[ sizeX ][ sizeY ];
    if (sizeX == 0 || sizeY == 0)
        return 1;

    let routes = getNumRoutes(sizeX - 1, sizeY);
    routes += getNumRoutes(sizeX, sizeY - 1);

    numRoutes[ sizeX ][ sizeY ] = routes;

    return routes;
};

console.log(getNumRoutes(20, 20));