import React from 'react';
import Bootstrap from './Icons/Bs';
import C from './Icons/C';
import Css from './Icons/Css';
import Exp from './Icons/Exp';
import Graph from './Icons/Graph';
import Hb from './Icons/Hb';
import Html from './Icons/Html';
import Java from './Icons/Java';
import Jq from './Icons/Jq';
import Js from './Icons/Js';
import Mongo from './Icons/Mongo';
import Mysql from './Icons/Mysql';
import Node from './Icons/Node';
import Python from './Icons/Python';
import ReactIcon from './Icons/React';
import Git from './Icons/Gith';

function Logo(props) {
  switch(props.name) {
    case 'Bootstrap':
      return <Bootstrap />;
    case 'C':
      return <C />;
    case 'CSS':
      return <Css />;
    case 'Express':
      return <Exp />;
    case 'GraphQL':
      return <Graph />;
    case 'Handlebars':
      return <Hb />;
    case 'HTML':
      return <Html />;
    case 'Java':
      return <Java />;
    case 'jQuery':
      return <Jq />;
    case 'Javascript':
      return <Js />;
    case 'MongoDB, Mongoose':
      return <Mongo />;
    case 'MySQL, Sequelize':
      return <Mysql />;
    case 'Node':
      return <Node />;
    case 'Python':
      return <Python />;
    case 'React':
      return <ReactIcon />;
    case 'Git':
      return <Git />;
    default:
      return null;
  }
}

export default Logo;
