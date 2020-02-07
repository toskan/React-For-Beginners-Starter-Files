import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
     myInput = React.createRef();

     goToStore = (event) => {
          //1.stop form submit
          event.preventDefault();
          //2.get text from input
          const storeName = this.myInput.current.value;
          console.log(this.myInput.current.value);
          //3. change page to /store/whatever-they-entered
          this.props.history.push(`/store/${storeName}`);    
     }
     render() {
          return (
          <form className="store-selector" onSubmit={this.goToStore}>
               { /* comment */}
               <h2>Please Enter a Store</h2>
               <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()}/>
               <button type="submit">Visit Store --></button>
          </form>
          );
     }
}

export default StorePicker;