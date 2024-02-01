const cypressGreen = {
  name: 'Verde cipestre',
  nameFileImages: 'imagens-verde-cipestre'
};

const winterBlue = {
  name: 'Azul inverno',
  nameFileImages: 'imagens-azul-inverno'
};

const midnight = {
  name: 'Meia-noite',
  nameFileImages: 'imagens-meia-noite'
};

const stellar = {
  name: 'Estelar',
  nameFileImages: 'imagens-estelar'
};

const lightPink = {
  name: 'Rosa claro',
  nameFileImages: 'imagens-rosa-claro'
};

const colorOptions = [cypressGreen, winterBlue, midnight, stellar, lightPink];
const sizeOptions = ['41 mm', '45 mm'];
const productTitle = document.getElementById('titulo-produto');
const imgVisualization = document.getElementById('imagem-visualizacao');
const nameSelectedColor = document.getElementById('nome-cor-selecionada');
const optionImage0 = document.getElementById('0-imagem-miniatura');
const optionImage1 = document.getElementById('1-imagem-miniatura');
const optionImage2 = document.getElementById('2-imagem-miniatura');
let sizeSelected = 1;
let optionImageSelected = 1;
let selectedColor = 1;
let selectedImage = 1;

const updateSize = () => {
  const optionSizeSelected = document
    .querySelector('[name="opcao-tamanho"]:checked')
    .id.charAt(0);
  sizeSelected = optionSizeSelected;
  productTitle.innerText = `Pulseira loop esportiva azul-inverno para caixa de ${sizeOptions[sizeSelected]}`;

  sizeOptions[sizeSelected] === '41 mm'
    ? imgVisualization.classList.add('caixa-pequena')
    : imgVisualization.classList.remove('caixa-pequena');
};

const updateSelectedImage = () => {
  const optionImageSelected = document
    .querySelector('[name="opcao-imagem"]:checked')
    .id.charAt(0);
  selectedImage = optionImageSelected;

  selectedImage.src = `./imagens/opcoes-cores/${colorOptions[selectedColor]}/imagem-${selectedImage}.jpeg}`;
};

const updateSelectedColor = () => {
  const selectedColorNumber = document
    .querySelector('[name="opcao-cor"]:checked')
    .id.charAt(0);
  selectedColor = selectedColorNumber;

  productTitle.innerText = `Pulseira loop esportiva ${colorOptions[
    selectedColor
  ].name.toLowerCase()} para a caixa de  ${sizeOptions[sizeSelected]}`;

  optionImage0.src = `./imagens/opcoes-cores/${colorOptions[selectedColor].nameFileImages}/imagem-0.jpeg`;
  optionImage1.src = `./imagens/opcoes-cores/${colorOptions[selectedColor].nameFileImages}/imagem-1.jpeg`;
  optionImage2.src = `./imagens/opcoes-cores/${colorOptions[selectedColor].nameFileImages}/imagem-2.jpeg`;

  imgVisualization.src = `./imagens/opcoes-cores/${colorOptions[selectedColor].nameFileImages}/imagem-${selectedImage}.jpeg`;
  console.log(selectedImage);

  nameSelectedColor.innerText = `Cor ${colorOptions[selectedColor].name}`;
};
