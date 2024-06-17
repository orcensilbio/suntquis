type Hero = {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: number;
  };
};

type Serial = Omit<Hero, 'age'>;
