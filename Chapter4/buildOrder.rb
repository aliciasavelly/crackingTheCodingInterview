# Build Order: You are given a list of projects and a list of dependencies
# (which is a list of pairs of projects, where the second project is dependent
# on the first project). All of a project's dependencies must be built before
# the project is. Find a build order that will allow the projects to be built.
# If there is no valid build order, return an error.

class Node
  attr_accessor :value, :out, :in

  def initialize(value)
    @value = value
    @out = []
    @in = 0
  end
end

class Graph
  attr_accessor :projects, :dependencies, :nodes

  def initialize(projects, dependencies)
    @projects = projects
    @dependencies = dependencies
    @nodes = {}

    createNodesHash()
    addDependencies()
  end

  def createNodesHash
    @projects.each do |el|
      @nodes[el] = Node.new(el);
    end
  end

  def addDependencies
    @dependencies.each do |el|
      @nodes[el[0]].out << el[1]
      @nodes[el[1]].in += 1
    end
  end
end

def buildOrder(projects, dependencies)
  graph = Graph.new(projects, dependencies)
  result = []
  len = projects.length

  while result.length < len
    invalid = true

    projects.each_with_index do |proj, idx|
      if graph.nodes[proj].in == 0
        curNodes = graph.nodes[proj].out

        curNodes.each do |curNode|
          graph.nodes[curNode].in -= 1
        end

        result << proj
        projects.delete_at(idx)
        invalid = false
        break
      end
    end

    return false if invalid
  end

  result
end

# graph = Graph.new(["a", "b", "c", "d", "e", "f"], [["a", "d"], ["f", "b"], ["b", "d"], ["f", "a"], ["d", "c"]])
# p graph
p buildOrder(["a", "b", "c", "d", "e", "f"], [["a", "d"], ["f", "b"], ["b", "d"], ["f", "a"], ["d", "c"]])
p buildOrder(["a", "b", "c", "d", "e", "f"], [["a", "d"], ["f", "b"], ["b", "d"], ["f", "a"], ["d", "c"], ["d", "a"]])
p buildOrder(["a", "b", "c", "d", "e", "f", "g"], [["f", "c"], ["f", "b"], ["f", "a"], ["c", "a"], ["b", "a"], ["b", "e"], ["a", "e"], ["d", "g"]])
