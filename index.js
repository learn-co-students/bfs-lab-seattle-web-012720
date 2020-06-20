function findAdjacent(name, vertices, edges){
    let adjacents = edges.filter(edge => edge.includes(name))
    .map(edge => {
        return edge.filter(node => node != name)[0]})
        .map(name => {
            return vertices.find(x => x.name == name)})
    .filter(x => x.distance == null)
    return adjacents
}


function addToQueue(vertex){
    !queue.includes(vertex) && !results.includes(vertex) ? queue.push(vertex) : null
}

function markDistanceAndPredecessor(predecessor, adjVertices){
    adjVertices.map(vertex => {
        vertex.predecessor = predecessor;
        vertex.distance = predecessor.distance +1
    })
}


function bfs(startingNode, vertices, edges){
    startingNode.distance = 0;
    let queue = [startingNode]
    let discovered = [startingNode]
  while(queue.length != 0){
    let currentNode = queue.shift()
    let adjacentVertices = findAdjacent(currentNode.name, vertices, edges)
    discovered = discovered.concat(adjacentVertices)
    markDistanceAndPredecessor(currentNode, adjacentVertices);
    queue = queue.concat(adjacentVertices)
    }
    return discovered
}

