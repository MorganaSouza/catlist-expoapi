
---

# **CATLIST**

**CatList** é um aplicativo para explorar diversas raças de gatos. Ele permite que os usuários vejam informações detalhadas sobre cada raça, como origem, temperamento, expectativa de vida e muito mais. Com uma interface simples e intuitiva, os usuários podem procurar por raças e obter informações adicionais, incluindo imagens e links para mais detalhes.

---

## **FUNCIONALIDADES**

* **Lista de Raças de Gatos:** Mostra todas as raças de gatos disponíveis.
* **Busca de Raças:** Permite buscar por uma raça específica de gato.
* **Detalhes de Raça:** Ao selecionar uma raça, é possível visualizar:
* **Salvar Raça:** Permite que o usuário salve uma raça favorita, armazenando essa informação localmente no dispositivo com o uso do AsyncStorage. Mesmo que o aplicativo seja fechado, ao reabrir, a raça salva continuará visível na lista de favoritos. Essa funcionalidade garante uma experiência personalizada e persistente, sem necessidade de conexão com a internet para recuperar os dados salvos.

  * Origem
  * Temperamento
  * Expectativa de vida
  * Peso
  * Descrição
  * Link para o artigo da Wikipedia (quando disponível)
* **Interface Interativa e Animações:** Inclui animações suaves para uma melhor experiência do usuário.
* **Consumo de API:** Utiliza a [The Cat API](https://thecatapi.com/) para obter os dados das raças.
* **Armazenamento Local:** Utiliza armazenamento local no dispositivo para manter dados ou preferências do usuário.

---

## **TECNOLOGIAS USADAS**

* **React Native:** Framework para desenvolvimento mobile.
* **Expo:** Ferramenta que facilita o desenvolvimento e o build de apps com React Native.
* **The Cat API:** API usada para obter informações sobre raças de gatos.
* **@expo-google-fonts/comic-neue:** Fonte personalizada utilizada no design do app.
* **React Navigation:** Utilizado para navegação entre telas.
* **AsyncStorage:** Utilizado para armazenar dados localmente no dispositivo.

---

## **REQUISITOS DA ATIVIDADE**

Este aplicativo foi desenvolvido como parte da disciplina **Coding - Mobile (TADS036/3M)** com os seguintes requisitos:

* Criar um aplicativo em **React Native** com **Expo**.
* Consumir dados de uma **API externa**.
* Exibir os dados em tela de forma **clara e interativa**.
* Utilizar o **armazenamento local** do dispositivo.

Entrega realizada via Teams com link para o repositório no GitHub.

---

## **INSTALAÇÃO**

### **REQUISITOS**

* Node.js
* npm ou yarn
* Expo CLI (opcional, mas recomendado)

### **PASSOS**

1. Clone o repositório:

   ```bash
   git clone  https://github.com/MorganaSouza/catlist-expoapi.git

   ```

2. Navegue até a pasta do projeto:

   ```bash
   cd catlist
   ```

3. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

4. Inicie o servidor do Expo:

   ```bash
   npm start
   # ou
   expo start
   ```

5. Abra o aplicativo no seu dispositivo ou emulador utilizando o QR code gerado ou com:

   ```bash
   expo start --android
   # ou
   expo start --ios
   ```

---

## **COMO USAR**

1. Abra o aplicativo.
2. Veja a **lista de raças de gatos**.
3. Use a **barra de pesquisa** para buscar uma raça específica.
4. Clique em uma raça para visualizar os **detalhes**.
5. Explore as informações e, se disponível, acesse o **link para a Wikipedia**.

---

## **LICENÇA**

Este projeto está licenciado sob a **Licença MIT** – veja o arquivo `LICENSE` para mais detalhes.

---

## **AUTOR**

**Morgana Souza**

---

## **AGRADECIMENTOS**

* [**The Cat API**](https://thecatapi.com/) pela API de dados sobre gatos.
* **Expo** pela excelente ferramenta para desenvolvimento de apps com React Native.

---
