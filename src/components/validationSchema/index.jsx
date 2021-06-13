import { string, object, number, date } from 'yup';

const schema1 = object().shape({
  nickname: string().required('Přidej přihlašovací jméno'),
  password: string().required('Přidej heslo'),
});

const schema2 = object().shape({
  date: date().required('Zadej datum'),
  weddingPlace: string().required('Zadej místo svatby'),
  celebrationPlace: string().required('Zadej místo oslavy'),
  // timeFrom: number().required('Zadej čas začátku'),
  // timeTo: number().required('Zadej konec oslavy'),
  // program: string().required('Přidej program'),
});

const schema3 = object().shape({
  starter: string(),
  main: string().required('Přidej hlavní jídlo'),
  main2: string(),
  desert: string(),
  dinner: string(),
  drinksNonAlco: string(),
  drinksAlco: string(),
  others: string(),
});

export { schema1, schema2, schema3 };
