/*

Build Order: You are given a list of projects and a list of dependencies (which
is a list of pairs of projects, where the second project is dependent on the
first project). All of a project's dependencies must be built before the project
is. Find a build order that will allow the projects to be built. If there is no
valid build order, return an error.

*/

class Node {
  constructor(val) {
    this.value;
    this.in1 = [];
    this.out = [];
    this.in = 0;
  }
}

class Graph {
  constructor(projects, dependencies) {
    this.projects = projects;
    this.dependencies = dependencies;
    this.nodes = {};

    this.createNodesHash();
    this.addDependencies();
  }

  addDependencies() {
    for (var i = 0; i < this.dependencies.length; i++) {
      this.nodes[this.dependencies[i][0]].out.push(this.dependencies[i][1]);
      this.nodes[this.dependencies[i][1]].in1.push(this.dependencies[i][0]);
      this.nodes[this.dependencies[i][1]].in += 1;
    }
  }

  createNodesHash() {
    for (let i = 0; i < this.projects.length; i++) {
      this.nodes[this.projects[i]] = new Node(this.projects[i]);
    }
  }
}

function buildOrder(projects, dependencies) {
  let graph = new Graph(projects, dependencies);
  let result = [];
  let len = projects.length;

  while (result.length < len) {
    let len = result.length;
    for (let i = 0; i < projects.length; i++) {
      if (graph.nodes[projects[i]].in == 0) {
        result.push(projects[i]);
        let curNode = graph.nodes[projects[i]];
        for (let j = 0; j < curNode.out.length; j++) {
          graph.nodes[curNode.out[j]].in -= 1;
        }
        projects = projects.slice(0, i).concat(projects.slice(i + 1, projects.length));
      }
    }
    if (result.length == len) {
      return "No valid build orders.";
    }
  }

  return result;
}

// let graph = new Graph(["a", "b", "c", "d", "e", "f"], [["a", "d"], ["f", "b"], ["b", "d"], ["f", "a"], ["d", "c"]]);
// console.log(graph);
console.log(buildOrder(["a", "b", "c", "d", "e", "f"], [["a", "d"], ["f", "b"], ["b", "d"], ["f", "a"], ["d", "c"]]));
console.log(buildOrder(["a", "b", "c", "d", "e", "f"], [["a", "d"], ["f", "b"], ["b", "d"], ["f", "a"], ["d", "c"], ["d", "a"]]));
