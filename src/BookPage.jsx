import React from 'react';
//import { findBookbyId } from './api';
import './App.css';
import './BookPage.css'


class BookPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            //bookId = props.id
        }
    }


  render(){
     return (
         <div>
         <div>
        <button id="botton-back" type="button" class="btn btn-primary" onClick={this.props.back}>Atrás</button>
        </div>
        <div className="Book-Container">
        
            <div className="Book-name">
               {this.props.book.name}
            </div>
            <div className="Info-Container">
                <div> Páginas: {this.props.book.amountOfPages} </div>
                <div> Año de edición: {this.props.book.releaseYear} </div>
                <div> Autor: {this.props.book.authorName} </div>
                <div id = "money"> Precio: $ {this.props.book.priceInPesos} </div>
            </div>

            {/*<div className="footer">
                Have you read this book? Do you like it?
                    <button type="button" className="Accept-Button">I Love this Book!</button>
                    <button type="button" className="Cancel-Button">I prefer the movie</button>
            </div>*/}
        </div>
        </div>
      )
  }
}

export default BookPage;