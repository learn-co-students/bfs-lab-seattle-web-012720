function bfs(rootNode, vertices, edges){
  rootNode.distance = 0;
  let visited = [rootNode];
  let explored = [];
  
  while (visited.length > 0) {
    const current = visited.shift();
    console.log(current)
    const adjNodes = findAdjacent(current.name, vertices, edges);
    markDistanceAndPredecessor(current.name, adjNodes)
    visited.push(...adjNodes)
    explored.push(current)
  }

  return explored;
}

function findAdjacent(nodeName, vertices, edges) {
  const adjacent = edges.filter(edge => edge[0] === nodeName || edge[1] === nodeName);
  const adjNodeNames = adjacent.flat().filter(name => name !== nodeName)
  return vertices.filter(node => {
    const found = adjNodeNames.find(name => name === node.name)
    return found && node.distance === null
  })
}

function markDistanceAndPredecessor(currentNode, adjacentNodes) {
  const distance = currentNode.distance;
  adjacentNodes.forEach(node => {
    node.distance = distance + 1;
    node.predecessor = currentNode
  })
  return adjacentNodes
}
