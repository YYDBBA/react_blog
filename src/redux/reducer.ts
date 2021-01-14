export type State = { bgColor: string; color: string }
export type Action = { type: 'yellow', payload: State } | { type: 'pink', payload: State } | { type: 'green', payload: State };
export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'yellow':
      return { ...action.payload };
    case 'pink':
      return { ...action.payload };
    case 'green':
      return { ...action.payload };
    default:
      throw new Error();
  }
}
