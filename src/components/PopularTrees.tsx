// src/components/PopularTrees.tsx
import React from "react";
import Tree from './Tree'
import { TreeData } from "../model";
import './PopularTrees.css'

type Props = {};

type State = {
  trees: Array<TreeData>;
  commonName: string;
  scientificName: string;
};

class PopularTrees extends React.Component<Props, State> {
  state: State = {
    trees: [
      { id: 1, name: "White birch", scientificName: "Betula pendula", numLikes: 1 },
      { id: 2, name: "Weeping willow", scientificName: "Salix sepulcralis", numLikes: 2 },
      { id: 3, name: "London planetree", scientificName: "Platanus hybryda", numLikes: 3 }
    ],
    commonName: '',
    scientificName: ''
  };
  onLike = (id: number) => {
    this.setState({
      trees: this.state.trees.map(tree => tree.id === id ? { ...tree, numLikes: tree.numLikes + 1 } : tree)
    })
  }

  addTree = () => {
    this.setState({
      trees: this.state.trees.concat({ id: this.state.trees.length + 1, name: this.state.commonName, scientificName: this.state.scientificName, numLikes: 0 }),
      commonName: '',
      scientificName: ''
    })
  }

  render() {
    return <div><div className="tree-grid">
      {this.state.trees
        .sort((a, b) => b.numLikes - a.numLikes)
        .map(tree => <Tree tree={tree} onLike={this.onLike} />)
      }</div>
      <form
        onSubmit={e => {
          e.preventDefault();
          this.addTree();
        }}
        style={{ display: "flex" }}
      >
        <p style={{ margin: ".25rem" }}>
          <label>
            Common name:{" "}
            <input
              type="text"
              value={this.state.commonName}
              onChange={e => this.setState({ commonName: e.target.value })}
            />
          </label>
        </p>
        <p style={{ margin: ".25rem" }}>
          <label>
            Scientific name:{" "}
            <input
              type="text"
              value={this.state.scientificName}
              onChange={e => this.setState({ scientificName: e.target.value })}
            />
          </label>
        </p>
        <p style={{ margin: ".25rem" }}>
          <button type="submit">Add!</button>
        </p>
      </form>
    </div>;
  }
}

export default PopularTrees;