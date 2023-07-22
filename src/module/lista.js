class Node {
    constructor(value) {
      this.value = value;
      this.next = null; // Ponteiro para o próximo nó (inicialmente é nulo)
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null; // O início da lista (cabeça)
      this.tail = null; // O final da lista (cauda)
    }
  
    // Adiciona um novo elemento no final da lista
    append(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        // Se a lista estiver vazia, o novo nó será tanto a cabeça quanto a cauda
        this.head = newNode;
        this.tail = newNode;
      } else {
        // Caso contrário, adiciona o novo nó após o nó da cauda atual e atualiza a cauda
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    // Percorre a lista e imprime os valores dos elementos
    print() {
      let current = this.head;
  
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  
    // Remove um elemento da lista com base no valor
    apagar(value) {
      let current = this.head;
      let previous = null;
  
      // Procura o nó com o valor especificado
      while (current) {
        if (current.value === value) {
          if (previous) {
            // Se o nó não for o primeiro, ajusta o ponteiro do nó anterior para pular o nó atual
            previous.next = current.next;
          } else {
            // Se o nó for o primeiro, ajusta a cabeça para o próximo nó
            this.head = current.next;
          }
  
          // Se o nó a ser removido for a cauda, atualiza a cauda
          if (current === this.tail) {
            this.tail = previous;
          }
  
          // O nó foi encontrado e removido, então podemos sair do loop
          break;
        }
  
        // Atualiza os ponteiros para avançar na lista
        previous = current;
        current = current.next;
      }
    }
  }
  
  // Exemplo de uso da lista encadeada
  const linkedList = new LinkedList();
  linkedList.append(10);
  linkedList.append(20);
  linkedList.append(30);
  
  console.log('Antes de apagar:');
  linkedList.print(); // Output: 10 20 30
  
  linkedList.apagar(20);
  
  console.log('Depois de apagar:');
  linkedList.print(); // Output: 10 30
  