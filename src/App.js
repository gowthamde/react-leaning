import './App.css';
// import Clock from './Clock/Clock';
// import HelloWorld from './HelloWorld/HelloWorld';
// import TODoApp from './TODO/ToDoApp';
import GowthamSearchFilter from './ThinkingInReact/GowthamSearchFilter';
function App() {
  const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];

  const element = (
    // Hello World Example
    // <HelloWorld name="Gowtham"/>

    // TODO List Example
    //       <div>
    //           <TODoApp />
    //       </div>

    // Clock Example
    // <div>
    //   <Clock />
    //   <Clock />
    //   <Clock />
    // </div>

    // Thinking in React
    <div>
      <GowthamSearchFilter products={PRODUCTS}/>
    </div>
  )
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
