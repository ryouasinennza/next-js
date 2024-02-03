import { STATUS_CODE } from '../../commonType'
import type { CustomGraphqlResponse } from '../../commonType'

export const validationError: CustomGraphqlResponse<undefined> = {
  errors: [
    {
      extensions: {
        code: STATUS_CODE.UNPROCESSABLE_ENTITY,
        errorDetails: [
          {
            attribute: 'email',
            messages: ['メールアドレスは不正な値です'],
          },
        ],
        userMessage: '入力内容に誤りがあります。',
      },
      message: 'バリデーションエラー',
    },
  ],
}
