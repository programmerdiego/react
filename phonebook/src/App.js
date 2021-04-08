import React, { Component } from 'react';
import Navbar from "./containers/Navbar/Navbar.js";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            number: "",
            phoneBook: [
            ],
            showForm: true
        };

        this.inputTextName = (event) => {
            this.setState({
                name: event.target.value
            });
        };

        this.inputTextPhone = (event) => {
            this.setState({
                number: event.target.value
            });
        };

        this.addContact = () => {
            const newContact = {
                name: this.state.name,
                number: this.state.number
            };

            if (this.state.name === "" || this.state.number === "") {
                alert("Name and Phone Number must be included");
                return;
            }

            if(this.state.name !== ""){
                if(!this.state.name.match(/^[a-zA-Z]+$/)){
                    alert("Name field only allows letters");
                    return;
                }
            }

            if(this.state.number !== ""){
                /* eslint-disable no-useless-escape */
                if(!this.state.number.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)){
                    alert("Phone Number field only allows digits in the following formats:\n" +
                        "(123) 456-7890\n" +
                        "(123)456-7890\n" +
                        "123-456-7890\n" +
                        "1234567890");
                    return;
                }
            }

            this.setState((prevState) => ({
                phoneBook: prevState.phoneBook.concat(newContact),
                name: "",
                number: ""
            }));
        };

        this.deleteContact = (item) => {
            const contactsArray = this.state.phoneBook.filter(
                (contact) => contact.name !== item.name
            );
            this.setState({ phoneBook: contactsArray });
        };
        this.toggleShowForm = () => {
            this.setState({ showForm: !this.state.showForm });
        };
    }

    render() {
        console.log("contactArray", this.state.phoneBook);
        let form = null;
        if (this.state.showForm) {
            form = (
                <div className="container">
                    <div class="card">
                        <div class="card-header">
                            Add New Contact
                        </div>
                    <div class="card-body">
                        <div className="row">
                            <div className="form-group col-lg-5">
                                <input
                                    type="text" className="form-control" onChange={this.inputTextName}
                                    value={this.state.name} placeholder="Name"
                                />
                            </div>
                            <div className="form-group col-lg-5">
                                <input
                                    type="tel" className="form-control" onChange={this.inputTextPhone}
                                    value={this.state.number} placeholder="Phone Number"
                                />
                            </div>
                            <button type="button" className="btn btn-primary btn-sm col-lg-2" onClick={this.addContact}>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            );
        }

        return (
            <div class="App">
                <Navbar/>
                <div class="container-fluid">
                    {form}
                </div>
                {this.state.phoneBook.map((contact =>
                        <div class="container flex">
                            <div class="row">
                            <div className="col-lg-5">
                                <h5><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /> <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg>
                                    &nbsp;{contact.name}</h5>
                            </div>
                            <div className="col-lg-5">
                                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /></svg>
                                    &nbsp;&nbsp;{contact.number}</p>

                            </div>
                                <button type="button" className="btn btn-danger" onClick={() => this.deleteContact(contact)} >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg" width="15" height="10" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>
                                </button>
                            </div>
                            <hr/>
                    </div>
                ))}
            </div>
        );
    }
}

export default App;
