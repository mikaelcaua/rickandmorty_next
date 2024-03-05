export interface IPerson{
    name:string
    image:string;
    id:string;
    location:{name:string, url:string}
    species:string
    status:string
}

export const defaultPerson: IPerson = {
    name: '',
    image: '',
    id: '',
    location: { name: '', url: '' },
    species: '',
    status: ''
};