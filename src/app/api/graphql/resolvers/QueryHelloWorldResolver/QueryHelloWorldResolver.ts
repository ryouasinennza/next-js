export class QueryHelloWorldResolver {
  async resolve(): Promise<string> {
    return 'Hello World!'
  }
}
