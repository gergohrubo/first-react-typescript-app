// src/components/Tree.tsx
import React from "react";
import { TreeData } from "../model";
import './Tree.css'

type Props = {
  tree: TreeData,
  onLike: (id: number) => void;
};

class Tree extends React.Component<Props> {
  render() {
    return <div className="tree-container"><div className="tree">
      <p className="name">Name: {this.props.tree.name}</p>
      <p className="scientific-name">Scientific Name: {this.props.tree.scientificName}</p>
      <p>{this.props.tree.numLikes} likes</p>
      <button onClick={() => this.props.onLike(this.props.tree.id)}>Like</button>
    </div></div>;
  }
}

export default Tree;