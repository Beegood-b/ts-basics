type TypeUser = {
    name: string;
    age: number;
};

type TypeAdress = {
    city: string;
    country: string;
};

const user: TypeUser = {
    age: 24,
    name: 'Art'
}

const adress: TypeAdress = {
    city: 'Riga',
    country: 'Latvia'
}

let common: TypeUser & TypeAdress

common = {
    ...user, ...adress
}