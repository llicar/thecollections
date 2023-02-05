import blazerOffWhite from '../assets/images/products/female/blazer-alongado-offwhite-f.jpg'
import calcaJeansLisaF from '../assets/images/products/female/calça-jean-lisa-f.jpg'
import calcaJeanAzulF from '../assets/images/products/female/calça-jeans-azul-f.jpg'
import calcaJeansLargaF from '../assets/images/products/female/calça-jeans-larga-f.jpg'
import calcaMoletomBasicaF from '../assets/images/products/female/calça-moletom-basica-f.jpg'
import calcaPantolanaF from '../assets/images/products/female/calça-pantalona-creme-f.jpg'
import conjuntoAmareloF from '../assets/images/products/female/conunto-moletom-amarelo-f.jpg'
import jaquetaJeanF from '../assets/images/products/female/jaqueta-jeans-f.jpg'
import macacaoAzulF from '../assets/images/products/female/macacao-azulmarinho-f.jpg'
import macacaoCinza from '../assets/images/products/female/macacao-cinza-f.jpg'
import moletomBordadF from '../assets/images/products/female/moletom-bordado-branco-f.jpg'
import moletomAzulF from '../assets/images/products/female/moletom-myrtle-beach-azul-f.jpg'
import sobretudoVermelhoF from '../assets/images/products/female/sobretudo-vermelho-f.jpg'
import sobretudoXadrezF from '../assets/images/products/female/sobretudo-xadrez-f.jpg'
import vestidoBrancoF from '../assets/images/products/female/vestido-branco-f.jpg'
import calcaCargoM from '../assets/images/products/male/calça-cargo-preta-m.jpg'
import calcaEstampaM from '../assets/images/products/male/calça-estampa-amarela-m.jpg'
import calcaJeanEscuraM from '../assets/images/products/male/calça-jeans-escuro-lisa-m.jpg'
import calcaJeansRasgadaM from '../assets/images/products/male/calça-jeans-rasgada-m.jpg'
import calcaJoggerBegeM from '../assets/images/products/male/calça-jogger-bege-m.jpg'
import calcaListaPretaM from '../assets/images/products/male/calça-lisa-preta-m.jpg'
import camisetaLongaM from '../assets/images/products/male/camiseta-basica-manga-longa-m.jpg'
import jaquetaCortaVentoM from '../assets/images/products/male/jaqueta-corta-vento-m.jpg'
import jaquetaCouroForradoM from '../assets/images/products/male/jaqueta-de-couro-forrada-m.jpg'
import jaquetaForradaPretaM from '../assets/images/products/male/jaqueta-forrada-preta-m.jpg'
import jaquetaJeansDestroyM from '../assets/images/products/male/jaqueta-jeans-destroyed-m.jpg'
import jaquetaJeansM from '../assets/images/products/male/jaqueta-jeans-m.jpg'
import jaquetaCouroPretaM from '../assets/images/products/male/jaqueta-couro-preta-m.jpg'
import moletomVermelhoM from '../assets/images/products/male/moletom-listrado-vermelho-m.jpg'
import moletomVerdeM from '../assets/images/products/male/moletom-verde-liso-m.jpg'

export type ProductTypes = {
    id: number;
    name: string;
    genre: string;
    price: number;
    image: string;
    description: string;
    imageImport: string
}

export const products: ProductTypes[] = [
    {
        "id": 1,
        "name": "Blazer Alongado OffWhite",
        "genre": "female",
        "price": 339.90,
        "image": "female/blazer-alongado-offwhite-f.jpg",
        "imageImport": blazerOffWhite,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 2,
        "name": "Calça jeans larga",
        "genre": "female",
        "price": 99.90,
        "image": "female/calça-jeans-larga-f.jpg",
        "imageImport": calcaJeansLargaF,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 3,
        "name": "Calça jeans lisa",
        "genre": "female",
        "price": 79.90,
        "image": "female/calça-jean-lisa-f.jpg",
        "imageImport": calcaJeansLisaF,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 4,
        "name": "Calça jeans azul",
        "genre": "female",
        "price": 109.90,
        "image": "female/calça-jeans-azul-f.jpg",
        "imageImport": calcaJeanAzulF,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 5,
        "name": "Calça moletom básica",
        "genre": "female",
        "price": 87.90,
        "image": "female/calça-moletom-basica-f.jpg",
        "imageImport": calcaMoletomBasicaF,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 6,
        "name": "Calça pantalona creme",
        "genre": "female",
        "price": 149.90,
        "image": "female/calça-pantalona-creme-f.jpg",
        "imageImport": calcaPantolanaF,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 7,
        "name": "Conunto motetom amarelo",
        "genre": "female",
        "price": 216.90,
        "image": "female/conunto-moletom-amarelo-f.jpg",
        "imageImport": conjuntoAmareloF,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 8,
        "name": "Jaqueta jeans clara",
        "genre": "female",
        "price": 119.90,
        "image": "female/jaqueta-jeans-f.jpg",
        "imageImport": jaquetaJeanF,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 9,
        "name": "Macacão azul marinho",
        "genre": "female",
        "price": 199.90,
        "image": "female/macacao-azulmarinho-f.jpg",
        "imageImport": macacaoAzulF,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 10,
        "name": "Macacão cinza",
        "genre": "female",
        "price": 189.90,
        "image": "female/macacao-cinza-f.jpg",
        "imageImport": macacaoCinza,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 11,
        "name": "Moletom bordado branco",
        "genre": "female",
        "price": 99.90,
        "image": "female/moletom-bordado-branco-f.jpg",
        "imageImport": moletomBordadF,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 12,
        "name": "Moletom Myrtlebeach azul",
        "genre": "female",
        "price": 78.90,
        "image": "female/moletom-myrtle-beach-azul-f.jpg",
        "imageImport": moletomAzulF,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 13,
        "name": "Sobretudo vermelho sangue",
        "genre": "female",
        "price": 289.90,
        "image": "female/sobretudo-vermelho-f.jpg",
        "imageImport": sobretudoVermelhoF,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 14,
        "name": "Sobretudo estampa xadrez",
        "genre": "female",
        "price": 239.90,
        "image": "female/sobretudo-xadrez-f.jpg",
        "imageImport": sobretudoXadrezF,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 15,
        "name": "Vestido bordado OffWhite",
        "genre": "female",
        "price": 206.90,
        "image": "female/vestido-branco-f.jpg",
        "imageImport": vestidoBrancoF,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 16,
        "name": "Calça cargo preta",
        "genre": "male",
        "price": 123.90,
        "image": "male/calça cargo preta-m.jpg",
        "imageImport": calcaCargoM,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 17,
        "name": "Calça estampa amarela",
        "genre": "male",
        "price": 99.90,
        "image": "male/calça estampa amarela-m.jpg",
        "imageImport": calcaEstampaM,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 18,
        "name": "Calça jeans escuro lisa",
        "genre": "male",
        "price": 109.90,
        "image": "male/calça jeans escuro lisa-m.jpg",
        "imageImport": calcaJeanEscuraM,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 19,
        "name": "Calça jeans rasgada",
        "genre": "male",
        "price": 117.90,
        "image": "male/calça jeans rasgada-m.jpg",
        "imageImport": calcaJeansRasgadaM,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 20,
        "name": "Calça jogger bege",
        "genre": "male",
        "price": 119.90,
        "image": "male/calça jogger bege-m.jpg",
        "imageImport": calcaJoggerBegeM,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 21,
        "name": "Calça lisa preta",
        "genre": "male",
        "price": 105.90,
        "image": "male/calça lisa preta-m.jpg",
        "imageImport": calcaListaPretaM,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 22,
        "name": "Camisa manga longa básica",
        "genre": "male",
        "price": 99.90,
        "image": "male/camiseta basica manga longa-m.jpg",
        "imageImport": camisetaLongaM,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 23,
        "name": "Jaqueta corta vento",
        "genre": "male",
        "price": 299.90,
        "image": "male/jaqueta corta vento-m.jpg",
        "imageImport": jaquetaCortaVentoM,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 24,
        "name": "Jaqueta de couro forrada",
        "genre": "male",
        "price": 369.90,
        "image": "male/jaqueta de couro forrada-m.jpg",
        "imageImport": jaquetaCouroForradoM,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 25,
        "name": "Jaqueta forrada preta",
        "genre": "male",
        "price": 309.90,
        "image": "male/jaqueta forrada preta-m.jpg",
        "imageImport": jaquetaForradaPretaM,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 26,
        "name": "Jaqueta jeans destroyed",
        "genre": "male",
        "price": 149.90,
        "image": "male/jaqueta jeans destroyed-m.jpg",
        "imageImport": jaquetaJeansDestroyM,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 27,
        "name": "Jaqueta jeans",
        "genre": "male",
        "price": 120.90,
        "image": "male/jaqueta jeans-m.jpg",
        "imageImport": jaquetaJeansM,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 28,
        "name": "Jaqueta de couro preta",
        "genre": "male",
        "price": 314.90,
        "image": "male/jaqueta-couro-preta-m.jpg",
        "imageImport": jaquetaCouroPretaM,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 29,
        "name": "Moletom listrado vermelho",
        "genre": "male",
        "price": 129.90,
        "image": "male/moletom listrado vermelho-m.jpg",
        "imageImport": moletomVermelhoM,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        "id": 30,
        "name": "Moletom verde básico",
        "genre": "male",
        "price": 149.90,
        "image": "male/moletom verde liso-m.jpg",
        "imageImport": moletomVerdeM,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
]