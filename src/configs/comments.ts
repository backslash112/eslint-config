import type { FlatESLintConfigItem } from '../types'
import { pluginComments } from '../plugins'

export function comments(): FlatESLintConfigItem[] {
  return [
    {
      name: 'antfu:eslint-comments',
      plugins: {
        'eslint-comments': pluginComments,
      },
      rules: {
        'eslint-comments/no-aggregating-enable': 'error',
        'eslint-comments/no-duplicate-disable': 'error',
        'eslint-comments/no-unlimited-disable': 'error',
        'eslint-comments/no-unused-enable': 'error',
      },
    },
  ]
}
