import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  API_URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {

  }
  getAllChats() {
    return this.http.get(`${this.API_URL}/chats`);
  }
  getChats(id: string) {
    return this.http.get(`${this.API_URL}/chats/${id}`);
  }
  deleteChat(id: string) {
    return this.http.delete(`${this.API_URL}/chats/${id}`);
  }
  updateChat(id, updatedestudiante) {
    return this.http.put(`${this.API_URL}/chats/${id}`, updatedestudiante);
  }
  saveChat(chat: any) {
    return this.http.post(`${this.API_URL}/chats`, chat);
  }
}
