import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  API_URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {

  }
  getUsuarios() {
    return this.http.get(`${this.API_URL}/users`);
  }
  getUsuario(id: string) {
    return this.http.get(`${this.API_URL}/usuarios/${id}`);
  }
  deleteEstudiante(id: string) {
    return this.http.delete(`${this.API_URL}/users/${id}`);
  }
  updateEstudiante(id, updatedestudiante) {
    return this.http.put(`${this.API_URL}/users/${id}`, updatedestudiante);
  }
  saveUsuario(usuario: any) {
    return this.http.post(`${this.API_URL}/usuarios`, usuario);
  }
  loginUsuario(id, contra) {
    return this.http.get(`${this.API_URL}/usuarios/${id}/${contra}`);
  }
}
