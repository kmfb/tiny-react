import _ from "lodash";

interface ICreateElement {
  (
    type: string,
    props: { [propertyName: string]: any } | null,
    ...children: Array<any>
  ): any;
}

const createElement: ICreateElement = (type, props, ...children) => {
  const element = {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };

  return element;
};

const createTextElement = (text: string) => {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
};

const render = (element: any, parent: any) => {

  if (element.type === "TEXT_ELEMENT") {
    const node = document.createTextNode(element.props.nodeValue);
    parent.append(node)
    return false;
  }

  const node = document.createElement(element.type);
  const attributes = _.omit(element.props, ["children"])
  for (const key in attributes) {
    node[key] = attributes[key]
  }

  if (element.props.children) {
    element.props.children.forEach((child: any) => {
      render(child, node)
    })
  }

 

  parent.appendChild(node)
};

const TinyReact = {
  createElement,
  render,
};

export default TinyReact;
