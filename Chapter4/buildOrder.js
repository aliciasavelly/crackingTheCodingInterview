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
  let projectHash = {};
  let result = [];

  for (let i = 0; i < projects.length; i++) {
    projectHash[projects[i]] = [];
  }

  // console.log(projectHash);
  for (let i = 0; i < dependencies.length; i++) {
    projectHash[dependencies[i][0]].push(dependencies[i][1]);
  }

  // console.log(projectHash);
  let notDone = true;
  while (notDone) {
    notDone = false;

    for (let i = 0; i < projects.length; i++) {
      if (projectHash[projects[i]].length == 0) {

      }
    }
  }
}

// console.log(buildOrder(["a", "b", "c", "d", "e", "f"], [["a", "d"], ["f", "b"], ["b", "d"], ["f", "a"], ["d", "c"]]));
let graph = new Graph(["a", "b", "c", "d", "e", "f"], [["a", "d"], ["f", "b"], ["b", "d"], ["f", "a"], ["d", "c"]]);
console.log(graph);
