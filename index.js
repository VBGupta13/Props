import React from "react";
import ReactDOM  from "react-dom/client";
import Book from "./Book";
import info from "./Content";
// import Greetings from "./demo";
/*function Greeting(){
    return <h2>My first component</h2>
};*/
/*const Greeting=()=>{
    return (
        <>
           <div className="someValue">
           <h3> Welcome India.</h3>
           <ul>
               <li><a href="https://www.google.com">Hello</a></li>
           </ul>
           </div>
        </>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting/>);
export default Greeting;
//return <img/> or <input/>.
*/
/*
function Booklist(){
    return(
    <>
     <h1>Amazon Best Sellers</h1>
     <section className="booklist">
        {books.map(book)=>}
         return <  
            Book{...book} key={book.id} />;
     </section>
      </>
    );
}
function Book(){
    return(
        <>
        <article>
            <Title />
            <Img />
            <Author/>   
        </article>
        </>
    );
}
const Title=()=><h2>This is the name of  book</h2>
const Img=()=>{
    return(
        <>
        <h2>This is the image of the Book</h2>
        </>
    );
}
const Author=()=>{
    return <h2>This is the book Author.</h2>
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist/>);
//export default Booklist;
export default Booklist;
*/
function Books() {
    return (
        <>
      <section className="books">
        <div className="Book1">
          <Book img={info[0].img} title={info[0].title} author={info[0].author} />
        </div>
        <div className="Book2">
          <Book img={info[1].img} title={info[1].title} author={info[1].author} />
        </div>
        <div className="Book3">
          <Book img={info[2].img} title={info[2].title} author={info[2].author} />
        </div>
      </section>
      </>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Books />);
  export default Books;