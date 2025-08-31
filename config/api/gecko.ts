import geckoClient from "../interceptors";

export class Gecko {
  static async get<T>(url: string, params?: unknown, token?: unknown) {
    const res = await geckoClient.get(url, { params })
    return res?.data;
  }

  static async post<T>(url: string, data?: unknown, token?: unknown) {
    const res = await geckoClient.post(url, data)
    return res?.data;
  }

  static async put<T>(url: string, data?: unknown, token?: unknown) {
    const res = await geckoClient.put(url, data);
    return res?.data;
  }

  static async delete<T>(url: string, params?: unknown, token?: unknown) {
    const res = await geckoClient.delete(url, { params })
    return res?.data;
  }
}