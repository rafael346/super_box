import React,{ useState, ReactNode, createContext } from "react";

type Product = {
  id?: string;
  name: string;
  image: string;
  value: string;
  description: string;
}


type ProductContextData = {
  handleCreateFavoriteProduct: (Product: Product) => void;
  handleRemoveFavoriteProduct: (id: string) => void;
  setName: (name:string) => void;
  name: string;
  favoriteList: Product[];
  dataProducts: DataProductsProps[];
}

type ProductContextProps = {
  children: ReactNode;

}

type DataProductsProps = {
  categoryId: string;
  categoryName: string;
  product: Product[];
}
export const ProductContext = createContext<ProductContextData>({} as ProductContextData);

export function ProductContextProvider({ children }: ProductContextProps) {
  const [favoriteList, setFavoriteList] = useState<Product[]>([]);
  const [name,setName] = useState('');


  const dataProducts = [
    {
      categoryId: '1',
      categoryName: 'Hortifrúti',
      product: [
        {
          id: '10',
          name: 'Alface',
          image: 'https://superprix.vteximg.com.br/arquivos/ids/178850-600-600/Alface-Crespa-Verde-Un-396.png?v=636934628540170000',
          value: 'R$ 2,00',
          description: '1kg de alface fresco'
        },
        {
          id: '11',
          name: 'Cebola',
          image: 'https://trimais.vteximg.com.br/arquivos/ids/1022837-1000-1000/foto_original.jpg?v=637576370393570000',
          value: 'R$ 2,00',
          description: '1kg de cebola sem agrotoxico'
        },
      ],
    },
    {
      categoryId: '2',
      categoryName: 'Alimento',
      product: [
        {
          id: '20',
          name: 'Arroz',
          image: 'https://static.clubeextra.com.br/img/uploads/1/1/574001.png',
          value: 'R$5,00',
          description: '1 pacote com 1kg de arroz'
        },
        {
          id: '21',
          name: 'Feijão',
          image: 'https://www.paodeacucar.com/img/uploads/1/385/607385.png',
          value: 'R$9,00',
          description: '1 pacote com 1kg de feijão'
        },
        {
          id: '22',
          name: 'Feijão Preto',
          image: 'https://superprix.vteximg.com.br/arquivos/ids/173596-600-600/Feijao-Preto-Super-Maximo-1kg.png?v=636156035791730000',
          value: 'R$10,00',
          description: '1 pacote com 1kg de feijão preto'
        },
      ],

    },
    {
      categoryId: '3',
      categoryName: 'Laticinios',
      product: [
        {
          id: '10',
          name: 'Leite',
          image: 'https://www.embare.com.br/wp-content/uploads/2013/06/leite-po-instantaneo-pouch-1kg.png',
          value: 'R$: 3,50 ',
          description: '1 pacote de leite em pó'
        },
      ],

    },
    {
      categoryId: '4',
      categoryName: 'Limpeza',
      product: [
        {
          id: '40',
          name: 'Detergente',
          image: 'https://static.paodeacucar.com/img/uploads/1/774/11766774.png',
          value: 'R$: 2,50',
          description: '1 garrafa de detergente multiuso'
        },
      ],

    },
  ];

  function handleCreateFavoriteProduct(Product: Product) {
    const newFavoriteList = {
      id: Math.random().toString(),
      name: Product.name,
      image: Product.image,
      value: Product.value,
      description: Product.description,
      }

    setFavoriteList(existingList=> [...existingList, newFavoriteList]);
  }

  function handleRemoveFavoriteProduct(id: string ) {
    const favoriteListRemover = favoriteList.filter(product =>  product.id != id);
    setFavoriteList(favoriteListRemover)
  }


  return (
    <ProductContext.Provider value={{
      name,
      setName,
      favoriteList,
      handleCreateFavoriteProduct,
      handleRemoveFavoriteProduct,
      dataProducts,
    }}>
      {children}
    </ProductContext.Provider>
  )

}