export type TypeKey = 'D' | 'I' | 'S' | 'C'

export interface Option {
  text: string
  type: TypeKey
}

export interface Question {
  id: number
  options: Option[]
}

export interface TypeInfo {
  name: string
  desc: string
  traits: string[]
  tips: string[]
}

export interface ScoreItem {
  type: TypeKey
  name: string
  count: number
  percent: number
}

export interface DiscTestData {
  questions: Question[]
  typeInfo: Record<TypeKey, TypeInfo>
}
