import { HttpClient } from "./http-client";

export class FetchHttpClientAdapter implements HttpClient {
  constructor(private readonly baseUrl: string) {}

  async get<Response>(url: string): Promise<Response> {
    const response = await fetch(this.baseUrl+url)
    const data: Response = await response.json()
    return data
  }
}
