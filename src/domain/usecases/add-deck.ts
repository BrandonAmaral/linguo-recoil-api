export interface AddDeck {
  add: (params: AddDeck.Params) => Promise<AddDeck.Result>;
}

export namespace AddDeck {
  export type Params = {
    name: string;
    isPublic: boolean;
  };
  export type Result = void;
}
