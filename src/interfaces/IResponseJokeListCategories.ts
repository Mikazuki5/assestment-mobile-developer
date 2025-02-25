export interface IValuesList {
  alias: string;
  resolved: string;
}

export interface IResponseApiJokeListCategories {
  categoryAliases:IValuesList[]
}

export interface IValuesListByCategories {
  id: number;
  category: string;
  type: string;
  joke: string;
  safe: boolean;
  lang: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  }
}

export interface IResponseJokeListByCategories {
  error: boolean;
  amount: number;
  jokes: IValuesListByCategories[];
}
