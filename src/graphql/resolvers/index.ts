/* eslint-disable @typescript-eslint/no-explicit-any */
import { id as HelloWorldId } from './HelloWorld/id'
import { message as HelloWorldMessage } from './HelloWorld/message'
import { helloWorld as QueryHelloWorld } from './Query/helloWorld'

type Resolvers = {
  HelloWorld: {
    id: () => Promise<string>
    message: () => Promise<string>
  }
  Query: {
    helloWorld: () => Promise<any>
  }
}

// このファイルは 自動生成されます
export const resolvers: Resolvers = {
  HelloWorld: {
    id: HelloWorldId,
    message: HelloWorldMessage,
  },
  Query: {
    helloWorld: QueryHelloWorld,
  },
}
