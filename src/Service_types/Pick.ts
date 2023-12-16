interface IPickPay {
  id: number
  sum: number
  from: string
  to: string
}

//Тип Pick используется для выбора определенных свойств из объекта или типа.
// Он может быть полезен, когда вам нужно работать только с некоторыми свойствами объекта, а не со всеми

type OmitPayment = Omit<IPickPay, 'id'> // исключили из интерфейса id
type PickPayment = Pick<IPickPay, 'from' | 'to'> // берем только from и to

type ExtractPayment = Extract<'from' | 'to' | OmitPayment, string> //Извлечь из T те типы, которые можно присвоить U.
type ExcludePayment = Exclude<'from' | 'to' | OmitPayment, string> // Исключить из T те типы, которые можно присвоить U

