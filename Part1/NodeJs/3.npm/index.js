import lodash from 'lodash';

const names=['Hri',"Hridy","abc","def"];

//capitalise all names
const capitalise=lodash.map(names,lodash.capitalize)
console.log(capitalise);