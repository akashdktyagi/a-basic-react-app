## A Basic react App

1. npx create-react-app react-axios-example
2. cd react-axios-example
3. npm install axios@0.24.0

```java

import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
state = {
persons: []
}

componentDidMount() {
axios.get(`https://jsonplaceholder.typicode.com/users`)
.then(res => {
const persons = res.data;
this.setState({ persons });
})
}

render() {
return (
<ul>
{
this.state.persons
.map(person =>
<li key={person.id}>{person.name}</li>
)
}
</ul>
)
}
}

```