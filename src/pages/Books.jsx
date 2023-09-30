import React, {useEffect, useState} from "react";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'




class Books extends React.Component{
    state={
        data: data
    }
    render(){
        return(
            <>
            <Container>
            <br />
            <Button color="primary">Insertar Nuevo Libro </Button>
            <br /><br />

            <Table>
            <thead> <tr><th>Id</th>
            <th>Personaje</th>
            <th>Anime</th>
            <th>Acciones</th>
            </tr></thead>
            <tbody>
                {this}
            </tbody>
            </Table>
            </Container>
            
            </>
        )
    }
}


export default Books;