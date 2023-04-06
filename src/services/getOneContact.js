import http from "./httpService";

export default function getOnContact(id) {
  return http.get(`/contacts/${id}`);
}
