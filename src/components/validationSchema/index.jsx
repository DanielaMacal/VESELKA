import { string, object, number, date } from 'yup';

const schema1 = object().shape({
  nickname: string().required('pridaj prihlasovacie meno'),
  password: string().required('pridaj heslo'),
});

const schema2 = object().shape({
  date: date().required('Zadaj datum'),
  weddingPlace: string().required('Zadaj miesto svadby'),
  celebrationPlace: string().required('Zadaj miesto oslavy'),
  // timeFrom: number().required('Zadaj čas začiatku'),
  // timeTo: number().required('Zadaj koniec oslavy'),
  // program: string().required('Pridaj program'),
});

const schema3 = object().shape({
  starter: string(),
  main: string().required('Pridaj hlavné jedlo'),
  main2: string(),
  desert: string(),
  dinner: string(),
  drinksNonAlco: string(),
  drinksAlco: string(),
  others: string(),
});

export { schema1, schema2, schema3 };
