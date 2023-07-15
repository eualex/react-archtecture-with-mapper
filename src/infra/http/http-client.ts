export interface HttpClient {
  get<Response>(url: string): Promise<Response>
}
