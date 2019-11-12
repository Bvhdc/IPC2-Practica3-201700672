import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  API_URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {

  }
  getMensajes(idChat: string) {
    return this.http.get(`${this.API_URL}/mensajes/${idChat}`);
  }
  getEstudiante(id: string) {
    return this.http.get(`${this.API_URL}/users/${id}`);
  }
  createMensaje(id: string , mensaje: any) {
    return this.http.post(`${this.API_URL}/mensajes/${id}`, mensaje);
  }
  deleteMensaje(id: string) {
    return this.http.delete(`${this.API_URL}/mensajes/${id}`);
  }
  updateEstudiante(id, updatedestudiante) {
    return this.http.put(`${this.API_URL}/mensajes/${id}`, updatedestudiante);
  }
}
